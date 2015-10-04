import React from 'react'

export default class Certificate extends React.Component {
  render() {
    let classes = `List__item List__item--${this.props.status}`
    let buttonText = {
      'connected': 'Disconnect',
      'disconnected': 'Connect'
    }[this.props.status]

    return (
      <li className={classes}>
        {this.props.name}
        <button className='Button'>
          {buttonText}
        </button>
      </li>
    )
  }
}
