<template>
 <div>
   <div>
   <slot name="title"></slot>
   </div>
   <hr/>
   <div>
   <slot name="description"></slot>
   </div>
     <h1> Report component </h1>
     <h1>{{currentAge}}</h1>
     <button @click ="editAge(currentAge)"> Edit Age </button>
 </div>
</template>

<script>
import {eventBus} from  '../main';
export default{
  Name: "reportComponent",
  props:{
    userAge:Number,
  },
  data(){
    return {
      currentAge: this.userAge,
    }
  },
  methods:{
    editAge(new_age){
      this.currentAge = 30;
      //this.$emit("userAgeEdited",new_age);
      //eventBus.$emit("userAgeEdited",this.currentAge);
      eventBus.changeAge(this.currentAge);
    }
  },

}
</script>


<style scoped>

div{
  background: green;
}

</style>
