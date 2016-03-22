import React from 'react'
import './button.scss'

class Button extends React.Component {

  render() {

    const { href, children } = this.props

    if (href) {
      return (
          <a href={ href }
              className="btn btn-nu">{ children }</a>
      )
    }

    return <a className="btn btn-nu">{ children}</a>
  }
}

export default Button
