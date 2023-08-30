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
                    <td>{{ inspection.object }}</td>
                </tr>
                <tr>
                    <td>Inspectie datum</td>
                    <td>{{ inspection.date }}</td>
                </tr>
            </tbody>
        </table>
        <div v-if="inspection.damage">
            <table class="table table-striped">
                <caption>Schade</caption>
                <tbody>
                    <tr>
                        <td>Locatie van de schade</td>
                        <td>{{ inspection.damageLocation }}</td>
                    </tr>
                    <tr>
                        <td>Schade datum</td>
                        <td>{{ inspection.damageDate }}</td>
                    </tr>
                    <tr>
                        <td>Nieuwe schade?</td>
                        <td>{{ inspection.damageOld }}</td>
                    </tr>
                    <tr>
                        <td>Acute schade?</td>
                        <td>{{ inspection.damageAcute }}</td>
                    </tr>
                    <tr>
                        <td>Omschrijving schade</td>
                        <td>{{ inspection.damageDescription }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
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