
const { DASHBOARD_API_URL } = process.env

export default function () {

  return fetch(DASHBOARD_API_URL)
    .then( response => response.json() )
    .then( value => value.data )
    .then( rawData => {

      const apps = rawData.apps.map(app => {
        return {
          appUrl: app.app_url,
          categoryId: app.category_id,
          description: app.description,
          id: app.id,
          imageUrl: app.image_url,
          name: app.name,
          slug: app.slug,
          sort: app.sort,
        }
      })

      const categories = rawData.categories
      rawData = {apps, categories}
      console.log(rawData)
      return rawData
    })
}
