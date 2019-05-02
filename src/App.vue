<template>
  <v-app style="width:100vw;max-width:100vw;">
    <v-toolbar
    flat
      app
      :clipped-left="clipped"
      class="black white--text"
      style="max-width:100vw;"
    >
      <div class="subheading" v-text="title" flat ></div>
      <v-spacer></v-spacer>
      <v-btn icon class="white--text" href="mailto:kimbedson@gmail.com">
        <v-icon>email
        </v-icon>
      </v-btn>
      <v-btn icon class="white--text" href="http://linkedin.com/in/kim-bedson-22678582">
      <v-icon>fab fa-linkedin</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
   <!-- <v-footer :fixed="fixed" app class="black white--text">
      <span>&copy; 2018</span>
    </v-footer> -->
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Portfolio of Kim Bedson'
    }
  }
}
</script>
