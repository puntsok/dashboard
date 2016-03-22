import React from 'react'
import './style.scss'

class MobileListItem extends React.Component {

  render() {

    const { title, image, description, onClick } = this.props

    return (
      <div className="rsp-mobile-list-item" onClick={onClick}>
        <div className="image-meta">
          <div className="image" style={{backgroundImage: `url(${image})`}}></div>
          <div className="meta">
            <div className="title">{title}</div>
          </div>
        </div>
        <div className="description">{description}</div>
      </div>
    )
  }
}

export default MobileListItem
