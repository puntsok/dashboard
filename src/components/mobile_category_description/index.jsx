
import React from 'react'
import './style.scss'

class MobileCategoryDescription extends React.Component {

  componentDidMount() {

  //   console.log(`MobileCategoryDescription did mount`)
  //
  //   const { el } = this
  //   const { body } = window.document
  //
  //   el.style.transition = '.05s all linear'
  //   this.scrollWatch = debounce(event => {
  //     el.style.transform = `translateY(${body.scrollTop / 2}px)`
  //   }, 10, true)
  //
  //   window.addEventListener('scroll', this.scrollWatch)
  }

  componentWillUnmount() {


    // window.removeEventListener('scroll', this.scrollWatch)
    // this.scrollWatch = null;
  }

  render() {
    return (
      <div className="rsp-mobile-category-description"
        ref={(el) => {this.el = el}}>
        {this.props.text}
      </div>
    )
  }
}

// function debounce(func, wait, immediate) {
// 	var timeout
// 	return function() {
// 		var context = this, args = arguments
// 		var later = function() {
// 			timeout = null
// 			if (!immediate) func.apply(context, args)
// 		}
// 		var callNow = immediate && !timeout
// 		clearTimeout(timeout)
// 		timeout = setTimeout(later, wait)
// 		if (callNow) func.apply(context, args)
// 	}
// }

export default MobileCategoryDescription
