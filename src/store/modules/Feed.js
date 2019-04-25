const namespaced = true

const state = {
  feed: []
}
const getters = {
  feed: (state) => (state.feed)
}
const mutations = {
  SET_LIST: (state, payload) => (state.feed = payload)
}

const actions = {
  getFeed: (context) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/api/feed')
        .then(response => {
          response.json().then(data => {
            resolve(data)
            context.commit('SET_LIST', data)
          })
        }).catch(err => reject(err))
    })
  }
}

export default { namespaced, state, mutations, getters, actions }
