<template>
 
   <!-- <v-slide-y-transition mode="out-in">-->
     <div class="home black" ref="home">
       
       
     <v-container fluid class="black primary--text text--darken-3 bimage">
      
         <div v-if="$vuetify.breakpoint.mdAndUp" style=" max-width:1200px; margin:80px auto;">
            <v-layout row wrap align-center>
       <v-flex md5 offset-md3 >
       
<div class="main-heading" >Full Stack Web Developer</div> 
<h2 style="max-width:450px" class="pink--text">Specialising in Vue.js, Vuetify, Single page applications, API driven development, Firebase, Node.js and  Ruby on Rails. </h2>

</v-flex>
 <v-flex md3 class="text-md-left text-xs-center"><img src="@/assets/profilepic.jpg" style="height:160px;border-radius:80px">
</v-flex>
<v-flex md5 offset-md3><v-btn outline lrg color="pink darken-2" href='https://github.com/project-orcon'>See my github</v-btn></v-flex>
</v-layout>
         </div>
         <div v-else>
            <v-layout row wrap align-center>
           <v-flex xs12 class="text-xs-center my-3"><img src="@/assets/profilepic.jpg" style="height:100px;border-radius:50px;">
</v-flex>
             <v-flex xs12>
       
<div class="headline text-xs-center">Full Stack Web Developer</div> 
<div class="subheading pink--text" text-xs-center style="width:280px;margin:0 auto; padding:10px;">Specialising in Vue.js, Vuetify, Single page applications, API driven development, Firebase, Node.js and  Ruby on Rails. </div>
<div class="text-xs-center"><v-btn outline lrg color="pink darken-2" href='https://github.com/project-orcon'>See my github</v-btn></div>
</v-flex>
  </v-layout>
           </div>
      
     </v-container>
<v-snackbar v-model="on">EVENT REGISTERED</v-snackbar>

<v-touch @swipeleft="increasePageIndex()" @swiperight="decreasePageIndex()">
  <div style="position:relative;height:100vh; width:100vw;max-width:100vw;  overflow: hidden;">
  <transition :name="transition">
    
<page :option="page.option" :link="page.link" :colour="page.colour" :heading="page.heading" :image="page.image" :skills="page.skills" :description="page.description" :total="pages.length" :index="index" :key=index v-for="(page,index) in pages" v-if="pageIndex == index" @increase="increasePageIndex()" @decrease="decreasePageIndex()" ></page>
 </transition> 
 </div>
 </v-touch>
<v-container fluid style="padding:0">
  
<v-flex xs12 class="white--text pink py-2 px-1">
          <v-layout row >
          <v-flex xs6 text-xs-left><v-icon large color="white" :disabled="pageIndex == 0" @click="decreasePageIndex()">keyboard_arrow_left</v-icon></v-flex><v-flex xs6 text-xs-right><v-icon large color="white" :disabled="pageIndex == pages.length -1" @click="increasePageIndex()">keyboard_arrow_right</v-icon></v-flex>
          </v-layout>
     </v-flex>
</v-container>
</div>
    

</template>

<script>
import Page from '@/components/Page.vue'
export default {
  name: 'Home',
  components: {
    Page
  },
 data() {
   return { 
     on:false,
     moveRight:false,
     pageIndex:0,
     currentHeight:0,
     height:0,
     status:"none",
     scrolling:false,
     pages: [
       {
       option:"HEADING",
       colour:"black",
       heading:"PROJECTS"
     },
       {
      option:"DEFAULT",
       colour:"primary darken-4",
       link:"https://app.hireabuddy.co",
       heading: "Hire a Buddy",
       image: "buddy1.png",
       description: `I was tasked with developing a SPA front end for Hire a Buddy which had an existing node.js api backend.
       The front end allows users to authenticate via Facebook, update their personal details (including uploading photos),
       real time search for buddies (implemented via websockets), view profiles, add credit card and account details, and 
       book or be hired as a buddy. Users can also message other users (this was implemented via firebase db), and new message notifications
       were pushed to users through firebase messaging).`,

     skills: [
       "Vue.js",
       "Vuetify",
       "Facebook authentication",
       "Single page application",
       "Web sockets",
       "Firebase db",
       "Firebase messaging",
       "Stripe"
     ]
     },{
       option:"DEFAULT",
       colour:"purple darken-4",
       link:"https://tfs-stage.what2drive.com.au",
     heading: "Car loan calculator",
       image: "carloan.png",
       description: `I was tasked with developing a car loan interest rate calculator module that could be included as an iframe into
       multiple webpages for the client. I was provided with a UI mockup which I developed into the front end using Vue and Vuetify. I 
       built a simple Node.js api for the backend.<br>The backend had to be able to read the interest rate variables via google sheets, 
       send emails to the client and user (via Sendgrid) and write enquiry details to an output google sheet.
        The front end used excel style functions to generate the comparison rate and weekly payments.`,
     skills: [
       "Vue.js",
       "Vuetify",
       "HTML",
       "CSS",
       "Node.js",
       "Google sheets",
       "Send Grid"
     ]
     },
     {
       option:"DEFAULT",
       colour:"yellow darken-3",
     heading: "Jade Monkey Travel Co",
     link:" http://www.jademonkey.com.au",
       image: "jademonkey.png",
       description: `A simple one page site was built in order to test market demand for jademonkey.com.au.
       The site was built using Vue and Vuetify giving it a clean minimalistic style.` ,
     skills: [
       "Vue.js",
       "Vuetify",
       "HTML",
       "CSS"
     ]
     },
     {
       option:"DEFAULT",
       colour:"purple darken-4",
     heading: "Preter Audio",
       image: "preteraudio.png",
      link: "https://www.preteraudio.com",
       description: `Preter Audio is a startup that converts audio into surround sound delivered from stereo speakers. 
       I was tasked with automating the audio conversion process, and building an MVP site where users could sign up, upload tracks,
        have them converted and purchase the converted tracks.<br> In order to perform the conversion I had to automate several command line and 
       GUI programs using applescript and interface this with a Ruby on Rails backend which stored the converted tracks. I was also
       responsible for setting up and configuring an NGINX server to host the website.`,
     skills: [
       "Bootstrap",
       "HTML",
       "CSS",
       "Javascript",
       "Applescript",
       "Ruby on Rails",
       "PostgreSQL",
       "Stripe",
       "NGINX",
     ]
     },
      {
       option:"DEFAULT",
       colour:"pink darken-3",
     heading: "Bimblebook",
       image: "bimblebook.png",
       link: "https://www.bimblebook.com",
       description: `Bimblebook is a book sharing website that allows people to borrow books from people living nearby.
       The front end was developed using Bootstrap and Javascript while the backend was developed using ASP.NET MVC.
       <br>Users can search for and borrow books from their neighbours while the application
       takes care of sending 'new request','request approval/declined' and 'return books' email notifications. `,
     skills: [
       "Bootstrap",
       "Javascript",
       "ASP.NET MVC",
       "SQLITE",
       "Send Grid",
       "Google Books"
     ]
     },
     {
       option:"DEFAULT",
       colour:"green darken-1",
     heading: "Australian Property Guides",
       image: "ausprop.png",
       description: `Australian Property Guides is a property listings website that was built using Ruby on Rails. 
       The client was able to upload and edit new properties via an admin section of the website,
        and site users could search for properties which matched criteria such as number of rooms, price and location.<br>
       Users could also fill out a contact form to contact the client about properties they were interested in.`,
     skills: [
       "Bootstrap",
       "Javascript",
       "Ruby on Rails",
       "PostgreSQL",
       "SendGrid"
     ]
     },
      {
       option:"DEFAULT",
       colour:"primary darken-3",
     heading: "My Care Today",
       image: "mycaretoday.png",
       description: `My Care Today was a web app that enabled elderly people to easily get in contact with their case workers and carers.
       I was responsible for building the Ruby on Rails backend, and worked with a UX designer, front end developer and project manager
       to build the app.<br> The backend enabled caseworkers to add and manage their clients, and assign carers to the 20 different options
       that the user was able to select from via the app. Options included things like "help with shopping, gardening, medication, transport".
       When a user selected an option the backend would send an email to the appropriate carer.`,
     skills: [
       "Bootstrap",
       "HTML",
       "CSS",
       "Ruby on Rails",
       "PostgreSQL",
       "SendGrid"
     ]
     }]
  }
 },
 computed: {
   transition: function() {
   if (this.moveRight){
     return "out-right";
   }
   else {
     return "out-left";
   }
   }
 },
 methods: {
   increasePageIndex() {
     if (this.pageIndex < this.pages.length - 1) {
this.pageIndex++;
this.moveRight=false;
}
   },
   decreasePageIndex(){
     if (this.pageIndex >= 1) {
this.pageIndex--;
this.moveRight=true;
}
   },
   wheelDebounced: _.debounce( function(event) {
    
  //console.log("in debounce function")
  //checks if  at bottom of page. if so use wheel to flip through slides. 
if ((window.innerHeight + window.pageYOffset) >= this.$refs.home.offsetHeight) {

if (event.deltaY < 0) {
//console.log('scrolling up');
this.moveRight=true;
this.decreasePageIndex();
}
if (event.deltaY > 0) {
//console.log('scrolling down');
this.moveRight=false;
this.increasePageIndex();
}
}
//not at bottom of page, use wheel to scroll up or down to top or bottom of page
else {
  //console.log("in else statement")
  if (event.deltaY < 0) {
     this.$vuetify.goTo(0,{}); 
    
  }
  else {
   this.$vuetify.goTo(this.$refs.home.offsetHeight,{});
  }
}    
   },100),
    handleScroll (event) {
      // Any code to be executed
      // when the window is scrolled
      //font scroll if pageIndex is not 0;
      /*
      if (this.pageIndex != 0){
     event.preventDefault();
     event.stopPropagation();
     return false;
      }

      this.scrolling=true;
     this.currentHeight=window.innerHeight + window.pageYOffset;*/
    },
    handleWheel: function(event){
      //check if at bottom of page
        if (this.pageIndex != 0){
    event.preventDefault();
}
this.wheelDebounced(event);
 }
 },
  
   created () {
     
     window.addEventListener('wheel', this.handleWheel);


    //window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
this.height=this.$refs.home.offsetHeight;
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('wheel', this.handleWheel);
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.out-left-enter-active, .out-left-leave-active,
.out-right-enter-active, .out-right-leave-active,
.fade-enter-active, .fade-leave-active {
  transition: all .4s ease-in;
  z-index:1;
}
.out-left-enter, .out-left-leave-to,
.out-right-enter, .out-right-leave-to, 
.fade-enter, .fade-leave-to {
  opacity: 0;
  position:absolute;
   z-index:1;
}
.out-left-leave-to, .out-right-enter {
transform: translate(-100%,0%);
  -webkit-transform: translate(-100%, 0%);
-ms-transform: translate(-100%, 0%);
 position:absolute;
  z-index:1;



}
.out-left-enter, .out-right-leave-to {
  transform: translate(100%,0%);
    -webkit-transform: translate(100%, 0%);
-ms-transform: translate(100%, 0%);
 position:absolute;
  z-index:1;
}




.slideleft-leave-active,
.slideleft-enter-active {
  transition: 1s;
}
.slideleft-enter {
  transform: translate(100%, 0);
}
.slideleft-leave-to {
  transform: translate(-100%, 0);
}

.slideright-leave-active,
.slideright-enter-active {
  transition: 1s;
}
.slideright-enter {
  transform: translate(-100%, 0);
}
.slideright-leave-to {
  transform: translate(100%, 0);
}



.neon {
font-size: 60px;
font-family: 'Futura';
color: #fff;
text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #66FCF1, 0 0 30px #66FCF1, 0 0 40px #66FCF1, 0 0 55px #66FCF1, 0 0 75px #66FCF1;



}


.bimage {
  background-image: url("../assets/abstract.jpg");
  background-size: cover;
      background-position:center; 
    background-repeat: no-repeat;
    height:100vh;
}

.main-heading {
 font-family: 'Saira Semi Condensed', sans-serif;
  font-size:40px;
  line-height:50px;

}
h1{
font-family: 'Montserrat', sans-serif;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: none;
}

header {
  position: relative;
  height: 300px;
  overflow: hidden;
  width:100%;
}

.header__bg {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-color:#212121;
  transform: skewY(-6deg);
  transform-origin: top left;
}



.interesting {
  background-color: #212121;
background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23424242' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
background-repeat: repeat;

}
.redwaves {
 transform: skewY(-4deg);
  transform-origin: top left;


color:white;
  background-color: #ff1744;
}
.cool {-webkit-clip-path: polygon(36% 18%, 100% 0, 100% 88%, 47% 100%, 0% 75%, 0 0);
clip-path: polygon(36% 18%, 100% 0, 100% 88%, 47% 100%, 0% 75%, 0 0);




padding:100px;
color:white;

background-color: #212121;
background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23424242' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
background-repeat: repeat;

}
</style>
