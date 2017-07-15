import requests
import bs4
import re

# mymacs = {"Samsung Galaxy Tab": "5c:2e:59:4d:33:67"}

class Router(object):
    hostname_regex = re.compile(r"\w{3,10}")
    macAddress_regex = re.compile(r'^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$')


    def __init__(self, mask):
        self.mask = mask
        self.dev_hostname = []  # Devices Hostname
        self.mac_address = []   # Devices Mac Address
        self.active_dev = []    # Active Devices on Wi-Fi
        self.mac_and_host = {}  # Mac Addresses and Hostnames
        
        
    def scrape_page(self, link):
        '''Scrape given link and create a beautiful soup object'''
        request_url = requests.get(link, auth=('admin', 'admin'))
        html_soup = bs4.BeautifulSoup(request_url.content, 'html.parser')
        return request_url, html_soup
    
    
    def get_dhcpinfo(self):
        '''Gets information from dhcp about the associated Mac Adresses and Hostnames.'''
        r, soup = scrape_page('http://192.168.1.1/dhcpinfo.html')
        count = 1
        for i, found in enumerate(soup.findAll('td'), 1):
            if i > 4:
                if hostname_regex.search(found.text) != None and "hours" not in found.text\
                                                                and "192" not in found.text:
                    dev_hostname.append(found.text.encode('ascii'))
                elif macAddress_regex.search(found.text) != None and "hours" not in found.text\
                                                                    and "192" not in found.text:
                    mac_address.append(found.text.encode('ascii'))
    
    
    def get_stationinfo(self):
        '''Gets information about the connected devices'''
        r, soup = scrape_page("http://192.168.1.1/wlstationlist.cmd")
        for found in soup.findAll('td'):
            if "PTCL-BB" not in found.text and "Yes" not in found.text and "wl0" not in found.text\
                                            and macAddress_regex.search(found.text.strip()) != None:
                running_dev.append(found.text.strip().lower().encode('ascii'))
    
    
    def show_active_dev(self):
        '''Shows active devices (Mac Addresses) and their hostnames'''
        get_stationinfo()
        get_dhcpinfo()
        mac_host = dict(zip(dev_hostname, mac_address))
        count = 1
        for k, v in mac_host.iteritems():
            for active_clients in running_dev:
                if active_clients in v:
                    print "%s) Hostname:%s | %s" % (count, k, active_clients.upper())
                    count += 1
        print ''
    
    
    def get_sessionkey(self):
        '''Gets session key from the html page'''
        r, soup = scrape_page("http://192.168.1.1/wlmacflt.cmd")
        return re.search(r'\d{3,30}', r.text).group().encode('ascii')
    
    
    def block_dev(self, devmac, sessionKey):
        '''Block device using Mac Address.'''
        r, soup = scrape_page("http://192.168.1.1/wlmacflt.cmd?action=add&wlFltMacAddr=%s&sessionKey=%s" % (devmac, sessionKey))
        print "Blocked."
    
    
    def unblock_dev(self, udevmac, sessionKey):
        '''Unblock device using Mac Address.'''
        r, soup = scrape_page("http://192.168.1.1/wlmacflt.cmd?action=remove&rmLst=%s&sessionKey=%s" % (udevmac, sessionKey))
        print "Unblocked."
        
        
    def hh_to_HH(self, time):
        '''Converts 12 hours format to 24 hours.'''
        pass
        
        
    def reboot_router(self, sessionKey):
        '''Reboots Router.'''
        r, soup = scrape_page("http://192.168.1.1/rebootinfo.cgi?sessionKey=%s") % SessionKey
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
    
    
    def monitor_dev(self): # Monitor Devices
        '''Monitor devices, when they connect to router and disconnect. Also 
        gets the time a device remains connected to the router.'''
        pass
        
        
    def dev_conninfo(self):   # Device Connection Info
        '''Analyzes how much time a device remains connected to the device throughout
        the day.'''
        pass
 
    
# def main():
#     '''functional code goes here.'''
#     pass
#     
#     
# qs = int(raw_input("1) To Block Mac Address: \n2) To Unblock Mac Address: \n3) Reboot Router: "))
# 
# if qs == 1:
#     show_active_dev()
#     dev_mac = raw_input("Please Enter Device Mac Address: ").upper()
#     block_dev(dev_mac, get_sessionkey())
#     
# elif qs == 2:
#     show_active_dev()
#     udev_mac = raw_input("Please Enter Device Mac Address: ").upper()
#     unblock_dev(udev_mac, get_sessionkey())
#    
# elif qs == 3:
#     reboot_router(get_sessionkey())
#         
# else:
#     print "Wrong Choice"

# Call main function
# main()
