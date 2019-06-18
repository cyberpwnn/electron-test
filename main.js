const { app, BrowserWindow, ipcMain } = require('electron')
require('electron-reload')(__dirname);

let win

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    backgroundColor: "#333942",
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('window-action', (event, arg) => {
  if(arg == "close")
  {
    win.close();
  }

  else if(arg == "maximize")
  {
    if(win.isMaximized())
    {
      win.unmaximize();
    }

    else
    {
      win.maximize();
    }
  }

  else if(arg == "minimize")
  {
    win.minimize();
  }
})