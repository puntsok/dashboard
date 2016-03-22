import React from 'react'
import './style.scss'
import AppCard from '../app_card'
import { connect } from 'react-redux'
import MobileListItem from '../mobile_list_item'
import MobileCategoryDescription from '../mobile_category_description'

class AppsPage extends React.Component {

  renderDesktop() {

    const { apps } = this.props

    return (
      <div className="desktop hidden-xs-down">
        <div style={{textAlign: 'center', backgroundColor: 'white'}}>
            {apps.map(app => {
              return <AppCard key={ app.id }
                  label={ app.name } image={ app.imageUrl }
                  appUrl={ app.appUrl } description={ app.description } />
            })}
        </div>
      </div>
    )

  }
  renderMobile() {

    const { apps, activeCategory, categories } = this.props
    const category =
      categories.filter(category => category.id === activeCategory)[0]
    const appsInCategory = apps.filter(app => app.categoryId === category.id)
    const onClick = href => () =>  window.location = href
    // const onClick = () => alert('hi')

    if ( ! category) return null

    return (
      <div className="mobile hidden-sm-up">
        <div className="buffer"
          style={{ height: '108px', backgroundColor: 'inherit' }}></div>

        <MobileCategoryDescription text={category.description} />

        { appsInCategory.map(app => {
          return <MobileListItem title={app.name} image={app.imageUrl}
            description={app.description} key={app.id}
            onClick={onClick(app.appUrl)}/>
        }) }

      </div>
    )
  }
  render() {

    return (
      <div data-component="AppsPage">
        { this.renderMobile()  }
        { this.renderDesktop() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    apps: state.apps,
    activeCategory: state.activeCategory,
    categories: state.categories,
  }
}

AppsPage = connect(mapStateToProps)(AppsPage)

export default AppsPage
