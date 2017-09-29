from router import Router
import argparse
import sys
import configobj
import configure
import os
from tabulate import tabulate


def show_dhcpinfo():
    '''
    Shows DHCP information.
    '''
    ptcl.dhcpinfo()
    print tabulate({"HOSTNAME": ptcl.dev_hostname, "MAC-ADDRESSES": ptcl.mac_address}, headers=['HOSTNAME', 'MAC-ADDRESSES'], tablefmt='fancy_grid')
    print "\n\n\t\tTotal Devices Connected Today are: [%s].\n\n" % len(ptcl.dev_hostname)


def show_active_dev():
      '''
      Shows active devices (Mac Addresses) and their hostnames.
      '''
      ptcl.stationinfo()
      ptcl.dhcpinfo()
      ptcl.host_and_mac = tuple(zip(ptcl.dev_hostname, ptcl.mac_address))
      hostnames = []
      display_list = []
      aliases = configure.get_alias()
      count = 1
      print "\nShowing Currently Active Devices.\n"
      for hostname, mac in ptcl.host_and_mac:
          for active_clients in ptcl.active_dev:
              if active_clients in mac:
                  if mac in aliases.itervalues():
                      display_list.append([count, aliases.keys()[aliases.values().index(mac)], active_clients])
                  else:
                      display_list.append([count, hostname, active_clients])
                  hostnames.append(hostname)
                  count += 1
      print tabulate(display_list, headers=["DEVICE-NO.", "HOSTNAME", "MAC"], tablefmt="fancy_grid")
      return hostnames


def show_blocked_dev():
    '''
    Display blocked devices.
    '''
    r, soup = ptcl.scrape_page(ptcl.mask + "wlmacflt.cmd?action=view")
    print "Showing blocked devices.\n"
    for i in soup.findAll('td'):
        if not i.find("input"):
            if Router.mac_adr_regex.search(i.text):
                print tabulate([[i.text]], headers=["BLOCKED-DEV"], tablefmt="fancy_grid")


def main():
    parser = argparse.ArgumentParser(description="Control PTCL router from command-line.")
    parser.add_argument('-b', '--block', help="Block device.", nargs='?')
    parser.add_argument('-sb', '--blocked_dev', help='Display blocked devices.', action='store_true')
    parser.add_argument('-ub', '--unblock', help="Unblock device.", nargs='?')
    parser.add_argument('-a', '--active-devices', help="Gets number of devices connected to the router.", action='store_true')
    parser.add_argument('-r', '--restart', help="Restart Router.", action='store_true')
    parser.add_argument('-sd', '--show-dhcp', help='Show DHCP Info.', action='store_true')
    parser.add_argument('-s', '--show-active', help='Show Active Devices.', default='.')
    parser.add_argument('--configure', help='Configure router settings.', action='store_true')
    parser.add_argument('-sa', '--set-alias', help='Set custom alias for a device hostname.', action='store_true')
    parser.add_argument('-c', '--cli', help='Silent mode.', nargs='?', default='False')
    args = parser.parse_args()

    if configure.config_check() == True:
        if configure.config:
            global ptcl
            ptcl = Router(mask=configure.config["Router-Auth"]["mask"], password=configure.config["Router-Auth"]["password"])

    else:
        configure.config_check()
        sys.exit("Please Re-run.")

    my_macs = configure.get_alias()

    if args.block:
        if args.block == '1':
            name = show_active_dev()
            ptcl.host_and_mac = dict(ptcl.host_and_mac)
            dev_mac = int(raw_input("Please Enter Device Number: ")) - 1
            ptcl.block_dev(ptcl.host_and_mac[name[dev_mac]])
            print "%s has been blocked." % name[dev_mac].capitalize()

        elif args.block != '1' and args.block in my_macs.iterkeys():
            # print "Calling blocker function - AUTOMATED MODE."
            ptcl.block_dev(my_macs[args.block.lower()])
            print "%s has been blocked." % args.block.capitalize()
            if args.block not in my_macs.iterkeys():
                print "User not found."

        elif args.block != '1' and args.block not in my_macs.iterkeys():
            print "User not found."

    elif args.unblock:
        if args.unblock == '1':
            show_blocked_dev()
            dev_mac = raw_input("Please enter device mac address: ")
            ptcl.unblock_dev(dev_mac)
            print "%s has been unblocked." % dev_mac

        elif args.unblock != 1 and args.unblock in my_macs.iterkeys():
            # print "Calling unblocker function - AUTOMATED MODE"
            ptcl.unblock_dev(my_macs[args.unblock.lower()])
            print "%s has been unblocked." % args.unblock.capitalize()

        elif args.unblock != 1 and args.unblock not in my_macs.iterkeys():
            print "User not found."

    elif args.active_devices:
        # print "Calling Station info Function"
        ptcl.stationinfo()
        print "Currently active devices are:", len(ptcl.active_dev)

    elif args.restart:
        # print "Calling restart Function"
        ptcl.reboot()

    elif args.show_dhcp:
        # print "Calling DHCP_info Function"
        show_dhcpinfo()

    elif args.blocked_dev:
        show_blocked_dev()

    elif args.set_alias:
        show_active_dev()
        configure.set_alias()

    elif args.show_active == '.':
        # print "Calling show_active Function"
        show_active_dev()

    else:
        print "Invalid Argument"

main()
