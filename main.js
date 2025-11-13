/** Import necessary modules from Electron 
 *  app - controls application event lifecycle
 *  browserwindow - creates and manages app windows */ 
const { app, BrowserWindow, ipcMain } = require('electron/main');
const path = require('path');

// Reusable function to create a new browser window with browserwindow module
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'), // Preload script to be loaded before other scripts run in the window
        contextIsolation: true, // Isolates context between main and renderer processes for security
        nodeIntegration: false // Disables Node.js integration in renderer for security
    }
  })

  win.loadFile('index.html')

  win.setMenuBarVisibility(false); // Hides the menu bar
}

// When ready, create the browser window and set up IPC handlers
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit the app when all windows are closed, calls the app.quit() method to exit app if user is not on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})