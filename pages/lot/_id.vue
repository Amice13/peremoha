<template>
  <v-row justify="center">
    <v-col cols="12" md="3">

      <v-carousel v-model="model" height="300">
        <v-carousel-item v-for="(img, key) in image" :key="key">
          <v-sheet height="100%" tile>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-img :src="'/images/' + img" height="300"></v-img>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" md="6">
      <v-card width="100%" class="mx-auto d-flex flex-column elevation-0">
        <v-card-text>
          <div class="d-flex justify-space-between align-center">
            <div class="flex-grow fs-150 fw-800 red--text text--darken-2">
              {{ price ? price : '100' }} {{ currency ? currency : 'грн' }}
            </div>
            <div>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" icon text v-bind="attrs" v-on="on">
                  <v-icon color="primary">mdi-heart-outline</v-icon>
                </v-btn>
              </template>
              <span>Додати в список бажань</span>
            </v-tooltip>
            </div>
          </div>
        </v-card-text>
        <v-card-title class="tt text--primary">{{ name }}</v-card-title>
        <v-spacer></v-spacer>
        <v-card-text>
          <vue-markdown :key="render" :breaks="false" :source="text"></vue-markdown>
        </v-card-text>
        <v-card-actions>
          <v-btn router to="/search" color="primary" :block="$vuetify.breakpoint.smAndDown" >
            Повернутись до пошуку
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
const { items, getText } = require('~/content') 
import VueMarkdown from '@adapttive/vue-markdown'

export default {
  transition: 'fade',
  components: {
    'vue-markdown': VueMarkdown
  },
  async mounted () {
    const { id } = this.$route.params
    let item = items.find(el => el.id === id)
    if (!item) throw { statusCode: 404, message: 'Post not found' }

    for (let [key, value] of Object.entries(item)) {
      if (key === 'text') value = (await getText(value)).default
      this.$set(this, key, value)
    }
    this.render++
  },
  data () {
    return {
      id: '',
      name: '',
      text: '',
      image: [],
      tags: [],
      price: 0,
      currency: '',
      render: 0
    }
  },
  computed: {
  },
  methods: {
  },
  name: 'searchPage'
}
</script>
