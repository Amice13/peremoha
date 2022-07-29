<template>
  <v-app dark>
    <v-navigation-drawer disable-resize-watcher v-model="drawer" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" color="primary" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app dark color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />
      <div @click="goHome" class="d-flex cursor-pointer">
        <v-img src="/white-logo.svg" height="50" width="70" contain></v-img>
        <div>
          <div class="fw-400 accent--text fs-120">ПЕРЕМОГА</div>
          <div class="fw-300 fs-80">ПОЧИНАЄТЬСЯ З ТЕБЕ</div>
        </div>
      </div>
      <v-spacer />
      <v-btn
        v-for="btn in items.slice(1)"
        :key="btn.to"
        class="hidden-sm-and-down"
        text
        router
        :to="btn.to"
      ><v-icon left>{{ btn.icon }}</v-icon>{{ btn.name }}</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  <v-footer color="primary" padless>
      <v-row justify="center" no-gutters>
        <div class="py-2 white--text">Телефон для довідок:
          <a class="fw-400 yellow--text" style="text-decoration: none;" href="tel:+380991449248">+38 099 144 92 48</a></div>
        <v-col class="primary darken-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Перемога починається з тебе</strong>
        </v-col>
      </v-row>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  transition: 'fade',
  data () {
    return {
      drawer: false,
      items: [
        { name: 'Головна', to: '/', icon: 'mdi-home' },
        { name: 'Лоти', to: '/search', icon: 'mdi-cart' },
        { name: 'Обране', to: '/favourites', icon: 'mdi-heart' },
        { name: 'Правила', to: '/rules', icon: 'mdi-information' }
      ],
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
* {
  font-family: 'TT Norms Pro'; font-style: normal;
}

.tt {
  font-family: 'TT Norms Pro' !important; font-style: normal;  
}

.fw-100 { font-weight: 100; }
.fw-200 { font-weight: 200; }
.fw-300 { font-weight: 300; }
.fw-400 { font-weight: 400; }
.fw-500 { font-weight: 500; }
.fw-600 { font-weight: 600; }
.fw-700 { font-weight: 700; }
.fw-800 { font-weight: 800; }
.fw-900 { font-weight: 900; }
.fw-1000 { font-weight: 1000; }
.fw-1100 { font-weight: 1100; }
.fw-1200 { font-weight: 1200; }
.fs-80 { font-size: 80%; }
.fs-100 { font-size: 100% !important; }
.fs-120 { font-size: 120%; }
.fs-150 { font-size: 150%; }
.fs-175 { font-size: 175%; }
.fs-200 { font-size: 200%; }

.primary-card {
  background: rgb(32,63,106);
  background: radial-gradient(circle, rgba(32,63,106,1) 0%, rgba(39,92,157,1) 100%);
}

.uppercase {
  text-transform: uppercase;
}
.v-card__title.tt {
  font-family: 'TT Norms Pro' !important; font-style: normal;
}
.cursor-pointer {
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>