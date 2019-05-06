import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VSnackbar,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VChip,
  VToolbar,
    VCard,
    VDialog,
  VCarousel,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VChip,
    VCard,
    VSnackbar,
    VCarousel,
    VDialog,
    transitions
  },
  theme: {
    primary: '#66FCF1'
  }
})
