<template>
     <v-card class="block pa-6 rounded-t-xl" style="padding: 60px; margin: 60px; background-color: #2B4A9D;">
      <h2 class="font" style="color: white; text-align: center;">CUSTOMER INQUIRY AND FEEDBACK FORM</h2>
    </v-card>
   
   
    <v-card class="box" style="padding: 60px; margin-left: 60px; margin-right: 60px; margin-top: -60px; background-color: rgb(233, 233, 233);">
    <v-form v-model="valid">
      <v-container class="form" style="padding-top: 20px; margin-right: 40px;"> 
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="firstname"
              label="First name"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="middlename"
              label="Middle name"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="lastname"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

 
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="age"
              label="Age"
              required
            ></v-text-field>
          </v-col>


          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="sex"
              label="Sex"
              required
            ></v-text-field>
          </v-col>

        
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="contact"
              label="Contact no."
              required
            ></v-text-field>
          </v-col>
         

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              label="Email Address"
              required
            ></v-text-field>
          </v-col> 
          
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="address"
              label="Address"
              required
            ></v-text-field>
          </v-col> 
         </v-row>

        <!-- this line here -->

        <v-card-item class="text-subtitle-1 mb-1 font-italic">
          Irerekomenda nyo po ba ang TESDA sa inyong kamag-anak at kaibigan?   
        </v-card-item>

        <v-col
          cols="12"
          sm="2"
          md="2">
          
          <v-card-actions>
            <v-checkbox label="YES"></v-checkbox> 
            <v-checkbox label="NO"></v-checkbox>
          </v-card-actions>

       </v-col>


    <v-card-item class="text-h6 mb-1">
       Mahalaga sa amin ang inyong suhestyon. Paki fill-out lamang po sa patlang.   
        </v-card-item>

    <v-textarea
      style="margin-top:25px;"
      clearable
      clear-icon="mdi-close-circle"
    ></v-textarea>
  
    <!-- this line here -->
    <v-checkbox
         v-model="terms"
         color="secondary"
         label="Ang mga impormasyon na aking inilahad sa from na ito ay tama at totoo. 
         Boluntaryo kong pinagkaloob ang mga hinihinging impormasyon ng form na ito. 
         Pinapayagan ko ang TESDA na isama sa kanilang database bilang bahagi ng kanilang records ant monitoring ang mga detalyeng ito. "
       ></v-checkbox>
    


       <!-- <v-card-actions> -->
      <v-btn style="background-color: #3C59A6; color: white; " to="/rating"> SEND FORM </v-btn>
    <!-- </v-card-actions> -->
    
   </v-container>
   </v-form>
   </v-card>
    

  </template>



<script setup>
import { ref } from 'vue';

const valid = ref(false)
const firstname = ref('')
const middlename = ref('')
const lastname = ref('')   
const age = ref('')   
const contact = ref('')   
const email = ref('')   
const address = ref('')
const terms = ref(false)   

</script>