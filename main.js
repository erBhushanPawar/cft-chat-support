//imports and declarations
const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow} = electron;
const webUrl = 'https://prashantcftchatbot.000webhostapp.com/';
app.on('ready', function () {
    contactsWindow = new BrowserWindow({
        height: 640,
        width: 780
    });
    contactsWindow.loadURL(webUrl);
});
