<template>    
    <ul class="list-group">
        <li class="list-group-item">{{event.datum}} - {{event.locatie}}</li>
     
    </ul>
</template>
  
<script>
  export default {     
    name: "CompletedList",
    props: {
      event: Object
    },
    data(){
      return {
      
      }
    }
  };
</script>