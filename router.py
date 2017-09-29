'''
A PTCL router class, which allows to interact with the router easily
through terminal.

Example:

>>> from router import Router
>>> router = Router('192.168.1.1')
>>> router.reboot() # Reboots router
>>> router.active_dev() # Returns a list of active devices.
'''
import requests
import bs4
import re
import sys


class Router(object):
    '''
    A PTCL router class.
    '''
    mac_adr_regex = re.compile(r'^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$')


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


    def scrape_page(self, url, create_soup='n'):
        '''
        Scrape given link and create a beautiful soup object.
        '''
        try:
            request_url = self.session.get(url)
            if request_url.status_code == 401:
                sys.exit("Username or Password is incorrect.")
            elif request_url.status_code == 200:
                if create_soup == 'y':
                    html_soup = bs4.BeautifulSoup(request_url.content, 'lxml')
                    return html_soup
                return request_url
        except requests.exceptions.ConnectionError:
            print("Internet Connection Down.\nExiting...")
            sys.exit()


    def session_key(self):
        '''
        Gets session key from the html page.
        '''
        r = self.scrape_page(url=self.mask + "wlmacflt.cmd")
        self.sessionKey = re.search(r'\d{3,30}', r.content).group().encode('ascii')
        return self.sessionKey


    def dhcpinfo(self):
        '''
        Gets information from dhcp i.e., Mac Adresses and Hostnames.
        '''
        soup = self.scrape_page(url=self.mask + "dhcpinfo.html", create_soup='y')
        td = soup.findAll('td')
        for i in td:
            if self.mac_adr_regex.search(i.text):
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
            if self.mac_adr_regex.search(i.text.strip()):
                self.active_dev.append(i.text.strip().lower().encode('ascii'))
        return self.active_dev


    def block(self, devmac):
        '''
        Block device using Mac Address.
        '''
        requests.get(self.mask + "wlmacflt.cmd?action=add&wlFltMacAddr=%s&sessionKey=%s" % (devmac, self.session_key()))


    def unblock(self, udevmac):
        '''
        Unblock device using Mac Address.
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
        '''
        # Set day to current day
        # mon-tue
        # mon-sun
        # mon-mon (Fail)
        def day_to_binary(days="", start_name='', end_name=''):
            pass

        days = days.split('-')
        for keys, val in week_days.items():
            if len(days) != 0 and len(days) < 2:
                if len(days) == 0:
                    scrape_page(self.mask, "todmngr.tod?action=add&username=%s&mac=%s&days=%s&start_time=%s&end_time=%s&sessionKey=%s"\
                                                                                % (username, mac, week_days[days], start, end))
                elif len(days) == 1:
                    if days[0] == days[1]:
                        scrape_page(self.mask, "todmngr.tod?action=add&username=%s&mac=%s&days=%s&start_time=%s&end_time=%s&sessionKey=%s"\
                                                                                    % (username, mac, week_days["Everyday"], start, end))
                    elif day[1]:
                        pass    # Mon - Sunday, select the value from sunday and add it to the value preceding it.

        week_days = {
        "Mon": 1,
        "Tue": 2,
        "Wed": 4,
        "Thu": 8,
        "Fri": 16,
        "Sat": 32,
        "Sun": 64
        "Everyday": 127}
        username = ""
        mac = ""
        # Time should be converted to minutes.
        start_time = ""
        end_time = ""
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
