<template>
    <v-btn @click="$router.push('../ScheduledList')" density="compact" icon="mdi-arrow-left-bold-circle-outline"></v-btn> 
    <div v-if="inspection"><!-- -->
        <h3>Edit: {{ inspection.object }}</h3>
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
                    <td><input  type="date"></td>
                </tr>
            </tbody>
        </table>       
        <div>
            <v-checkbox
                v-model="inspection.damage"
                label="Schade opnemen"                
            ></v-checkbox>
        </div> 
        <div v-if="inspection.damage">
            <v-text-field v-model="inspection.damageLocation" label="Locatie van de schade"  variant="outlined"></v-text-field>
            <!--<input v-model="inspection.damageLocation">-->
            <v-radio-group label="Nieuwe schade?" v-model="inspection.damageNew">
                <v-radio label="Ja" value="Ja"></v-radio>
                <v-radio label="Nee" value="Nee"></v-radio>
            </v-radio-group>
            <v-select
                label="Soort schade"
                :items="['moedwillig', 'slijtage', 'geweld', 'normaal gebruik', 'calamiteit', 'anders']"

            ></v-select>
            <!-- Hier een datumpicker toevoegen -->
            <v-radio-group label="Acute schade?">
                <v-radio label="Ja" value="Ja"></v-radio>
                <v-radio label="Nee" value="Nee"></v-radio>
            </v-radio-group>
            <v-textarea label="Omschrijving schade" variant="outlined"></v-textarea>

        </div>       
             
        <div>
            <v-checkbox
                v-model="onderhoud"
                label="(Achterstallig) onderhoud"
            ></v-checkbox>
        </div>        
            <table class="table table-striped" v-if="onderhoud">
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
        <div>
            <v-checkbox
                v-model="technisch"
                label="Technische installatie inspecteren"
            ></v-checkbox>
        </div>        
            <table class="table table-striped" v-if="technisch">
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

        <div>
            <v-checkbox
                v-model="modificatie"
                label="Modificatie inventariseren"
            ></v-checkbox>
        </div>        
            <table class="table table-striped" v-if="modificatie">
                <tbody>
                    <tr>
                        <td>Bestaande situatie en reeds gedocumenteerde modificaties.</td>
                        <td>{{ inspection.modificationCurrentSituation }}</td>
                    </tr>
                    <tr>
                        <td>Locatie aangetroffen modificatie</td>
                        <td>{{ inspection.modificationLocation }}</td>
                    </tr>
                    <tr>
                        <td>Uitgevoerd door</td>
                        <td>{{ inspection.modificationCarriedOutBy }}</td>
                    </tr>
                    <tr>
                        <td>Beschrijving modificatie</td>
                        <td>{{ inspection.modificationDescription }}</td>
                    </tr>
                    <tr>
                        <td>Te ondernemen actie</td>
                        <td>{{ inspection.modificationAction }}</td>
                    </tr>
                    <tr>
                        <td>Opmerkingen</td>
                        <td>{{ inspection.modificationComments }}</td>
                    </tr>
                </tbody>
            </table>
    </div>

      
</template>
<script>    
    import { mapState } from 'vuex';
    export default {
        data (){
            return {
                
                onderhoud: false,
                technisch: false,
                modificatie: false,
            }
        },
        name: "ApiVuexDetail",            
        created() {            
            this.id = this.$route.params.id;   
            console.log(this.id + 'geklikt')
        },
        computed: {
            inspection() {   
                return this.$store.getters.getInspection(this.id);
            },
            ...mapState({
                damage: state => state.obj.damage,
                damageLocation: state => state.obj.damageLocation,
                damageNew: state => state.obj.damageNew
            })
        },
        
    }

  /*damageLocation: {
                get () {
                return this.$store.state.obj.damageLocation
                },
                set (value) {
                this.$store.commit('updateInspections', value)
                }
            }*/  
</script>