'''
A PTCL router class, which allows to interact with the router.

Example:
# router is used an instance of Router class in all examples.
>>> from router import Router
>>> router = Router('192.168.1.1')      # Connects session for interacting with router
>>>
>>> router.reboot() # Reboots router
>>> router.stationinfo() # Returns a list of active devices
['macxxx', 'macxxx2', 'macxx3']

>>> router.dhcpinfo() # Returns a dictionary object for dhcpinfo
{'HOSTNAME': ['Mac', 'LocalIp', 'Expires']}
{'my-computer': ['macxx', '192.168.10.1', '23 Hours, 59 Minutes']}
'''
import requests
import bs4
import re
import sys


class Router(object):
    '''
    A PTCL router class.

    To create connection to the router interface, call the class using these
    arguments:
            gateway, username, password
    All the arguments are strings.
    '''
    mac_pattern = re.compile(r'^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$')


    def __init__(self, mask="192.168.10.1", username="admin", password="admin"):
        self.mask = "http://" + mask + '/'
        self.username = username
        self.password = password
        self.dev_info = {}      # Devices info
        self.active_dev = []    # Active Devices on Wi-Fi
        self.host_and_mac = []  # Mac Addresses and Hostnames
        self.session = requests.Session()
        self.session.auth = (self.username, self.password)
        self.sessionKey = ""


    def scrape_page(self, url='', soup='n'):
        '''
        Scrape given link and create a beautiful soup object.
        - url:  Url to scrape.
        - soup: "n" to not create soup object and only return request response.
        '''
        if not url:
            return
        try:
            request_url = self.session.get(url)
            if request_url.status_code == 401:
                sys.exit("Username or Password is incorrect.")
            elif request_url.status_code == 200:
                if soup == 'y':
                    html_soup = bs4.BeautifulSoup(request_url.content, 'lxml')
                    return html_soup
                return request_url
        except requests.exceptions.ConnectionError:
            print("Internet Connection Down.\nExiting...")
            sys.exit()


    def session_key(self):
        '''
        Gets session key from the html page for interacting with forms which
        require session key for authentication.
        '''
        r = self.scrape_page(url=self.mask + "wlmacflt.cmd")
        self.sessionKey = re.search(r'\d{3,30}', r.content).group().encode('ascii')
        return self.sessionKey


    def dhcpinfo(self):
        '''
        Gets information from dhcp page.
        Format:
            HOSTNAME | MAC | LOCAL IP | EXPIRES IN

        Example:
        >>> my-pc | xx:xx..| 192.168..| 19 Hours ...

        Return:
            self.dev_info (Dictionary object)
        '''
        soup = self.scrape_page(url=self.mask + "dhcpinfo.html", create_soup='y')
        td = soup.findAll('td')
        for i in td:
            if self.mac_pattern.search(i.text):
                '''
                The HTML page contains hostnames and mac addresses right next
                to each other in the form of table. We search in the tables list
                (td) until a mac address is found, then appends it to the
                mac_address list. The hostname is located before it so by using
                index less than the current index of mac address, we obtain the
                hostname and append it to the dev_hostname list.
                '''
                # Before mac_addresses, there is hostname
                # After mac_addresses, there are local ip and expire time for
                # the device connected
                hostname = td[td.index(i) - 1].text
                self.dev_info["Hostname"] = hostname
                self.dev_info[hostname] = [i.text, td[td.index(i) + 1].text, td[td.index(i) + 2].text]
        return (self.dev_info)


    def stationinfo(self):
        '''
        Gets information about the connected devices.
        '''
        soup = self.scrape_page(url=self.mask + "wlstationlist.cmd", create_soup='y')
        for i in soup.findAll('td'):
            if self.mac_pattern.search(i.text.strip()):
                self.active_dev.append(i.text.strip().lower().encode('ascii'))
        return self.active_dev


    def block(self, devmac):
        '''
        Block device using Mac Address.
        - devmac: Device mac address to block.

        Example:
        >>> router.block('xx:xx:xx:xx:xx:xx')
        '''
        requests.get(self.mask + "wlmacflt.cmd?action=add&rmLst=%s&sessionKey=%s" % (devmac, self.session_key()))


    def unblock(self, udevmac):
        '''
        Unblock device using Mac Address.
        - udevmac: Device mac address to unblock.

        Example:
        >>> router.unblock('xx:xx:xx:xx:xx:xx')
        '''
        requests.get(self.mask + "wlmacflt.cmd?action=remove&rmLst=%s&sessionKey=%s" % (udevmac, self.session_key()))

    def reboot(self):
        '''
        Reboots Router.
        '''

        r = requests.get(self.mask + "rebootinfo.cgi?sessionKey=%s" % self.session_key())
        if r.status_code == 200:
            print("Router has been succesfully rebooted.")
        else:
            print("Request not successful.")


    def time_limit(self, username="User_1", mac="", days="", start=1, end=24):
        '''
        Restricts user from using internet for limited time.
        Creates a user profile containing mac, days, start_time, end_time.
        - username: Create a profile for time limit of the provided username.
        - mac:      Device mac address on which time limit is applied.
        - days:     Day/days on which the time limit is applied.
        # Time is 24-hour format.
        - start:    Start time of device connection limit.
        - end:      End time of device connection limit.

        Example:
        Creates a profile named as User-1 and sets time limit for mac [x] at
        Monday beginning from 3 am to 6 pm.
        >>> router.time_limit(username="User-1", mac="xx:xx...", days="Mon", start=3, end=6)

        Sets time limit from Monday to Friday.
        >>> router.time_limit(username="User-1", mac="xx:xx...", days="Mon-Fri", start=3, end=6)
        '''

        # The day field in the request takes the power of 2 for the corresponding day in week.
        # Monday is    2^0
        # Tuesday is   2^1
        # Wednesday is 2^2
        week_days = {
        "Mon": 1,
        "Tue": 2,
        "Wed": 4,
        "Thu": 8,
        "Fri": 16,
        "Sat": 32,
        "Sun": 64,
        "Everyday": 127}
        num_lst = []

        def day_to_binary(integer):
            # TODO: Add check for integer parameter.
            '''
            Takes an integer and divides it by 2, appends to the num_lst
            and returns sum of the num_lst when it reaches 1.
            '''
            if 1 in num_lst:
                return sum(num_lst)
            num_lst.append(integer / 2)
            return day_to_binary(integer / 2)

        def convert_time(start_time="1", end_time="23:59"):
            # TODO : Add test that the numbers after : shouldn't exceed 60 (minutes)
            '''
            Converts time to minutes.
            Takes time and splits it by ":", the first element before ":" is in
            hour and the second element is in minutes.

            Parameters:
            - start_time: start time to apply limit from. Eg: 1:00 (am)
            - end_time:   end time to apply limit till. Eg: 13:00 (pm)

            Return (Integer):
                sum of start_time and end_time in format (Hours * 60 + minutes).

            Example:
            >>> convert_time(13:00, 18:08)
                # returns (13 * 60) + 00, (18 * 60) + 08
                780, 1080
            '''
            start_time = [int(i) for i in start_time.split(':')]
            end_time = [int(i) for i in end_time.split(':')]
            if len(start_time) == 1:
                start_time.append(00)
            if len(end_time) == 1:
                end_time.append(00)
            start_time = (start_time[0] * 60) + start_time[1]
            end_time = (end_time[0] * 60) + end_time[1]
            return start_time, end_time


        days = days.split('-')
        for keys, val in week_days.items():
            if days and len(days) < 3:
                if len(days) == 1:
                    print(self.mask, "todmngr.tod?action=add&username=%s&mac=%s&days=%s&start_time=%s&end_time=%s&sessionKey=%s"\
                                                                                % (username, mac, week_days[days], start, end, self.session_key()))
                    break
                elif len(days) == 2 and days[0] in week_days and days[1] in week_days:
                    if days[0] == days[1]:
                        print(self.mask, "todmngr.tod?action=add&username=%s&mac=%s&days=%s&start_time=%s&end_time=%s&sessionKey=%s"\
                                                                                    % (username, mac, week_days["Everyday"], start, end, self.session_key()))
                        break
                    elif days[0] != days[1]:
                        print(self.mask, "todmngr.tod?action=add&username=%s&mac=%s&days=%s&start_time=%s&end_time=%s&sessionKey=%s"\
                                                                                    % (username, mac, str(week_days[days[1]] + day_to_binary(week_days[days[1]])), str(start), str(end), self.session_key()))
                        break
                        # Mon - Sunday, select the value from sunday and add it to the value preceding it.
                else:
                    print("Specified day is not in week_days.")

        # time_limit("Mon")
        # Mon-Sun
        # scrape_page(self.mask, todmngr.tod?action=add&username=hello&mac=64:5a:04:8d:38:bc&days=63&start_time=1&end_time=1389&sessionKey=1478055827)


    def url_filter(self):
        '''
        Block website temporarily/permanently (i.e Temporarily, when time is specified).
        '''
        pass


    def passwd(self):
        '''
        Change the password of the router.
        '''
        pass
