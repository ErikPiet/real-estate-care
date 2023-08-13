<template>
    <div v-if="inspection"><!-- -->
        <h3>Details: {{ inspection.location }} - {{ inspection.date }}</h3>
        <table class="table table-striped">
            <tbody>
                <tr>
                    <td>Inspectie ID</td>
                    <td>{{ inspection.id }}</td>
                </tr>
                <tr>
                    <td>Locatie</td>
                    <td>{{ inspection.location }}</td>
                </tr>
                <tr>
                    <td>Inspectie datum</td>
                    <td>{{ inspection.date }}</td>
                </tr>
                <tr>
                    <td>Nieuw</td>
                    <td>{{ inspection.neuw }}</td>
                </tr>
                <tr>
                    <td>Acuut</td>
                    <td>{{ inspection.acute }}</td>
                </tr>
                <tr>
                    <td>Omschrijving</td>
                    <td>{{ inspection.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>

      
</template>
<script>    
    
    export default {
        name: "ApiVuexDetail",            
        created() {            
            this.id = this.$route.params.id;   
            console.log(this.id + 'geklikt')
        },
        computed: {
            inspection() {   
                return this.$store.getters.getInspection(this.id);
            }
        }
    }

    
</script>