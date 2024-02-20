import React, { PureComponent } from 'react'
import enhancedUserInfo from '../hoc/enhanced_props'

export class About extends PureComponent {
  render() {
    return (
      <div>About: {this.props.name}-{this.props.age}</div>
    )
  }
}

export default enhancedUserInfo(About)
// export default About