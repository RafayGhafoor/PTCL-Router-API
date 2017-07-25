from router import Router
import argparse
my_macs = {
        "mytab": "5c:2e:59:4d:33:67",
        "ahmer": "68:94:23:AC:59:51",
        "asad": "A0:32:99:AB:33:31",
        "hhp": "44-1C-A8-73-A3-17",
        "j7": "",
        "xperia": "",
        "haris": "",
        "i3": "",
        "n4050": ""
        }

ptcl = Router()


def main():
    parser = argparse.ArgumentParser(description="Control PTCL router from command-line.")
    parser.add_argument('-b', '--block', help="Block device.", default='.')
    parser.add_argument('-u', '--unblock', help="Unblock device.", nargs='?')
    parser.add_argument('-a', '--active-devices', help="Gets active devices number.", action='store_true')
    parser.add_argument('-r', '--restart', help="Restart Router.", action='store_true')
    parser.add_argument('-sd', '--show-dhcp', help='Show DHCP Info.', action='store_true')
    parser.add_argument('-s', '--show-active', help='Show Active Devices.', default='.')
    args = parser.parse_args()
    print args
    if args.block:
        print "Calling blocker Function"
        ptcl.get_sessionkey()
        if args.block in my_macs.iterkeys():
            print "Calling blocker Function"
            ptcl.block_dev(my_macs[args.block.lower()])
            print "%s has been blocked." % args.block.capitalize()

        elif not args.block:
            print "Calling blocker Function"
            name = ptcl.show_active_dev()
            dev_mac = int(raw_input("Please Enter Device Number: ")) - 1
            ptcl.block_dev(ptcl.mac_and_host[name[dev_mac]])
            print "%s has been blocked." % name[dev_mac].capitalize()

    elif args.unblock:
        print "Calling Unblocker Function"
        ptcl.get_sessionkey()
        if args.unblock in my_macs.iterkeys():
            ptcl.unblock_dev(my_macs[args.unblock.lower()])
            print "%s has been unblocked." % args.unblock.capitalize()

        elif not args.unblock:
            print "Calling unblocker Function"
            name = ptcl.show_active_dev()
            dev_mac = int(raw_input("Please Enter Device Number: ")) - 1
            ptcl.unblock_dev(ptcl.mac_and_host[name[dev_mac]])
            print "%s has been unblocked." % name[dev_mac].capitalize()

    elif args.active_devices:
        print "Calling Station info Function"
        ptcl.get_stationinfo()
        print "Currently active devices are:", len(ptcl.active_dev)

    elif args.restart:
        print "Calling restart Function"
        ptcl.get_sessionkey()
        ptcl.reboot_router()

    elif args.show_dhcp:
        print "Calling DHCP_info Function"
        ptcl.get_sessionkey()
        ptcl.show_dhcpinfo()

    elif args.show_active == '.':
        print "Calling show_active Function"
        ptcl.show_active_dev()

    else:
        print "Invalid Argument"

import time
start_time = time.time()
main()
print("--- %s seconds ---" % (time.time() - start_time))
