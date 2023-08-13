<template>
    <div v-if="inspection"><!-- -->
        <h3>Details: {{ inspection.locatie }} - {{ inspection.datum }}</h3>
        <table class="table table-striped">
            <tbody>
                <tr>
                    <td>Inspectie ID</td>
                    <td>{{ inspection.id }}</td>
                </tr>
                <tr>
                    <td>Locatie</td>
                    <td>{{ inspection.locatie }}</td>
                </tr>
                <tr>
                    <td>Inspectie datum</td>
                    <td>{{ inspection.datum }}</td>
                </tr>
                <tr>
                    <td>Nieuw</td>
                    <td>{{ inspection.nieuw }}</td>
                </tr>
                <tr>
                    <td>Acuut</td>
                    <td>{{ inspection.acuut }}</td>
                </tr>
                <tr>
                    <td>Omschrijving</td>
                    <td>{{ inspection.omschrijving }}</td>
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