import Axios from 'axios'


export default class Github {
  constructor() {
    this.req = Axios.create({
      baseURL: 'https://api.github.com/',
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })
  }

  searchRepo(query) {
    return this.req.get(`/search/repositories?q=${query}`)
      .then(({ data }) => data)
  }

  getTopRepo() {
    return this.req.get('/repositories')
      .then(({ data }) => data)
      .then(list => list.slice(0, 10))
  }
}
