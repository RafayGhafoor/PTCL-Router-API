import bs4, re, requests

f = open('dhcpinfo.html', 'r')
soup = bs4.BeautifulSoup(f, 'lxml')
class Router(object):
    '''
    A PTCL router class.
    '''
    mac_adr_regex = re.compile(r'^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$')


    def __init__(self, mask="192.168.1.1", username="admin", password="admin"):
        self.mask = "http://" + mask + '/'
        self.username = username
        self.password = password
        self.dev_info = {}
        self.active_dev = []    # Active Devices on Wi-Fi
        self.host_and_mac = []  # Mac Addresses and Hostnames
        self.session = requests.Session()
        self.session.auth = (self.username, self.password)
        self.sessionKey = ""


    def dhcpinfo(self):
        '''
        Gets information from dhcp i.e., Mac Adresses and Hostnames.
        '''

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
f.close()

if __name__ == '__main__':
    ptcl = Router()
    s = ptcl.dhcpinfo()
    print (s['mint'])
