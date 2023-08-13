<template>   
<button @click="fetchInspections()" class="btn btn-dark">Haal lijst op</button>
<!--loading indicator-->
<div v-if="!loading">
  <h3>Loading...</h3>
</div>
<div v-if="error" class="alert alert-danger">
  <h3>Error!</h3>
  <div>{{ errorList }}</div>
</div>
<div>
  <h2>Completed inspections</h2>
  <ul class="list-group">
    <li class="list-group-item"
      @click="getInspection(inspection.id)"
        v-for="inspection of inspections" :key="inspection.id"
    >{{ inspection.datum }} - {{ inspection.locatie }}</li>    
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