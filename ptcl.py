from router import Router
import argparse

ptcl = Router()

def main():
    parser = argparse.ArgumentParser(description="Control PTCL router from command-line.")
    parser.add_argument('-b', '--block', help="Block device.")
    parser.add_argument('-u', '--unblock', help="Unblock device.")
    parser.add_argument('-r', '--restart', help="Restart Router.")
    parser.add_argument('-sd', '--show-dhcp', help='Show DHCP Info.')
    parser.add_argument('-s', '--show-active', help='Show Active Devices.', default='.')
    args = parser.parse_args()

    if args.block:
        name = ptcl.show_active_dev()
        dev_mac = int(raw_input("Please Enter Device Number: ")) - 1
        ptcl.block_dev(ptcl.mac_and_host[name[dev_mac]], ptcl.get_sessionkey())

    elif args.unblock:
        ptcl.show_active_dev()
        udev_mac = raw_input("Please Enter Device Number: ").upper()
        ptcl.unblock_dev(ptcl.mac_and_host[name[udev_mac]], ptcl.get_sessionkey())

    elif args.restart:
        ptcl.reboot_router(ptcl.get_sessionkey())

    elif args.show_dhcp:
        ptcl.show_dhcpinfo()

    elif args.show_active:
        ptcl.show_active_dev()

    else:
        print "Invalid Argument"


main()
