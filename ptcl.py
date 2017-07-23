from router import Router
import argparse

ptcl = Router()

def main():
    parser = argparse.ArgumentParser(description="Control PTCL router from command-line.")
    parser.add_argument('-b', '--block', help="Block device.")
    parser.add_argument('-a', '--active-devices', help="Gets active devices number.", action='store_true')
    parser.add_argument('-u', '--unblock', help="Unblock device.")
    parser.add_argument('-r', '--restart', help="Restart Router.", action='store_true')
    parser.add_argument('-sd', '--show-dhcp', help='Show DHCP Info.', action='store_true')
    parser.add_argument('-s', '--show-active', help='Show Active Devices.', default='.')
    args = parser.parse_args()

    if args.block:
        name = ptcl.show_active_dev()
        dev_mac = int(raw_input("Please Enter Device Number: ")) - 1
        ptcl.block_dev(ptcl.mac_and_host[name[dev_mac]])

    elif args.active_devices:
        ptcl.get_stationinfo()
        print "Currently active devices are:", len(ptcl.active_dev)

    elif args.unblock:
        name = ptcl.show_active_dev()
        udev_mac = raw_input("Please Enter Device Number: ").upper()
        ptcl.unblock_dev(ptcl.mac_and_host[name[udev_mac]])

    elif args.restart:
        ptcl.get_sessionkey()
        ptcl.reboot_router()

    elif args.show_dhcp:
        ptcl.get_sessionkey()
        ptcl.show_dhcpinfo()

    elif args.show_active == '.':
        ptcl.get_sessionkey()
        ptcl.show_active_dev()

    else:
        print "Invalid Argument"

import time
start_time = time.time()
main()
print("--- %s seconds ---" % (time.time() - start_time))
