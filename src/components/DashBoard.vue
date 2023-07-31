<template>
  <v-container>    
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn
          min-height="246"
          min-width="164"
        >
          Scheduled
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn
          min-height="246"
          min-width="164"
        >
          Completed
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn
          min-height="246"
          min-width="164"
        >
          Knowledge Base
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn
          min-height="246"
          min-width="164"
        >
          Settings
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row justify="center">     
      <v-col cols="auto">
        <CompletedInspections />    
      </v-col>  
    </v-row>

  </v-container>
</template>

<script>
  import CompletedInspections from '@/components/CompletedInspections.vue'
  export default {
    name: 'DashBoard',
    components: {CompletedInspections}
  }
</script>
