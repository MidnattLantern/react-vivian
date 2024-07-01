This documentation assume the api is already in place.

Initial instructions are as following:
    Add to the list of "scripts" in package.json
    `"Heroku-prebuild": "npm install -g serve",`

    Create Procfile with the content:
    `web: serve -s build`
Skipping these steps made the app work for unknown reason.