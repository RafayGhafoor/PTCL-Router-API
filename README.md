# PTCL-Router-API:

A PTCL-Router API to interact with default router interface.

# Status:

The API is currently under heavy development.

# Usage:

```python

>>> from router import Router
>>> papi = Router(gateway='192.168.10.1', password='ptcl')

# Output the list of active devices
>>> papi.stationinfo()  
>>> ['c8:94:bb:75:f6:23', '04:8d:38:f5:44:ef']

# Number of active devices
>>> len(papi.stationinfo() 
>>> 2

# Output DHCP info (dictionary with key-> hostname and values-> mac address, local IP, expire time)

>>> papi.dhcpinfo()  
>>> {'android-950c5330c76d8678': ['00:08:22:ca:e6:21', '192.168.1.9', '23 hours, 25 minutes, 39 seconds'] }

# Block a device
>>> papi.block('00:08:22:ca:e6:21')
>>> 'Succesful'

# Set time limit for a device
>>> papi.time_limit(username='Fred', mac='00:08:22:ca:e6:21', days='Mon-Thu', start='12', end='14:26')
>>> 'Successful'

# will create a profile named 'Fred' and set a time limit from 12:00-14:26, Monday to Thursday.

# Block a website
>>> papi.web_filter(url='facebook.com')
>>> 'Successful'

```

# TODO:

- [ ] Writing documentation for the API usage.
- [ ] Writing unit tests for utilities module.