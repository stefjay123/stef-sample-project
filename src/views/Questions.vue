<template>
    <h1 class="title" style=" display:flex;
  align-items: center;
  justify-content: center;
  color: #082061;
  font-size: 2em;
  padding: 45px;
  margin-top: 15px;">Welcome to Public Assistance and Complaint Desk</h1>

    <v-card
    class="pa-2 mx-auto"
    flat
    width="80%">

    <v-toolbar
      dense
      floating>    
      
      <v-text-field
        class="search-bar"
        hide-details append-inner-icon="mdi-magnify"  label="Search for category, name, keyword, etc."  single-line variant="outlined"
        ></v-text-field>
    
 
</v-toolbar>
</v-card>

<!-- line here -->

<v-layout class="pa-5">
<v-row justify="center">
<v-col cols="auto" class="ml-16">
  

  <v-card
    style="background-color: #dddddd; border-radius: 25px;" 
    width="400" 
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="@/assets/training.png"
      style="margin: 15px;"
    
    >
     
    </v-img>

    <v-card-actions class="box1 pa-4 rounded-b-xl" style="background-color: #3C59A6; color:white">
        Training Department
    </v-card-actions>
  </v-card>
</v-col>
<!-- line here -->
<v-col cols="auto" class="ml-n16">
  <v-card 
    
    style="background-color: #dddddd; border-radius: 25px;"
    width="400"
    border-radius="20px"
    
  >
    <v-img
      class="align-end text-white"
      height="200px"
      src="@/assets/registrar.png"
      style="margin: 15px;"
    
    >
     
    </v-img>
    
    <v-card-actions class="box1 pa-4 rounded-b-xl" style="background-color: #3C59A6; color: white">
        Registrar
    </v-card-actions>
  </v-card>
</v-col>
<!-- line here -->
<v-col cols="auto" class="ml-16">
  <v-card 
    
    style="background-color: #dddddd; border-radius: 25px;"
    width="400"
    border-radius="20px"
    
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="@/assets/certificate.png"
      style="margin: 15px;"
    
    >
     
    </v-img>

    <v-card-actions class="box1 pa-4 rounded-b-xl" style="background-color: #3C59A6; color: white">
        Certification and Assessment
    </v-card-actions>
  </v-card> 
</v-col>
<!-- line here -->
<v-col cols="auto" class="ml-16">
  

  <v-card
    style="background-color: #dddddd; border-radius: 25px;" 
    width="400"  
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="@/assets/admin.png"
      style="margin: 15px;"
    
    >
     
    </v-img>

    <v-card-actions class="box1 pa-4 rounded-b-xl" style="background-color: #3C59A6; color: white; ">
        Procurement/Accounting/Admin
    </v-card-actions>
  </v-card>
</v-col>

<!-- line here -->

<v-col cols="4" class="ml-16">
  <v-card
    style="background-color: #dddddd; border-radius: 25px" 
    width="400" to="/walk-in">
   
    <v-img
      class="align-end text-white"
      height="200"
      src="@/assets/feed.png"
      style="margin: 15px;"
    
    >
     
    </v-img>

    <v-card-actions class="box1 pa-4 rounded-b-xl" style="background-color: #3C59A6; color:white;">
      Feedback
    </v-card-actions>
  </v-card>
</v-col>



</v-row>
</v-layout>



</template>



<style>

/* .v-field.v-field--appended {
    --v-field-padding-end: 6px;  
    border-radius: 25px;
    border: 1px solid rgb(84, 84, 84);    
} */


.box1{
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 52px; 
  border-radius:6, 
}

.ml-n16 {
    margin-left: 63px !important;
}

.search-bar {
  margin-left: 50px;
}

</style>
