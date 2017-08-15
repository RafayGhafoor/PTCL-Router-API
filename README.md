# PTCL-Router:

<<<<<<< HEAD
A PTCL-Router API.
=======
A CLI-script which allows to obtain information and configure PTCL router settings from commandline. 
>>>>>>> origin/master

# Current-Features:

- Obtain station information, showing their hostnames alongside for better readability (devices currently connected to the router).
- Obtain DHCP information.
- Block and unblock devices using their mac addresses.
<<<<<<< HEAD
- Block and unblock devices using their predefined aliases. 
- Reboot router.
- Over-ride hostnames associated to the mac address with custom hostnames.
- Display blocked devices.
- Added two modes for blocking users ( CLI-MODE and SILENT-MODE (Default) ).
=======
- Block and unblock devices using their aliases/nicknames predefined. 
For example:
```python
>>> python ptcl.py -b John
```
will block the user John off the network.
>>>>>>> origin/master

# Usage:

**Shows devices connected to the router.**

```python
>>> python ptcl.py
``` 

**Shows currently active devices and provides an option to block device from the display.**

```python 
>>> python ptcl.py -b
``` 

**Shows DHCP info for all devices connected in a day.**

```python
>>> python ptcl.py -sd
```

<<<<<<< HEAD
**Reboots the router.**

```python
>>> python ptcl.py -r
```

# TODO:

- [ ] Writing documentation for API usage.
- [ ] Organizing TODO in sections.
- [ ] Port-Forwarding from command line.
- [ ] Parsing router logs.
- [ ] Obtaining Pin-Code of the router and changing it.
- [ ] Displaying current password of the SSID.
- [ ] Changin router username and password from the command-line.
- [ ] Changing SSID-Name.
- [ ] Adding a method to change router password.
- [ ] Option to change frequency 2.4 Ghz or 5 Ghz. 
- [ ] Option to change router transmission power.
- [ ] Improving display for blocked devices.
- [ ] Exclude android devices from station info and dhcp info.
=======
# TODO:

- Writing better documentation.
- Optimize Regular Expressions.
- Adding a method to change router password.
- Option to change frequency 2.4 Ghz or 5 Ghz. 
- Option to change router transmission power.
- Formatting output.
- Testing on other routers from the same vendor.

# Features implementation to be done:

- [ ] Exclude android devices from station info and dhcp info.
- [X] Reboot router from script.
>>>>>>> origin/master
- [ ] Time restriction for user (by specifying or choosing from station info) device mac address or hostname.
- [ ] Adding URL to block unnecessary use for a website, also time limit for a site usage.
- [ ] Monitor devices connection info i.e., when they connect to the router and disconnect. Also devices uptime of the day.
- [ ] Block devices who remain connected to the router for x time (6 hours). Unblock them after 6 hours.
- [ ] Searching suspected users in the station info (Currently Active Devices) when speed is slow.
- [ ] Getting device connection info in a nice CSV file.
- [ ] Uploading CSV on a cloud everyday.
<<<<<<< HEAD
- [ ] Add CLI MODE for unblocking devices
- [X] Setting up custom hostname for specific device (mac address).
- [X] Optimize Regular Expressions.
- [X] CLI MODE and SILENT MODE for blocking devices.
- [X] Testing on other routers from the same vendor.
- [X] Reboot router from script.
- [X] Display number of active devices.
=======
>>>>>>> origin/master




