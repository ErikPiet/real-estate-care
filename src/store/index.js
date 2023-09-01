import Vuex from 'vuex';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/ErikPiet/real-estate-care',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default new Vuex.Store({
    state: {
        loadingStatus: 'notloading',
        inspections: [],
        errors: []
    },
    mutations: {
        SET_LOADING_STATUS(state, payload) {
            state.loadingStatus = payload;
        },
        SET_INSPECTIONS(state, payload){
            state.inspections = payload;
        },
        CLEAR_INSPECTIONS(state) {
            state.inspections = []
        },
        ADD_ERROR(state, payload) {
            state.errors = [...state.errors, payload];
        },
    },
    actions: {
        fetchInspections(context) {
            //1. set loading status
            context.commit('SET_LOADING_STATUS', 'loading');
            //2. http-request
            apiClient.get('/inspections')           
                .then(result => {
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_INSPECTIONS', result.data);
                })
                .catch(err => {
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_INSPECTIONS', []);
                    context.commit('ADD_ERROR', err);
                })
        },
        clearInspections(context) {
            context.commit('CLEAR_INSPECTIONS')
        }
    },
    getters: {
        //alleen gevraagde inspectie tonen vanuit de store
        getInspection: (state) => (id) => {
            return state.inspections.find(c => c.id == id)            
        } 
               
    },

})