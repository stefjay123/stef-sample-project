<template>
  <!-- <h1 class="title">Welcome to Public Assistance and Complaint Desk</h1> -->

  <!-- <v-container fluid>
    <v-row>
      <v-col cols="12" class="text-right">
        <v-img src="@/assets/assistance1.png" class="ml-auto" width="900"></v-img>
      </v-col>
    </v-row>
  </v-container> -->

  <v-container fluid>
    <v-row>

      <v-col cols="6" class="godown">
      <v-card class="mx-auto elevation-0" max-width="800">
    
    <v-card-item>
      
      <div>
        
        <!-- <div class="text-overline mb-1">
          Public Assistance and Complaint Desk
        </div> -->
        <div class="text-h2 mb-1 font-weight-medium change-font">
          Public Assistance and Complaint Desk 
        </div>

        <div class="text-h5">How can we help you?</div>
      </div>
    </v-card-item>

    <v-card-actions class="link">
      <v-btn variant="outlined" size="large" color="white" to="/questions">
        Inquire Now
      </v-btn>
    
    </v-card-actions>
    <!-- GIF -->
    <v-img src="@/assets/giphy.gif" width="100" height="100"> 
    
  </v-img>
  </v-card>

  

      </v-col>
      <v-col cols="6" class="text-right">
        <v-img src="@/assets/assistance1.png" class="ml-auto" height="100%" width="100%" ></v-img>
      </v-col>
</v-row>


 </v-container>

<v-main class="v-main"></v-main>



</template>

<style>


.title{
  display:flex;
  align-items: center;
  justify-content: center;
  color: #3C59A6;
  font-size: 2em;
  padding: 45px;
}

.ml-auto{
  margin: 50px;
}

.left{
  display: flex;
  margin: 20px;
}


.godown {
  margin-top: 100px;
  padding-right: 50px;
  
  
  
}

.text-h2 {
  color: #082061;
  word-spacing: 15px;
  
  
  
}


.text-h5 {
  color: #082061;
  padding:5px;
  margin-top: 15px;
  
}

.v-card-actions .v-btn {
  background-color: #C77C45;
  margin-left: 10px;
}

</style>



 