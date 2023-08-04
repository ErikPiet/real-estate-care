<template>
  <v-container>    
    <v-row justify="center">
      <v-col cols="auto">
        <v-sheet class="mx-auto mt-8 rounded-lg text-center" elevation="6" min-width="100%">
          <v-icon            
            color="black"
            icon="mdi-bookmark-outline"
            size="160"
          ></v-icon>
          <p>Scheduled</p>
        </v-sheet>
      </v-col>

      <v-col cols="auto">
        <v-sheet class="mx-auto mt-8 rounded-lg text-center" elevation="6" width="100%">
          <v-icon            
            color="black"
            icon="mdi-check-circle"
            size="160"
          ></v-icon>
          <p>Completed</p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <v-sheet class="mx-auto mt-8 rounded-lg text-center" elevation="6" width="100%">
          <v-icon            
            color="black"
            icon="mdi-apps"
            size="160"
          ></v-icon>
          <p>Knowlegde base</p>
        </v-sheet>
      </v-col>

      <v-col cols="auto">
        <v-sheet class="mx-auto mt-8 rounded-lg text-center" elevation="6" width="100%">
          <v-icon            
            color="black"
            icon="mdi-cog"
            size="160"
          ></v-icon>
          <p>Settings</p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <div>
  
    <h2>Completed inspections</h2>
      <CompletedList v-for="event in events" :event="event" :key="event.id" />
    
  </div>
</template>

<script>
import CompletedList from '@/components/CompletedList.vue'
import EventService from '@/services/EventService'
export default {
  name: "DashBoard",
    components: {
    CompletedList
  },
  data() {
    return {
      events: null
    }
  },
  created(){
    EventService.getPage('/inspections')
    .then(response => {
      this.events = response.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>