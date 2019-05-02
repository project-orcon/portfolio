<template>
<div class="page" style="height:100%; width:100%; max-width:100vw;max-height:100vh;">

    <v-container fluid :class="colour" style="width:100%;height:100%;padding-top:100px;" align-start>
     <v-container fluid class="white--text" v-if="option == 'HEADING'" align-content-center fill-height justify-center style="width:100%;height:100%">
         <v-flex xs12 text-xs-center><div class="primary--text" :class="$vuetify.breakpoint.mdAndUp ? 'blockHeading': 'blockHeadingMobile'">{{heading}}</div></v-flex>
        
    </v-container>
    <v-container fluid  fill-height v-else style="width:100%;height:100%">
     <v-container fluid   class="white--text" text-xs-center v-if="$vuetify.breakpoint.mdAndUp" style="height:100%;width:100%">
        <v-btn @click="$vuetify.goTo(0,{})" fab small color="white" style="position:absolute;top:125px;right:20px;z-index:3"><v-icon>fas fa-angle-double-up</v-icon></v-btn>
       <v-layout row wrap style="max-width:900px;width:100%;margin:0 auto" >
      <v-flex xs12 md12>
       <div class="text-xs-center my-3 main-heading">{{heading}}</div>
       </v-flex>
       <v-flex xs12 md6>
        <a :href="link" target="_blank"><img :src="require('../assets/'+image)" class="image"></a>
       </v-flex>
       <v-flex xs12 md6 class="text-xs-left">
      <div  class="subheading mb-1 mt-3"> <strong>Skills Required</strong></div>
       <div class="ml-1">
           <div class="d-inline-block"><v-chip  small outline color="white"  v-for="(n,key) in skills" :key="key">{{n}}</v-chip></div></div>
         <div  class="mt-3 subheading mb-1"><strong>Description</strong></div>
        <span v-html="description"></span>
      </v-flex>
      
        </v-layout>
        </v-container>
        <v-container fluid fill-height class="white--text" justify-center text-xs-center  v-else>
        <v-layout column fill-height style="width:100%; max-width:500px;">
      <v-flex xs12 md12 class="shrink" style="margin-top:-30px">
       <div class="text-xs-center my-4 subheading"><strong>{{heading}}</strong></div>
       </v-flex>
       <v-flex xs12 class="shrink">
        <a :href="link" target="_blank"> <img :src="require('../assets/'+image)" class="image-mobile"></a>
       </v-flex>
       <v-flex xs12 class="text-xs-left shrink">
           <div class=" scrollHorizontal">
           <div class="d-inline-block "><v-chip  small outline color="white"  v-for="(n,key) in skills" :key="key">{{n}}</v-chip></div></div>
        </v-flex>
      

            <v-flex xs12 class="text-xs-left expand mt-2">
         <v-touch @swipeleft="onLeft()" @swiperight="onRight()">
                 <span v-html="description"></span>
            </v-touch>
            </v-flex>
    

      
      
        </v-layout>
        </v-container>
        </v-container>
    
        </v-container>
</div>
</template>

<script>
 export default {
  name: 'Page',
  props: {
      link:String, //page link -click on image.
      option:String, //type of page - heading or details page
      colour:String, //background page colour
      heading: String,
      skills: Array,
      image:String,
      description:String
  },
  methods: {
onLeft() {
    this.$emit('increase');
},
onRight() {
     this.$emit('decrease');
   
}
  }

}
</script>
<style scoped>
.scrollHorizontal {
      overflow: auto; white-space:nowrap;width:100%;
    }

.negative-margin {
    margin-top:-20px;
}
.image {
max-width:400px;width:100%; margin-top:-10px;
}
.image-mobile {
max-width:400px;width:100%; margin-top:-30px;
max-height:80%;

}
.blockHeading {
    font-family: 'Anton', sans-serif;
    font-size:200px;
}
.blockHeadingMobile {
      font-family: 'Anton', sans-serif;
    font-size:60px;
}

.shrink {
flex:0 1 auto;
}

.expand {
    flex:1 0 120px;
    overflow-y:auto;
    overflow-x: hidden;
    

}
</style>