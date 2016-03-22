import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import actions from '../../actions'

class MobileScrollPanel extends React.Component {

  componentDidUpdate() {

    const { indicatorEl, activeDiv } = this
    indicatorEl.style.left  = activeDiv.offsetLeft  + 'px'
    indicatorEl.style.width = activeDiv.offsetWidth + 'px'
  }
  render() {

    const { categories, activeCategory, selectCategory } = this.props

    return (
      <div className="rsp-mobile-scroll-panel hidden-sm-up">

        <div className="rsp-indicator" ref={el => this.indicatorEl = el}></div>

        { categories.map(category => {

          const isActive = (category.id === activeCategory)
          const onClick = () => selectCategory(category.id)
          const ref = el => {
            if (el === null) return this.activeDiv = null
            const spanCL = el.firstElementChild.classList
            if (spanCL.contains('data-active-true')) this.activeDiv = el
          }

          return <div key={category.id} ref={ref}>
            <span className={'data-active-' + isActive.toString()}
              onClick={onClick}>{category.name}</span>
          </div>
        }) }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    activeCategory: state.activeCategory,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: id => dispatch( actions.selectCategory(id) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileScrollPanel)
