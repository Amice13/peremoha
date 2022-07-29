export const state = () => ({
  userphone: '',
  favourites: []
})

export const getters = {
  favourites: state => {
    return state.favourites
  }
}

export const mutations = {
  addToFavourites (state, payload) {
    state.favourites.push(payload)
  },
  removeFromFavourites (state, payload) {
    state.favourites.splice(state.favourites.indexOf(payload), 1)
  }
}

export const actions = {
  addToFavourites(context, payload) {
    context.commit('addToFavourites', payload)
  },
  removeFromFavourites (context, payload) {
    context.commit('removeFromFavourites', payload)
  }
}