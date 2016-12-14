import Application from 'app/index'

export default function createRouting() {

  return {
    path: '/',
    component: Application,
    indexRoute: require('./Home').default,
    getChildRoutes(location, cb) {
      const components = [
        require('./Base').default,
      ]

      cb(null, components)
    },
  }
}
