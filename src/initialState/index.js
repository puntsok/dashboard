
const { DASHBOARD_API_URL} = process.env

export default {

  dashboardApiUrl: DASHBOARD_API_URL,
  user: {
    firstName: 'Roger',
    lastName: 'Becks',
    email: 'roger.becks@northwestern.edu',
    netid: 'rxb205',
    avatarUrl: 'http://www.northwestern.edu/living/about-us/staff/assets/roger.jpg',
  },
  activeCategory: null,
  categories: [/*{
    id: 1,
    name: 'Opening/Closing',
    slug: 'opening-closing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna metus, aliquet sit amet nisl.',
    sort: 1,
  }*/],
  apps: [/*{
    id: 2,
    category_id: 6,
    name: 'Early Arrival',
    slug: 'early-arrival',
    image_url: `early-arrival`,
    app_url: `early-arrival`,
    description: `Nihil aut laborum doloribus fugiat consequatur dicta.`,
    sort: 5,
  }*/]
}
