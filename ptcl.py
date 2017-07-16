from router import Router
import argparse

ptcl = Router()

def main():
    parser = argparse.ArgumentParser(description="Control PTCL router from command-line.")
    parser.add_argument('-b', '--block', help="Block device")
    parser.add_argument('-u', '--unblock', help="Unblock device")
    parser.add_argument('-r', '--restart', help="Restart Router.")
    parser.add_argument('-s', '--show', help='Show Active Devices.')
    args = parser.parse_args()
    
    if args.block:
        ptcl.show_active_dev()
        dev_mac = raw_input("Please Enter Device Mac Address: ").upper()
        ptcl.block_dev(dev_mac, get_sessionkey())
        
    elif args.unblock:
        ptcl.show_active_dev()
        udev_mac = raw_input("Please Enter Device Mac Address: ").upper()
        ptcl.unblock_dev(udev_mac, get_sessionkey())
        
    elif args.restart:
        ptcl.reboot_router(get_sessionkey())

    elif args.show:
        print "Showing Active Devices"
        ptcl.get_dhcpinfo()
        
    else:
        print "Invalid Argument"
    


main()
