# PTCL-Router:

A CLI-script which allows to obtain information and configure PTCL router settings from commandline. 

# Current-Features:

- Obtain station information, showing their hostnames alongside for better readability (devices currently connected to the router).
- Obtain DHCP information.
- Block and unblock devices using their mac addresses.

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

# TODO:

- Writing better documentation.
- Optimize Regular Expressions.
- Adding a method to change router password.
- Option to change frequency 2.4 Ghz or 5 Ghz. 
- Option to change router transmission power.
- Formatting output.

# Features implementation to be done:

- [ ] Exclude android devices from station info and dhcp info.
- [X] Reboot router from script.
- [ ] Time restriction for user (by specifying or choosing from station info) device mac address or hostname.
- [ ] Adding URL to block unnecessary use for a website, also time limit for a site usage.
- [ ] Monitor devices connection info i.e., when they connect to the router and disconnect. Also devices uptime of the day.
- [ ] Block devices who remain connected to the router for x time (6 hours). Unblock them after 6 hours.
- [ ] Searching suspected users in the station info (Currently Active Devices) when speed is slow.
- [ ] Getting device connection info in a nice CSV file.
- [ ] Uploading CSV on a cloud everyday.




