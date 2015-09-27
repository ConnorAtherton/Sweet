import React from 'react'
import Client from 'electron-rpc/client'
import Header from './header'
import CertificateList from './certificateList'
import Footer from './footer'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.client = new Client()
    this.state = {
      certs: [],
      version: '',
      upgradeVersion: ''
    }
  }

  render() {
    return (
      <section className='App'>
        <Header version={this.state.version} upgradeVersion={this.state.upgradeVersion} />
        <CertificateList certificated={this.state.certificates} />
        <Footer />
      </section>
    )
  }
}
