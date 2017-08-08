from router import Router
import argparse
import sys
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
# ptcl = Router(mask='192.168.10.1', password='bec10')


def main():
    parser = argparse.ArgumentParser(description="Control PTCL router from command-line.")
    parser.add_argument('-b', '--block', help="Block device.", nargs='?')
    parser.add_argument('-sb', '--blocked_dev', help='Quite mode.', action='store_true')
    parser.add_argument('-u', '--unblock', help="Unblock device.", nargs='?')
    parser.add_argument('-a', '--active-devices', help="Gets active devices number.", action='store_true')
    parser.add_argument('-r', '--restart', help="Restart Router.", action='store_true')
    parser.add_argument('-sd', '--show-dhcp', help='Show DHCP Info.', action='store_true')
    parser.add_argument('-s', '--show-active', help='Show Active Devices.', default='.')
    parser.add_argument('-c', '--configure', help='Configure router settings.')
    parser.add_argument('-q', '--quiet', help='Quite mode.', nargs='?', default='True')
    args = parser.parse_args()
    # print args

    if args.quiet == 'True':
        if args.block:
            # print "Calling blocker Function"
            ptcl.get_sessionkey()
            if args.block in my_macs.iterkeys():
                # print "Calling blocker function - AUTOMATED MODE."
                ptcl.block_dev(my_macs[args.block.lower()])
                print "%s has been blocked." % args.block.capitalize()
                if args.block not in my_macs.iterkeys():
                    print "User not found."
            elif args.block not in my_macs.iterkeys():
                print "User not found."

        elif args.unblock:
            ptcl.get_sessionkey()
            if args.unblock in my_macs.iterkeys():
                # print "Calling unblocker function - AUTOMATED MODE"
                ptcl.unblock_dev(my_macs[args.unblock.lower()])
                print "%s has been unblocked." % args.unblock.capitalize()
            elif args.unblock not in my_macs.iterkeys():
                print "User not found."

        elif args.active_devices:
            # print "Calling Station info Function"
            ptcl.get_stationinfo()
            print "Currently active devices are:", len(ptcl.active_dev)

        elif args.restart:
            # print "Calling restart Function"
            ptcl.get_sessionkey()
            ptcl.reboot_router()

        elif args.show_dhcp:
            # print "Calling DHCP_info Function"
            # ptcl.get_sessionkey()
            ptcl.show_dhcpinfo()

        elif args.blocked_dev:
            ptcl.show_blocked_dev()

        elif args.show_active == '.':
            # print "Calling show_active Function"
            ptcl.show_active_dev()
        
        else:
            print "Invalid Argument"


    elif not args.quiet:
        if not args.block:
            # print "Calling blocker function - CLI MODE."
            name = ptcl.show_active_dev()
            dev_mac = int(raw_input("Please Enter Device Number: ")) - 1
            ptcl.block_dev(ptcl.mac_and_host[name[dev_mac]])
            print "%s has been blocked." % name[dev_mac].capitalize()


        elif not args.unblock:
            # print "Calling unblocker function - CLI MODE."
            name = ptcl.show_active_dev()
            dev_mac = int(raw_input("Please Enter Device Number: ")) - 1
            ptcl.unblock_dev(ptcl.mac_and_host[name[dev_mac]])
            print "%s has been unblocked." % name[dev_mac].capitalize()


import time
start_time = time.time()
main()
print("--- %s seconds ---" % (time.time() - start_time))
