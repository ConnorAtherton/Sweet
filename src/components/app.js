import React from 'react'
import Client from 'electron-rpc/client'

import Header from './header'
import CertificateList from './certificateList'
import Footer from './footer'

//
// Different connection statuses
//
const connected = 'connected'
const disconnected = 'disconnected'
const pending = 'pending'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.client = new Client()
    this.state = {
      version: '0.1.0',
      upgradeVersion: '0.1.0'
    }

    // tmp
    this.state.certificates = [
      { key: 1, name: 'Brazil, Rio', status: connected },
      { key: 2, name: 'London, England', status: disconnected },
      { key: 3, name: 'Brazil, Rio', status: disconnected },
      { key: 4, name: 'Brazil, Rio', status: disconnected },
    ]
  }

  render() {
    return (
      <section className='App'>
        <Header version={this.state.version} upgradeVersion={this.state.upgradeVersion} />
          <CertificateList certificates={this.state.certificates} />
        <Footer />
      </section>
    )
  }
}
