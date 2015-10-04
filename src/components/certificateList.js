import React from 'react'

import Certificate from './certificate'

export default class CertificateList extends React.Component {
  render() {
    let certificates = this.props.certificates.map(cert => {
      return (
        <Certificate name={cert.name} status={cert.status}/>
      )
    })

    return (
      <ul className="Certificate__list List">
        {certificates}
      </ul>
    )
  }
}
