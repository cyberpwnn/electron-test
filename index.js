const { ipcRenderer } = require('electron')

function closeWindow()
{
    console.log("Closing Window");
    ipcRenderer.send('window-action', 'close');
}

function maximizeWindow()
{
    console.log("Maximizing Window");
    ipcRenderer.send('window-action', 'maximize');
}

function minimizeWindow()
{
    console.log("Minimizing Window");
    ipcRenderer.send('window-action', 'minimize');
}

console.log("MyGuide Renderer Init");