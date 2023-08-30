<template>
    <div v-if="inspection"><!-- -->
        <h3>Details: {{ inspection.object }}</h3>
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
                <thead>
                    <tr>
                        <th colspan="2">Schade opnemen</th>
                    </tr>
                </thead>
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
                        <td>{{ inspection.damageNew }}</td>
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
        <div v-if="inspection.maintenance">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th colspan="2">(Achterstallig) Onderhoud</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Locatie van onderhoud</td>
                        <td>{{ inspection.maintenanceLocation }}</td>
                    </tr>
                    <tr>
                        <td>Soort onderhoud</td>
                        <td>{{ inspection.maintenanceKind }}</td>
                    </tr>
                    <tr>
                        <td>Acuut onderhoud</td>
                        <td>{{ inspection.maintenanceAcute }}</td>
                    </tr>
                    <tr>
                        <td>Geschatte kosten onderhoud</td>
                        <td>{{ inspection.maintenanceCost }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="inspection.techInspect">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th colspan="2">Technische installatie inspecteren</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Locatie technische installatie</td>
                        <td>{{ inspection.techLocation }}</td>
                    </tr>
                    <tr>
                        <td>Soort installatie</td>
                        <td>{{ inspection.techKind }}</td>
                    </tr>
                    <tr>
                        <td>Gemelde storingen</td>
                        <td>{{ inspection.techReportErrors }}</td>
                    </tr>
                    <tr>
                        <td>Testprocedure</td>
                        <td>{{ inspection.techTestproc }}</td>
                    </tr>
                    <tr>
                        <td>Goedgekeurd</td>
                        <td>{{ inspection.techApproved }}</td>
                    </tr>
                    <tr>
                        <td>Opmerkingen</td>
                        <td>{{ inspection.techDescription }}</td>
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