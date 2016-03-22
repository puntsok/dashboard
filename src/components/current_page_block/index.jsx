import React from 'react'

export default function(props) {

  const { page } = props

  return (
    <div className="rsp-mobile-page-title hidden-sm-up" style={{
      backgroundColor: '#341954',
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Akkurat Pro Regular',
      fontSize: '0.9rem',
      padding: '3px 0',
      display: 'none',
    }}>
    { page }
    </div>
  )
}
