 <template>

 


<v-layout class="pa-5" style="margin-top: 300px; ">
<v-row justify="center">
<v-col cols="3" md="auto" sm="auto" xs="auto">
  

  <v-card
    style="background-color: #dddddd; border-radius: 25px;" 
    width="400" to="/feedback"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="@/assets/training.png"
      style="margin: 15px;"
    
    >
     
    </v-img>

    <v-card-actions class="box1 pa-4 rounded-b-xl" style= "background-color: #3C59A6; color:white; justify-content: center;">
        Walk-In
    </v-card-actions>
  </v-card>
</v-col>
<!-- line here -->
<v-col cols="3" md="auto" sm="auto" xs="auto">
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
    
    <v-card-actions class="box1 pa-4 rounded-b-xl" style="background-color: #3C59A6; color: white; justify-content: center;">
        Assessment
    </v-card-actions>
  </v-card>
</v-col>

</v-row>
</v-layout>



 </template>