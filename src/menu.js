import Menubar from 'menubar'
// import Shell from 'shell'

const menu = Menubar()

menu.on('ready', () => {
  menu.tray.setToolTip('SweetVPN')
})
