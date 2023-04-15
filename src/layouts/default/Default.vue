<template>
  <v-app>
    <v-system-bar color="teal-lighten-2">
      <v-icon icon="mdi-wifi-strength-4"></v-icon>
      <v-icon icon="mdi-signal" class="ms-2"></v-icon>
      <v-icon icon="mdi-battery" class="ms-2"></v-icon>
      <span class="ms-2">3:13PM</span>
    </v-system-bar>   

    <default-view />
    
    <bottom-bar />
  </v-app>
</template>

<script setup>
  import BottomBar from '../../components/BottomBar.vue'  
  import DefaultView from './View.vue'
</script>
