<template>
  <v-row justify="center" align="center">
    <!-- Video header -->
    <video-header></video-header>

    <!-- Main info -->
    <div cols="12" class="ma-0" style="width: 100%;margin-top: -32px !important;">
      <div class="pr-4 pl-4">
        <v-img src="/peremoha/hr-blue.svg" width="420px" class="margin-auto" style="min-width: 50%;"></v-img>
      </div>
      <!-- Short description -->
      <v-card width="100%" class="elevation-0 text-center mt-8">
        <v-card-text>
          <div class="tt fw-400 text--primary fs-175 uppercase mb-4">Головна мета заходу</div>
          <div class="fs-120">збір коштів на потреби Збройних сил України, Територіальної оборони та добровольчих батальйонів.</div>

          <!-- Timer -->
          <div class="tt mt-12 fs-150 mb-2">До початку події</div>
          <div class="mt-6">
            <span
              :class="{ pill: $vuetify.breakpoint.mdAndUp, yellow: $vuetify.breakpoint.mdAndUp, 'pa-2': $vuetify.breakpoint.mdAndUp, 'pl-4': $vuetify.breakpoint.mdAndUp, 'pr-4': $vuetify.breakpoint.mdAndUp }"
              class="mt-8 rounded-pill fs-175"
              ref="counter"
            ></span>
          </div>
          
        </v-card-text>
      </v-card>
    </div>

    <!-- Number of goods -->
    <v-card width="100%" class="elevation-0 text-center mt-8 primary-card" dark>
      <v-card-text>
        <v-row class="mt-8">
          <v-col cols="12" md="6" offset-md="3">
            <div class="fw-800 uppercase fs-175 mb-8">Участь в аукціоні</div>
            <div>
              <span class="fs-120">Учасники аукціону зможуть придбати антикваріат, живопис, твори та вироби сучасних митців на тему російської агресії та Незалежності України, трофеї наших Захисників, поштові марки з підписом Головнокомандувача Збройних сил України Валерія Залужного.</span>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col @click="goTo('Трофеї')" cols="12" md="3" class="mt-8 mb-8 cursor-pointer">
            <div class="fw-600">Трофеї</div>
            <v-icon style="font-size: 500%;" class="cursor-pointer">mdi-pistol</v-icon>
            <div class="fw-600 fs-150">{{ counts['Трофеї'] }}</div>
          </v-col>

          <v-col @click="goTo('Книги')" cols="12" md="3" class="mt-8 mb-8">
            <div class="fw-600">Книги</div>
            <v-icon style="font-size: 500%;" class="cursor-pointer">mdi-book-open-variant</v-icon>
            <div class="fw-600 fs-150">{{ counts['Книги'] }}</div>
          </v-col>

          <v-col @click="goTo('Живопис')" cols="12" md="3" class="mt-8 mb-8">
            <div class="fw-600">Живопис</div>
            <v-icon style="font-size: 500%;" class="cursor-pointer">mdi-palette</v-icon>
            <div class="fw-600 fs-150">{{ counts['Живопис'] }}</div>
          </v-col>

          <v-col @click="goTo('Кераміка')" cols="12" md="3" class="mt-8 mb-8">
            <div class="fw-600">Антикваріат</div>
            <v-icon style="font-size: 500%;" class="cursor-pointer">mdi-trophy-variant</v-icon>
            <div class="fw-600 fs-150">{{ counts['Кераміка'] }}</div>
          </v-col>

        </v-row>
      </v-card-text>
    </v-card>

    <!-- Examples of goods -->
    <v-card width="100%" class="elevation-0">
      <v-card-text>
        <v-row class="mt-8">
          <v-col cols="12" md="6" offset-md="3">
            <div class="tt fw-400 text--primary fs-175 uppercase mb-4 text-center">Нові лоти</div>
          </v-col>
        </v-row>
        <v-row class="mt-8 margin-auto" style="max-width: 960px;">
          <v-col v-for="(item, key) in randomItems" :key="'item-' + key" cols="12" md="4">
            <v-card class="mx-auto d-flex flex-column" style="height: 100%;">
              <div>
                <v-img height="220" :src="'/peremoha/thumbs/' + item.image[0]" class="text-right">
                  <v-chip small color="yellow" class="mt-2 mr-2">{{ item.tags[0] }}</v-chip>
                </v-img>
                <v-card-title class="tt text--primary">{{ item.name }}</v-card-title>
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
        </v-row>
        <v-row class="mt-2 mb-8">
          <v-btn class="margin-auto" color="primary" router to="/search">Дивитися всі <v-icon right>mdi-chevron-down</v-icon></v-btn>
        </v-row>
        <v-row class="mb-8">
          <v-img width="40" height="120" contain src="/peremoha/down-blue.svg"></v-img>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Sponsors -->
    <v-img
      gradient="to top right, rgba(32, 63, 106,0.95), rgba(39, 92, 157,0.95)"
      src="/peremoha/headers/silver-ringvee--hZvVWVhk3g-unsplash.jpg" :aspect-ratio="16/1"
      class="bg align-center">
      <v-card-text class="margin-auto text-center white--text">
        <v-row class="mt-8">
          <v-col cols="12" md="6" offset-md="3">
            <div class="fw-800 uppercase fs-175 mb-8">Захід відбувається за підтримки</div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="3" class="mt-8 mb-8">
            <a href="https://standforukraine.com/" target="_blank">
              <v-img
                class="margin-auto"
                src="/peremoha/stand-for-ukraine-white.svg"
                width="120"
                alt="Stand For Ukraine"
              ></v-img>
            </a>
          </v-col>
          <v-col cols="12" md="3" class="mt-8 mb-8">
            <a href="https://ihelp.in.ua" target="_blank">
              <v-img
                class="margin-auto"
                src="/peremoha/ihelp-white.png"
                width="160"
                alt="БФ «Я допомагаю»"
              ></v-img>
            </a>
          </v-col>
          <v-col cols="12" md="3" class="mt-8 mb-8">
            <a href="https://standforukraine.com/" target="_blank">
              <v-img
                class="margin-auto"
                src="/peremoha/n-white.svg"
                width="120"
                alt="N"
              ></v-img>
            </a>
          </v-col>
          <v-col cols="12" md="3" class="mt-8 mb-8">
            <a href="https://standforukraine.com/" target="_blank">
              <v-img
                class="margin-auto"
                src="/peremoha/dpl-white.png"
                width="220"
                alt="DPL Dipel"
              ></v-img>
            </a>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="mt-8 mb-8">
            <a href="https://standforukraine.com/" target="_blank">
              <v-img
                class="margin-auto"
                src="/peremoha/ukraine-it-hub.svg"
                width="240"
                alt="Ukraine IT HUB"
              ></v-img>
            </a>
          </v-col>
          <v-col cols="12" md="6" class="mt-8 mb-8">
            <a href="https://standforukraine.com/" target="_blank">
              <v-img
                class="margin-auto"
                src="/peremoha/figaro-white.svg"
                width="240"
                alt="Figaro Catering"
              ></v-img>
            </a>
          </v-col>
        </v-row>          
      </v-card-text>
    </v-img>
    <!-- Charity -->
    <v-card width="100%" class="elevation-0 text-center mt-8">
      <v-card-text>
        <div class="tt fw-400 text--primary fs-175 uppercase mb-4">Організатори</div>
        <v-row>
          <v-col cols="12" md="6" class="pa-12">
            <v-img src="/peremoha/ridna-obolon.svg" contain height="300"></v-img>
            <div class="fw-600 mt-8">БЛАГОДІЙНИЙ ФОНД «РІДНА ОБОЛОНЬ»</div>
            <div>04210, місто Київ, Оболонська набережна, будинок 19, корпус 5</div>
            <div class="yellow" style="display: inline-block; padding: 0px 12px;">ЄДРПОУ: 44529473</div>
            <div class="mt-4">IBAN UA933203710000000260043105600</div>
          </v-col>
          <v-col cols="12" md="6" class="pa-12">
            <v-img src="/peremoha/sintez.svg" contain height="300"></v-img>
            <div class="fw-600 mt-8">БЛАГОДІЙНА ОРГАНІЗАЦІЯ БЛАГОДІЙНИЙ ФОНД "Синтез України"</div>
            <div>Україна, 02081, місто Київ, вул.Здолбунівська, будинок 7А</div>
            <div class="yellow" style="display: inline-block; padding: 0px 12px;">ЄДРПОУ: 44747957</div>
            <div class="mt-4">IBAN UA923204780000026009924922416</div>
          </v-col>
          <v-col cols="12" class="pa-12">
            <v-img src="/peremoha/qr_obolon.jpg" contain height="300"></v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Contacts -->
    <!--
    <v-card width="100%">
      <div style="position: relative;"  id="contacts" rel="contacts">
        <div class="text-center mb-4 pt-4 w-100" style="position:absolute; z-index: 1999; top: 0px;">
          <div class="fw-600 fs-200 uppercase primary--text">Чекаємо на тебе!</div>
          <div
            class="text-center w-100 fw-500">м. Київ, ст. м «Майдан Незалежності»</div>
          <div>Вхід через ст. М Хрещатик, вул. Інститутська, 6.</div>
          <div class="yellow" style="display: inline-block; padding: 0px 12px;">Початок о 16:00.</div>
        </div>
        <div id="map" style="width: 100%;" :class="{ 'vh75': $vuetify.breakpoint.mdAndUp, 'vh100': !$vuetify.breakpoint.mdAndUp }"></div>
      </div>
    </v-card>
    -->
    </div>
  </v-row>
</template>

<script>
const { items } = require('~/content') 

export default {
  transition: 'fade',
  async mounted () {
    // Set counter
    if (new Date() >= new Date('2022-07-31T23:59:59')) {
      this.$refs.counter.classList.add('d-none')      
    } else {
      let date = new Date() <= new Date('2022-07-31T16:00:00') ? new Date('2022-07-31T16:00:00') : new Date('2022-07-31T23:59:59')
      startTimer(this.$refs.counter, date)
    }
    // Count categories
    let countedCategories = items.reduce((acc, val) => {
      for (let el of val.tags) {
        if (!acc[el]) {
          acc[el] = 1
          return acc
        } else {
          acc[el] = acc[el] + 1
          return acc
        }
      }
    }, {})
    this.$set(this, 'counts', countedCategories)
    /*
    // Map was refused
    const map = L.map('map', {
      gestureHandling: true,
      gestureHandlingOptions: {
        text: {
          touch: 'Щоб перемістити положення карти, користуйтеся двома пальцями',
          scroll: 'Для наближення карти, натисність Ctrl та використовуйте скрол',
          scrollMac: 'Для наближення карти, натисність \u2318 та використовуйте скрол'
        }
      }
    }).setView([50.4477423,30.5240062], 16)

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map)

    const marker = L.marker([50.4467423,30.5240062]).addTo(map)
    */
  },
  data () {
    return {
      counts: {}
    }
  },
  computed: {
    randomItems: () => {
      return getRandom(items, 6)
    },
    favourites: function () {
      return this.$store.state.favourites
    }
  },
  methods: {
    goTo (pageType) {
      this.$router.push('/search?q=' + pageType)
    },
    changeFavourite (id) {
      let action = this.favourites.includes(id) ? 'removeFromFavourites' : 'addToFavourites' 
      this.$store.commit(action, id)
    }
  },
  name: 'IndexPage'
}

const startTimer = (element, date) => {

  // Set the date we're counting down to
  const countDownDate = new Date('2022-07-31T16:00:00').getTime()

  // Update the count down every 1 second
  const x = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime()
    // Find the distance between now and the count down date
    const distance = countDownDate - now
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    let date = ''
    if (days > 0) date = date + createDatePart(days, 'days') + ' '
    date = date + createDatePart(hours, 'hours') + ' '
    date = date + createDatePart(minutes, 'minutes') + ' '
    date = date + createDatePart(seconds, 'seconds') + ' '

    element.innerHTML = date

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x)
      element.innerHTML = "Подія вже розпочалась!"
    }
  }, 1000)
}

const dateParts = {
  days: {
    '1': 'день',
    '2': 'дні',
    '3': 'дні',
    '4': 'дні',
    'other': 'днів'
  },
  hours: {
    '1': 'година',
    '2': 'години',
    '3': 'години',
    '4': 'години',
    'other': 'годин'
  },
  minutes: {
    '1': 'хвилина',
    '2': 'хвилини',
    '3': 'хвилини',
    '4': 'хвилини',
    'other': 'хвилин'
  },
  seconds: {
    '1': 'секунда',
    '2': 'секунди',
    '3': 'секунди',
    '4': 'секунди',
    'other': 'секунд'
  }
}

const createDatePart = (interval, intervalType) => {
  let text = "" + interval
  if (text.length === 1) return interval + ' ' + (dateParts[intervalType][interval] ? dateParts[intervalType][interval] : dateParts[intervalType]['other'])
  text = text.slice(text.length - 2, text.length)
  if (parseInt(text) < 20) return interval + ' ' + dateParts[intervalType]['other']
  text = text.slice(text.length - 1)
  return interval + ' ' + (dateParts[intervalType][text] ? dateParts[intervalType][text] : dateParts[intervalType]['other'])
}

const getRandom = (arr, n) => {
  const result = new Array(n)
  let len = arr.length
  const taken = new Array(len)
  if (n > len) throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}


</script>
<style>
.gradient {
  color: '#275C9D';
  background: '#16466F';
}
.margin-auto {
  margin: auto;
}
.w-100 {
  width: 100%;
}

.v-card__title {
  word-break:  initial !important;
}

.vh75 {
  height: 75vh
}
.vh100 {
  height: 100vh
}
.cursor-pointer {
  cursor: pointer;
}
</style>