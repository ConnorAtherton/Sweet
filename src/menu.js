import Menubar from 'menubar'
import Server from 'electron-rpc/server'
// import Dialog from 'dialog'
import hw from 'headway'
// import Shell from 'shell'

const menu = Menubar({
  dir: __dirname,
  width: 300,
  height: 330,
  'title-bar-style': 'hidden'
})

const app = new Server()

process.on('uncaughtException', function(err) {
  // Dialog.showErrorBox('Uncaught Exception: ' + err.message, err.stack || '')
  hw.log(`{red}${err}`)
  menu.app.quit()
})

menu.on('ready', () => {
  menu.tray.setToolTip('SweetVPN')
  console.log('SweetVPN is ready')

  app.on('terminate', function terminate() {
    menu.app.terminate()
  })
})

menu.on('after-create-window', () => {
  // menu.window.openDevTools()
})
