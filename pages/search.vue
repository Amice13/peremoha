<template>
  <v-row justify="center" align="center">
    <!-- Main info -->
    <div cols="12" class="ma-0 mt-8" style="width: 100%">
      <div class="tt fw-400 text--primary fs-175 uppercase mb-4 text-center w-100">Пошук лотів</div>
        <v-col cols="12" sm="12" class="py-2 text-center">
          <v-btn-toggle v-model="filters" shaped multiple>
            <v-btn v-for="(item, key) in filtersList" :key="item.id" :color="filters.includes(key) ? 'yellow' : 'primary'">
              <v-icon
                :color="filters.includes(key) ? 'black' : 'white'"
                :left="$vuetify.breakpoint.mdAndUp">
                {{ item.icon }}
              </v-icon>
              <span v-show="$vuetify.breakpoint.mdAndUp"> {{ item.name }}</span>
            </v-btn>
          </v-btn-toggle>
        </v-col>
        <div class="pr-4 pl-4 w-100">
          <v-img src="/peremoha/hr2-blue.svg" width="420px" class="margin-auto" style="min-width: 50%;"></v-img>
        </div>
        <!-- Short description -->
        <v-card width="100%" class="elevation-0 text-center">
          <v-card-text>
            <v-text-field
              v-model="search"
              prepend-icon="mdi-magnify"
              style="max-width: 520px;"
              class="margin-auto"
              label="Пошук"
              clearable
            ></v-text-field>
            
          </v-card-text>
        </v-card>

    <v-card width="100%" class="elevation-0">
      <v-card-text>
        <v-fade-transition class="row mt-8 margin-auto" group tag="v-row" style="max-width: 960px;">
          <v-col v-for="(item, key) in limitedItems" :key="'item-' + key" cols="12" md="4">
            <v-card class="mx-auto d-flex flex-column lot" style="height: 100%;">
              <div>
                <v-img height="220" :src="'/peremoha/thumbs/' + item.image[0]" class="text-right">
                  <v-chip small color="yellow" class="mt-2 mr-2">{{ item.tags[0] }}</v-chip>
                </v-img>
                <v-card-title class="tt text--primary"><span v-html="highlightText(item.name)"></span></v-card-title>
                <v-card-text>
                  <div class="d-flex justify-space-between align-center">
                    <div class="flex-grow fs-150 fw-800 red--text text--darken-2">
                      ${{ item.price ? item.price : '1' }}
                    </div>
                    <div>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="changeFavourite(item.id)" color="primary" icon text v-bind="attrs" v-on="on">
                          <v-icon v-show="!favourites.includes(item.id)" color="primary">mdi-heart-outline</v-icon>
                          <v-icon v-show="favourites.includes(item.id)" color="primary">mdi-heart</v-icon>
                        </v-btn>
                      </template>
                      <span>Додати в список бажань</span>
                    </v-tooltip>
                    </div>
                  </div>
                </v-card-text>
              </div>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn router :to="'/lot/' + item.id" color="yellow" depressed block>
                    Переглянути
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-col>
        </v-fade-transition>
        <v-row class="mt-2 mb-8" v-show="show <= filteredItems.length">
          <v-col cols="12" class="text-center">
          <v-btn class="margin-auto mb-2" color="primary" @click="increaseLimit">Показати більше<v-icon right>mdi-refresh</v-icon></v-btn>
          <div>Ще {{ filteredItems.length - show }} {{ makeCase(filteredItems.length - show) }}</div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    </div>
  </v-row>
</template>

<script>
const { items } = require('~/content') 

const intersection = (array1, array2) => {
  return array1.filter((n) => array2.indexOf(n) !== -1)
}
export default {
  transition: 'fade',
  async mounted () {
    let { query } = this.$route
    if (query && query.q) this.filters.push(this.filtersList.map(el => el.name).indexOf(query.q))
    items.sort((a, b) => {
      return a.bookletId !== b.bookletId
      if (a.bookletId !== b.bookletId) return a.bookletId - b.bookletId
      if (!a.bookletId || b.bookletId) return 1
      return a.name.localeCompare(b.name)
    })
    this.$set(this, 'items', items)
  },
  data () {
    return {
      search: '',
      items: [],
      filtersList: [
        { name: 'Трофеї', id: 'trophys', icon: 'mdi-pistol' },
        { name: 'Книги', id: 'books', icon: 'mdi-book-open-variant' },
        { name: 'Живопис', id: 'painting', icon: 'mdi-palette' },
        { name: 'Кераміка', id: 'oldstuff', icon: 'mdi-trophy-variant' },
      ],
      show: 9,
      filters: []
    }
  },
  computed: {
    favourites: function () {
      return this.$store.state.favourites
    },
    filteredItems: function () {
      let items = JSON.parse(JSON.stringify(this.items))
      if (this.filters.length) {
        let f = this.filters.map(el => this.filtersList[el].name)
        items = items.filter(el => intersection(el.tags, f).length)
      }
      if (this.search) {
        let re = new RegExp(this.search.replace(/[.?!\[\]()*$^-]/g, ''), 'gi')
        items = items.filter(el =>re.test(el.name))
      }
      return items.sort((a, b) => {
        a.bookletId = a.bookletId ? a.bookletId : 1000
        b.bookletId = b.bookletId ? b.bookletId : 1000
        if (a.bookletId !== b.bookletId) return a.bookletId - b.bookletId
        if (!a.bookletId || b.bookletId) return 1
        return a.name.localeCompare(b.name)
      })
    },
    limitedItems: function () {
      return this.filteredItems.slice(0, this.show)
    }
  },
  methods: {
    changeFavourite (id) {
      let action = this.favourites.includes(id) ? 'removeFromFavourites' : 'addToFavourites' 
      this.$store.commit(action, id)
    },
    highlightText (s) {
      if (!this.search) return s
      let re = new RegExp(this.search.replace(/[.?!\[\]()*$^-]/g, ''), 'gi')
      return s.replace(re, s => `<strong>${s}</strong>`)
    },
    increaseLimit () {
      this.show = this.show + 9
    },
    makeCase (val) {
      return makeCase(val)
    }
  },
  watch: {
    filters: function (val) {
      this.show = 9
    },
    search: function (val) {
      this.show = 9
    }
  },
  name: 'searchPage'
}


const cases =  {
  '1': 'лот',
  '2': 'лоти',
  '3': 'лоти',
  '4': 'лоти',
  'other': 'лотів'
}

const makeCase = (interval) => {
  let text = "" + interval
  if (text.length === 1) return cases[interval] ? cases[interval] : cases['other']
  text = text.slice(text.length - 2, text.length)
  if (parseInt(text) < 20) return cases['other']
  text = text.slice(text.length - 1)
  return cases[text] ? cases[text] : cases['other']
}

</script>
<style>
.theme--light.v-btn--active:hover::before, .theme--light.v-btn--active::before {
  opacity: 0.05;
}
.margin-auto {
  margin:  auto;
}
.lot .v-card__title.tt {
  word-break: normal;
}
.list-enter, .list-leave-to {
  opacity: 0;
}
.list-enter-active, .list-leave-active {
  transition: opacity 0.5s ease;
}
</style>