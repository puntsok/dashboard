import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
import './style.scss'
import $ from 'jquery'

class Navbar extends Component {

  clickAvatar() {

    const $profileModal = $('#rsp-profile-modal')

    $profileModal.modal('show')
    $profileModal.css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    })
  }
  render() {

    const { props, clickAvatar } = this
    const { fixed, hidden, brand, avatarUrl } = props
    const fixedClassString = fixed ? 'navbar-fixed-top' : ''
    const hiddenClassString = hidden ? 'rsp-hidden' : ''
    const navbarClassName = `${ fixedClassString } ${ hiddenClassString } ` +
      'rsp-navbar navbar ' +
      'navbar-full navbar-dark bg-inverse'

    return (
        <nav className={navbarClassName}>
          <div className="container">
            <button className="navbar-toggler hidden-sm-up bg-inverse rsp-menu-button"
              type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
                <i className="fa fa-bars"></i>
            </button>
            <span className="rsp-navbar-title hidden-sm-up">
              <IndexLink to="/">{ brand }</IndexLink>
            </span>

            <button className="navbar-toggler pull-right hidden-sm-up bg-inverse rsp-profile-button"
              onClick={clickAvatar}
              type="button"><i className="fa fa-user"></i></button>

            <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
              <IndexLink to="/" className="navbar-brand hidden-xs-down">{ brand }</IndexLink>
              <ul className="nav navbar-nav">
                <li className="nav-item active">
                  <Link to="/apps" className="nav-link">Apps <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Admin</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Help</a>
                </li>
              </ul>
              <span className="rsp-avatar pull-right hidden-xs-down" onClick={clickAvatar}
                  style={{backgroundImage: `url(${avatarUrl})`}}></span>
            </div>
          </div>
        </nav>
    )
  }

}
const mapStateToProps = state => {
  return {
    avatarUrl: state.user.avatarUrl,
  }
}

Navbar = connect(mapStateToProps)(Navbar)

export default Navbar
