import React, { PureComponent } from 'react'
import loginAuth from '../hoc/login_auth'

export class Card extends PureComponent {
  render() {
    return (
      <div>Card</div>
    )
  }
}

export default loginAuth(Card)