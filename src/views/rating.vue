<template>
    <v-card
      style="margin-top: 300px; padding-top: 50px; text-align: center;" 
      class="px-2 mx-auto"
      max-width="600"
      rounded="lg"
      text="How satisfied are you with developing using Vuetify?"
      theme="dark"
      title="SURVEY"
      variant="flat"
    >
      <template v-slot:append>
        <div class="me-n2">
          <v-btn
            icon="mdi-arrow-u-left-top"
            density="comfortable"
            variant="plain"
          ></v-btn>
        </div>
      </template>
  
      <v-item-group
        v-model="model"
        class="d-flex justify-sm-center px-6 pt-2 pb-6">
        <v-item>  
        
          <template v-slot:default="{ toggle }">
            <v-btn
              :icon="`mdi-emoticon-happy-outline`"
              :active="model != null && model + 1 >= n"
              border
              height="40"
              variant="text"
              width="40"
              @click="toggle"
            ></v-btn>

            <v-btn
              :icon="`mdi-emoticon-neutral-outline`"
              :active="model != null && model + 1 >= n"
              border
              height="40"
              variant="text"
              width="40"
              @click="toggle"
            ></v-btn>

            <v-btn
              :icon="`mdi-emoticon-sad-outline`"
              :active="model != null && model + 1 >= n"
              border
              height="40"
              variant="text"
              width="40"
              @click="toggle"
            ></v-btn>
            
          </template>
        </v-item>
      </v-item-group>
    </v-card>
  </template>
  

<script setup>
import { ref } from 'vue';


const model = ref(null)

</script>