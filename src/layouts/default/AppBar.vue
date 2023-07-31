<template>
  <v-system-bar color="teal-lighten-1">
    <v-icon icon="mdi-square"></v-icon>
    <v-icon icon="mdi-checkbox-blank-circle" class="ms-2"></v-icon>
    <v-icon icon="mdi-triangle" class="ms-2"></v-icon>

  </v-system-bar>

  <v-app-bar :elevation="2" color="blue-grey-darken-4">
    <v-app-bar-title>Real Estate Care</v-app-bar-title>
    <template v-slot:append>
      
      <v-btn icon="mdi-bell"></v-btn>

      <v-btn icon="mdi-cog"></v-btn>
    </template>
  </v-app-bar>

  <v-bottom-navigation bg-color="teal-lighten-1">
    <v-btn value="recent">
      <v-icon>mdi-wrench</v-icon>

      Active task
    </v-btn>

    <v-btn value="favorites">
      <v-icon>mdi-magnify</v-icon>

      Search
    </v-btn>

    <v-btn value="nearby">
      <v-icon>mdi-information</v-icon>

      Information
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
  //
</script>
