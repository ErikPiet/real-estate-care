<template>
    <h2>Completed Inspections list</h2>
    <ul class="list-group"><!-- nog sorteren op datum  -->
        <li class="list-group-item"
        @click="selectInspection(index)"
        v-for="(inspection, index) in CompletedDamageInspections.inspections" 
        v-bind:key="inspection.id">{{ inspection.id }} - {{ inspection.datum }} {{ inspection.locatie }}</li>
    </ul>
    <h2>Selected</h2>
      
    <div class="table-responsive-xl">
      <table class="table table-bordered">
        <thead>
          <tr class="bg-blue-grey-darken-4">
            <th scope="col">item</th>
            <th scope="col">waarde</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Inspectie id</td>
            <td>{{ selectedInspection.id }}</td>
          </tr>
          <tr>
            <td>Locatie</td>
            <td>{{ selectedInspection.locatie }}</td>
          </tr>
          <tr>
            <td>Nieuwe schade</td>
            <td>{{ selectedInspection.nieuw }}</td>
          </tr>
          <tr>
            <td>Soort schade</td>
            <td>{{ selectedInspection.soort }}</td>
          </tr>
          <tr>
            <td>Datum</td>
            <td>{{ selectedInspection.datum }}</td>
          </tr>
          <tr>
            <td>Acute actie vereist?</td>
            <td>{{ selectedInspection.acuut }}</td>
          </tr>
          <tr>
            <td>Omschrijving</td>
            <td>{{ selectedInspection.omschrijving }}</td>
          </tr>                   
        </tbody>
      </table>
    </div>
</template>
  
<script>
  import CompletedDamageInspections from '@/data/CompletedDamageInspections'
  export default {
    name: "CompletedInspections",
    data(){
        return {
            CompletedDamageInspections,
            selectedInspectionIndex: 0
        }
    },
    methods: {
      selectInspection(index){
        this.selectedInspectionIndex = index;
      }
    },
    computed: {
      selectedInspection(){
        console.log('selectedInspection aangeroepen');
        return {
          //spread operator
          ...this.CompletedDamageInspections.inspections[this.selectedInspectionIndex]
        }
      }
    }
  }
</script>
<!-- 


-->