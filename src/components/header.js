import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <span className="status__message">Connected</span>
        <span className="status status--connected"></span>
        <span className='status__IP'>192.234.213.423</span>
      </header>
    )
  }
}
