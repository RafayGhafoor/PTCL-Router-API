import re, bs4
with open('menuBcm.js', 'r') as f:
    z = f.read()
    s = re.findall('\w+[.]html', z)
    with open('html_pages.txt', 'a') as x:
        for i in s:
            x.write('http://192.168.1.1/{}'.format(i.strip()) + '\n')
    
