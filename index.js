const { app, BrowserWindow } = require('electron');
const electron = require('electron');
    let mainWindow;

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({ width: 800, height: 900, });
        mainWindow.loadURL(`file://${__dirname}/index.html`)
});