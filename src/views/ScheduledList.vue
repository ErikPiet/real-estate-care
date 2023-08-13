<template>   
    <button @click="fetchInspections()" class="btn btn-dark">Schade</button>
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
        <li class="list-group-item"
          @click="getInspection(inspection.id)"
            v-for="inspection of inspections" :key="inspection.id"
        >{{ inspection.date }} - {{ inspection.location }}</li>    
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
              name: "inspection-detail",
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