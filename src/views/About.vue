<template>
  <div class="about container">
    <h1>This is an about page</h1>
   <h1> {{Name}}</h1>
   <h1> {{Age}}</h1>
    <div  class="columns" >
      <div class="column">
          <button @click="selectedComponent ='component1'"> component1 </button>
          <button @click="selectedComponent ='component2'"> component2 </button>
          <button @click="selectedComponent ='component3'"> component3 </button>
          <component :is="selectedComponent"></component>
      </div>
      <div class="column">
        <AboutComponent :parentName="Name" :resetFn="resetName" @nameWasReset="Name = $event" :userAge="Age"></AboutComponent>
      </div>
      <div class="column"> <EditUser :userAge="Age" @userAgeEdited="Age=$event">
              <h1 slot="title">  Slot is working </h1>
              <p slot="description">  content of the paragraph.... </p>
       </EditUser> </div>
    </div>
  </div>
</template>
<script>
import AboutComponent from '@/components/AboutComponent.vue';
import component1 from '@/components/component1.vue';
import component2 from '@/components/component2.vue';
import component3 from '@/components/component3.vue';
import EditUser from '@/components/EditUser.vue';

export default{
  components:{
    AboutComponent,
    EditUser,
    component1:component1,
    component2:component2,
    component3:component3,
  },
   data(){
     return {
     Name:'Neelam Thakur',
     Age:27,
     selectedComponent:'component1',
     }
   },

   methods:{
     resetName(){
       this.Name="Changed Again"
     }
   },

};
</script>
