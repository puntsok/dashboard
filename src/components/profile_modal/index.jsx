import React from 'react'
import { connect } from 'react-redux'

class ProfileModal extends React.Component {

  clickLogout() {

    window.location = 'https://websso.it.northwestern.edu/' +
      'amserver/identity/logout'
  }
  renderProfileImage() {

    const { user } = this.props

    const style = {
      backgroundImage: `url(${user.avatarUrl})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      borderRadius: '50%',
      textAlign: 'center',
      margin: '10px auto',
    }
    const lgStyle = {...style, height: '200px', width: '200px'}
    const smStyle = {...style, height: '100px', width: '100px'}

    return (
      <div>
        <div className="hidden-xs-down" style={lgStyle}></div>
        <div className="hidden-sm-up" style={smStyle}></div>
      </div>
    )
  }
  render() {

    const { clickLogout } = this
    // const { user } = this.props

    return (

      <div id="rsp-profile-modal" className="modal" tabIndex="-1"
          role="dialog" aria-labelledby="rsp-profile-modal-label" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <button type="button" className="close"
                data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h3 className="modal-title"
                id="rsp-profile-modal-label">Roger Becks Profile</h3>
            </div>

            <div className="modal-body">
              <div className="container-fluid">
                { this.renderProfileImage() }
                <dl className="dl-horizontal">
                  <dt className="col-sm-2">Email:</dt>
                  <dd className="col-sm-10">roger.becks@northwestern.edu</dd>
                  <dt className="col-sm-2">Roles:</dt>
                  <dd className="col-sm-10">Administrator</dd>
                </dl>
              </div>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-danger"
                  onClick={clickLogout}>Log Out</button>
                <button type="button" className="btn btn-nu"
                  data-dismiss="modal">Dismiss</button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
  }
}


ProfileModal = connect(mapStateToProps)(ProfileModal)

export default ProfileModal
