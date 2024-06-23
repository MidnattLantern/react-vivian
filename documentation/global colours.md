the global.css lets you control the colour scheme from a single place.
Changing the appearance for the entire app can be done easily this way.

CSS:
'''
:root{
    --name: hex or rgb;
}
'''

import global for every single JS file that will make use of styles
for the Styles.module.css, use `var(--name)`