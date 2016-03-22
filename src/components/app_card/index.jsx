import React from 'react'
import './style.scss'
import Button from '../button'

class AppCard extends React.Component {

  render() {

    const { label, image, appUrl, description } = this.props

    return (
        <div className="rsp-app-card card text-xs-left">
          <img className="card-img-top"
            src={ image }
            alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">{ label }</h4>
            <p className="card-text">{ description }</p>
            <Button href={ appUrl }>Go</Button>
          </div>
        </div>
    )
  }
}

export default AppCard
