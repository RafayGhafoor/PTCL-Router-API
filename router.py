'''
A PTCL router class, which allows to interact with the router easily
through terminal.

Example:

>>> from routerPTCL import Router
>>> router = Router('192.168.1.1')
>>> router.reboot() # Reboots router
>>> router.active_dev() # Shows devices which are currently connected to the router
'''

import requests
import bs4
import re
import sys

mymacs = {"Samsung Galaxy Tab": "5c:2e:59:4d:33:67", "Ahmer": "68:94:23:AC:59:51", "Asad": "A0:32:99:AB:33:31"}

class Router(object):
    '''
    A PTCL router class.
    '''
    macAddress_regex = re.compile(r'^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$')


    def __init__(self, mask="http://192.168.1.1", username="admin", password="admin"):
        self.mask = mask + '/'
        self.username = username
        self.password = password
        self.dev_hostname = []  # Devices Hostname
        self.mac_address = []   # Devices Mac Address
        self.active_dev = []    # Active Devices on Wi-Fi
        self.mac_and_host = {}  # Mac Addresses and Hostnames
        self.session = requests.Session()
        self.session.auth = (self.username, self.password)


    def scrape_page(self, url):
        '''Scrape given link and create a beautiful soup object'''
        try:
            request_url = self.session.get(url)
            html_soup = bs4.BeautifulSoup(request_url.content, 'html.parser')
            return request_url, html_soup
        except requests.exceptions.ConnectionError:
            print "Internet Connection Down.\nExiting..."
            sys.exit()


    def get_dhcpinfo(self):
        '''Gets information from dhcp about the associated Mac Adresses and Hostnames.'''
        r, soup = self.scrape_page(self.mask + 'dhcpinfo.html')
        count = 1
        td = soup.findAll('td')
        for i in td:
            if self.macAddress_regex.search(i.text):
                '''
                The HTML page contains hostnames and mac addresses right next
                to each other in the form of table. We search in the tables list
                (td) until a mac address is found, then appends it to the
                mac_address list. The hostname is located before it so by using
                index less than the current index of mac address, we obtain the
                hostname and append it to the dev_hostname list.
                '''
                self.dev_hostname.append(td[td.index(i) - 1].text.encode('ascii'))
                self.mac_address.append(i.text.encode('ascii'))


    def show_dhcpinfo(self):
        self.get_dhcpinfo()
        print "-" * 20 + "DHCP-INFO" + "-" * 20 + '\n'
        for num, i in enumerate(zip(self.dev_hostname, self.mac_address), 1):
            whitespace = 30 - len(i[0])
            print "%s:%s\n" % (i[0], ' ' * whitespace + i[1].upper())
        print "-" * 49


    def get_stationinfo(self):
        '''Gets information about the connected devices'''
        r, soup = self.scrape_page(self.mask + "wlstationlist.cmd")
        td = soup.findAll('td')
        for i in td:
            pass
        for found in soup.findAll('td'):
            if "PTCL-BB" not in found.text and "Yes" not in found.text and "wl0" not in found.text\
                                            and self.macAddress_regex.search(found.text.strip()) != None:
                self.active_dev.append(found.text.strip().lower().encode('ascii'))


    def show_active_dev(self):
        '''Shows active devices (Mac Addresses) and their hostnames'''
        self.get_stationinfo()
        self.get_dhcpinfo()
        self.mac_and_host = dict(zip(self.dev_hostname, self.mac_address))
        hostnames = []
        print "-" * 20 + "STATION-INFO" + "-" * 20 + '\n'
        count = 1
        for k, v in self.mac_and_host.iteritems():
            for active_clients in self.active_dev:
                if active_clients in v:
                    print "(%s) %s%s\n" % (count, k + ":" + ' ' * (30 - len(k) - len(str(count))), active_clients.upper())
                    hostnames.append(k)
                    count += 1
        print "-" * 52 + '\n'
        return hostnames


    def get_active_num(self):
        '''
        Gets Current Active Devices Number.
        '''
        def exclude_android_dev(self):
            '''
            Excludes android devices from the list of active devices.
            '''
            pass
        pass


    def get_sessionkey(self):
        '''Gets session key from the html page'''
        r, soup = self.scrape_page(self.mask + "wlmacflt.cmd")
        return re.search(r'\d{3,30}', r.text).group().encode('ascii')


    def block_dev(self, devmac, sessionKey):
        '''Block device using Mac Address.'''
        r, soup = self.scrape_page(self.mask + "wlmacflt.cmd?action=add&wlFltMacAddr=%s&sessionKey=%s" % (devmac, sessionKey))
        print "Blocked."


    def unblock_dev(self, udevmac, sessionKey):
        '''Unblock device using Mac Address.'''
        r, soup = self.scrape_page(self.mask + "wlmacflt.cmd?action=remove&rmLst=%s&sessionKey=%s" % (udevmac, sessionKey))
        print "Unblocked."


    def hh_to_HH(self, time):
        '''Converts 12 hours format to 24 hours.'''
        pass


    def reboot_router(self, SessionKey):
        '''Reboots Router.'''
        r, soup = self.scrape_page(self.mask + "rebootinfo.cgi?sessionKey=%s") % self.SessionKey
        print "Rebooted."


    def time_restriction(self):
        '''Restricts user from using internet for limited time.'''
        pass


    def url_filter(self):
        '''Block website temporarily/permanently (i.e Temporarily, when time is specified)'''
        pass


    def url_remove_filter(self):
        '''Removes url filter after specified time or when provided.'''
        pass


class Monitor(Router):
    '''
    Monitor class derived from the router, which contains method for
    monitoring users connected to router.
    '''

    def get_suspects(self):
        '''
        Searches suspected users who are currently connected
        to the router.
        '''
        suspects = {"User 1": "Mac_Address"} # Sample


    def monitor_dev(self): # Monitor Devices
        '''Monitor devices, when they connect to router and disconnect. Also
        gets the time a device remains connected to the router.'''
        pass


    def dev_conninfo(self):   # Device Connection Info
        '''Analyzes how much time a device remains connected to the device throughout
        the day.'''
        pass
