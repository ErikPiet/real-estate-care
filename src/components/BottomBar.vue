<template>
  <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation
      v-model="value"
      bg-color= "teal-lighten-2"
    >
      <v-btn>
        <v-icon>mdi-wrench</v-icon>

        <span>Active task</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-magnify</v-icon>

        <span>Search</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-information</v-icon>

        <span>Information</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script setup>
  //
</script>
