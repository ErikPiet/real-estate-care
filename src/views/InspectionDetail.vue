<template>
    <v-btn @click="$router.push('../CompletedList')" density="compact" icon="mdi-arrow-left-bold-circle-outline"></v-btn> 
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
                    <td>{{ inspection.dueDate }}</td>
                </tr>
            </tbody>
        </table>   
        <div>            
            <v-switch
                v-model="inspection.status"
                hide-details
                true-value="Completed"
                false-value="Scheduled"
                color="teal-lighten-1"
                inset
                :label="`Status: ${inspection.status.toString()}`"
            ></v-switch>
        </div>    
        <div>
            <v-checkbox
                v-model="inspection.damage"
                label="Schade opnemen"                
            ></v-checkbox>
            <div v-if="inspection.damage">
                <v-text-field v-model="inspection.dLocation" label="Locatie van de schade"  variant="outlined"></v-text-field>
                <v-radio-group label="Nieuwe schade?" v-model="inspection.dNew">
                    <v-radio label="Ja" value="true"></v-radio>
                    <v-radio label="Nee" value="false"></v-radio>
                </v-radio-group>
                <v-select
                    v-model="inspection.dKind"
                    label="Soort schade"
                    :items="['moedwillig', 'slijtage', 'geweld', 'normaal gebruik', 'calamiteit', 'anders']"
                ></v-select>
                <v-text-field label="YYYY-MM-DD" variant="outlined" v-model="inspection.dDate"></v-text-field>
                <v-radio-group label="Acute schade?" v-model="inspection.dAcute">
                    <v-radio label="Ja" value="Ja"></v-radio>
                    <v-radio label="Nee" value="Nee"></v-radio>
                </v-radio-group>
                <v-textarea label="Omschrijving schade" variant="outlined" v-model="inspection.dDescription"></v-textarea>
            </div>  
        </div> 
             
             
        <div>
            <v-checkbox
                v-model="inspection.maintenance"
                label="(Achterstallig) onderhoud"
            ></v-checkbox>
            <div v-if="inspection.maintenance">
                <v-text-field v-model="inspection.mLocation" label="Locatie"  variant="outlined"></v-text-field>
                <v-select
                    v-model="inspection.mKind"
                    label="Soort onderhoud"
                    :items="['schilderwerk', 'houtrot', 'elektra', 'beveiliging']"
                ></v-select>
                <v-radio-group label="Acute actie vereist?" v-model="inspection.mAcute">
                    <v-radio label="Ja" value="Ja"></v-radio>
                    <v-radio label="Nee" value="Nee"></v-radio>
                </v-radio-group>
                <v-select
                    v-model="inspection.mCost"
                    label="Kostenindicatie"
                    :items="['0-500', '500-1500', '1500 +']"
                ></v-select>
            </div>
        </div>        
            
        <div>
            <v-checkbox
                v-model="inspection.tech"
                label="Technische installatie inspecteren"
            ></v-checkbox>
            <div v-if="inspection.tech">
                <v-text-field v-model="inspection.tLocation" label="Locatie"  variant="outlined"></v-text-field>
                <v-select
                    v-model="inspection.tKind"
                    label="Soort installatie"
                    :items="['koeling', 'verwarming', 'luchtverversing', 'elektra', 'beveiliging']"
                ></v-select>
                <v-text-field v-model="inspection.tReportErrors" label="Gemelde storingen"  variant="outlined"></v-text-field>
                <v-text-field v-model="inspection.tTestproc" label="Testprocedure"  variant="outlined"></v-text-field>
                <v-radio-group label="Goed gekeurd?" v-model="inspection.tApproved">
                    <v-radio label="Ja" value="Ja"></v-radio>
                    <v-radio label="Nee" value="Nee"></v-radio>
                </v-radio-group>
                <v-textarea label="Opmerkingen" variant="outlined" v-model="inspection.tDescription"></v-textarea>
            </div>
        </div>   
        <div>
            <v-checkbox
                v-model="inspection.modification"
                label="Modificatie inventariseren"
            ></v-checkbox>
            <div v-if="inspection.modification">
                <v-text-field v-model="inspection.modCurrentSituation" label="Bestaande situatie en reeds gedocumenteerde modificaties"  variant="outlined"></v-text-field>
                <v-text-field v-model="inspection.modLocation" label="Locatie aangetroffen modificatie"  variant="outlined"></v-text-field>
                <v-select
                    v-model="inspection.modCarriedOutBy"
                    label="Uitgevoerd door"
                    :items="['huurder', 'aannemer', 'onbekend']"
                ></v-select>
                <v-text-field v-model="inspection.modDescription" label="Beschrijving modificatie"  variant="outlined"></v-text-field>
                <v-select
                    v-model="inspection.modAction"
                    label="Te ondernemen actie"
                    :items="['accepteren', 'laten keuren', 'laten verwijderen', 'laten aanpassen en keuren']"
                ></v-select>
                <v-textarea label="Opmerkingen" variant="outlined" v-model="inspection.modComments"></v-textarea>
            </div>
        </div>
    </div>

      
</template>
<script>    
    import { mapState } from 'vuex';    
    export default {               
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
                status: state => state.obj.status,
                damage: state => state.obj.damage,
                dLocation: state => state.obj.dLocation,
                dNew: state => state.obj.dNew,
                dKind: state => state.obj.dKind,
                dDate: state => state.obj.dDate,
                dAcute: state => state.obj.dAcute,
                dDescription: state => state.obj.dDescription,
            })
        },
        
    }
  
</script>