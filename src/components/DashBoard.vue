<template>
  <v-container>    
    <v-row justify="center">
      <v-col cols="auto">
        <router-link to="ScheduledList">
          <v-sheet class="mx-auto mt-8 rounded-lg text-center" elevation="6" min-width="100%">
            <v-icon            
              color="black"
              icon="mdi-bookmark-outline"
              size="160"
            ></v-icon>
            <p>Scheduled</p>
          </v-sheet>
        </router-link>
      </v-col>
      <v-col cols="auto">
        <router-link to="CompletedList">
          <v-sheet class="mx-auto mt-8 rounded-lg text-center" elevation="6" width="100%">
            <v-icon            
              color="black"
              icon="mdi-check-circle"
              size="160"
            ></v-icon>
            <p>Completed</p>
          </v-sheet>
        </router-link>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <router-link to="KnowledgeBase">
          <v-sheet class="mx-auto mt-8 rounded-lg text-center" elevation="6" width="100%">
            <v-icon            
              color="black"
              icon="mdi-apps"
              size="160"
            ></v-icon>
            <p>Knowlegde base</p>
          </v-sheet>
        </router-link>
      </v-col>
      <v-col cols="auto">
        <router-link to="AppSettings">
          <v-sheet class="mx-auto mt-8 rounded-lg text-center" elevation="6" width="100%">
            <v-icon            
              color="black"
              icon="mdi-cog"
              size="160"
            ></v-icon>
            <p>Settings</p>
          </v-sheet>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
    
</template>

<script>


export default {
  name: "DashBoard",
  
}
</script>
<style>
:link {
  text-decoration: none;
}

</style>