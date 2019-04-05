<template>

 <div class="aboutComponent">
   <h1>{{currentAge}}</h1>
    <button @click="resetName"> Send Value to parent</button>
    <button @click="resetFn()">  Change Name </button>
    <!-- {{my_name}}{{upper_name}} -->
 </div>

</template>

<script>
import {eventBus} from  '../main';
export default {
  name: 'AboutComponent',

  props: {
    parentName: String,
    resetFn:Function,
    userAge:Number,
  },

  data() {
      return {

          currentAge: this.userAge,
      }
  },

  component:{

  },

  mounted() {
    console.log(this.dataList);
  },
  computed : {
      upper_name() {
          return
              this.my_name.length;
      }
  },
  methods:{
    resetName(){
      this.parentName="Changed from child component";
      this.$emit('nameWasReset',this.parentName);
    }
  },

 created(){
   eventBus.$on('userAgeEdited', (age)=> {
     this.currentAge = age;
   })
 }

};

</script>

<style scoped>
 div{
   background-color: red
 }
</style>
