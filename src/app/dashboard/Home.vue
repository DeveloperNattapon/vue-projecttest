<template>
<div class="Home">
  <v-app>
  <Navbar/>
  {{this.getUser()}}
</v-app>
</div>


</template>

<script>
import {sync} from 'vuex-pathify';
import {Navbar} from '../shared/components';
export default {
  name:"Home",
  components:{
    Navbar
  },
  comments:{
    userLogin: sync("Login/userData")
  },
  methods:{
   async getUser(){
     const use = this.$store.get("Login/userData");
      await console.log("userLogin-->",use);
      //console.log("password-->",use.password);
    }
  },
  mounted (){
    //alert(this.userLogin);
   
  }
}
</script>

<style>

</style>