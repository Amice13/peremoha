import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'peremoha',
    storage: localStorage
  }).plugin(store)
}
