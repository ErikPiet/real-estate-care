<template>  
  <v-btn @click="$router.push('./')" density="compact" icon="mdi-home"></v-btn> 
  <v-btn @click="fetchInspections()" density="compact" icon="mdi-autorenew"></v-btn>
  <!--loading indicator-->
  <div v-if="!loading">
    <h3>Loading...</h3>
  </div>
  <div v-if="error" class="alert alert-danger">
    <h3>Error!</h3>
    <div>{{ errorList }}</div>
  </div>
  <div>
    <h2>Scheduled inspections</h2>
    <ul class="list-group">
      <template v-for="inspection of inspections" :key="inspection.id">
        <li class="list-group-item"
            @click="getInspection(inspection.id)"        
            v-if="inspection.status =='Scheduled'"    
        >{{ inspection.object }}</li>
      </template>    
    </ul>
  </div>
  </template>
    
  <script>
    export default {
      name: "Inspection",
      methods: {
        fetchInspections() {
          this.$store.dispatch('fetchInspections')
        },
        clearInspections() {
          this.$store.dispatch('clearInspections')
        },
        getInspection(id) {
          console.log(this.$store.getters.getInspection(id));
          this.$router.push({
            name: "inspection-edit",
            params: {
              id: id            
            }
          });
        },
      },
      computed: {
        inspections() {
          return this.$store.state.inspections;
        },
        loading() {
          return this.$store.state.loadingStatus === 'notloading'
        },
        error() {
          return this.$store.state.errors.length > 0;
        },
        errorList() {
          return this.$store.state.errors;
        }
      }
    }
    
  </script>