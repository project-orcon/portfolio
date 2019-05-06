<template>
    <div id="page">
        <v-toolbar dark color="black" fixed>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="$emit('close')">
                <v-icon>close</v-icon>
            </v-btn>
        </v-toolbar>
        <v-container fluid class="grey darken-4" style="width:100%;height:100%;min-height:100vh;min-width:100vw;" align-start>

            <v-container fluid fill-height style="width:100%;height:100%">
                <v-container fluid class="white--text" text-xs-center style="height:100%;width:100%">

                    <v-layout row wrap style="max-width:900px;width:100%;margin:0 auto">
                        <v-flex xs12 md12>
                            <div class="text-xs-center mb-4  mt-5 display-1 font-weight-thin">{{heading}}</div>
                        </v-flex>
                        <v-flex xs12 v-if="images == null">
                            <a :href="link" target="_blank"><img :src="'/assets/'+image" class="image"></a>
                        </v-flex>
                        <v-flex xs12 v-if="images != null">
                            <!-- decrease carousel height for mobile so aspect ratio is preserved-->
                            <v-carousel :height="$vuetify.breakpoint.smAndUp ? 400 : 200" light>
                                <v-carousel-item v-for="(item,i) in images"
                                                 :key="i"
                                                 :src="'/assets/'+item"></v-carousel-item>
                            </v-carousel>
                        </v-flex>

                        <v-flex xs12 class="text-xs-left">
                            <div class="title font-weight-light mb-3 mt-5"> <strong>Skills Required</strong></div>
                            <div class="ml-1">
                                <div class="d-inline-block font-weight-light"><v-chip small label outline color="white" v-for="(n,key) in skills" :key="key">{{n}}</v-chip></div>
                            </div>
                            <div class="mt-5 title font-weight-light mb-3"><strong>Description</strong></div>
                            <span v-html="description" class="font-weight-light"></span>
                        </v-flex>
                        <v-flex xs12 class="text-xs-center" width="100%" v-if="link"><v-btn  outline  color="white" class="my-5" :href="link">Go to Site</v-btn></v-flex>

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
     //background page colour
      heading: String,
      skills: Array,
      image: String,
      images:Array,
      description:String
        },
data() {
    return {
        dialog:true
            }
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