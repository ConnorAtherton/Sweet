#!/usr/bin/env node

import os from 'os'
import packager from 'electron-packager'
import hw from 'headway'

//
// Just darwin for now
//

let opts = {
  dir: '.',
  name: 'SweetVPN',
  overwrite: true,
  // icon: ''.
  platform: os.platform(),
  arch: os.arch(),
  // all: true,
  out: 'build',
  version: '0.33.3',
  ignore: [
    'src',
    'script',
    'build',
    'release',
    'images/(Icon@1024.icns|screenshot.png)',
    'node_modules/(babel|standard|csscomb)',
    'node_modules/electron-(packager|prebuild|rebuild)'
  ]
}

packager(opts, function done(err, paths) {
  if (err) {
    hw.log(`{red}Error: ${err.message}`)
    throw err
  }

  hw.log(`{green}SweetVPN built at: {/}{_bold}\n- ${paths.join('\n- ')}`)
})
