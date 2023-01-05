import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { API } from 'aws-amplify';
import { getColumn, getTemplate, listRetros, getCreator,listCreators, listTemplates, listColumns } from '../graphql/queries';
export const useRetroStore = defineStore("retro", () => {
    // ref is setting state properties
    const retros = ref([]);
    const templates = ref([]);
    const creator = ref({});
    const creatorID = '';
    
    //computed are getters

    //function are actions
     async function getOrCreateCreator() {
          let filter = {
            username: {
            eq: creatorID
          }}
          const creator = await API.graphql({
                query: listCreators,
                variables: { filter: filter}
              })
              if (creator.data.listCreators.items.length > 0) {
                this.creator = creator.data.listCreators.items[0]
                this.getRetros(creatorID);
              } else {
                this.createCreator();
              }
        };
    return { retros, templates, creator }
    // getters: {
    //     getRetros(state){
    //       return state.retros
    //     },
    //     getTemplates(state) {
    //         return state.templates
    //     },
    //     getCreator(state){
    //         return state.creator
    //     }
    // },
    // actions: {
    //     async listRetros() {
    //             let filter = { retroCreatorId: {
    //               eq: this.creator.id
    //             } 
    //         }
    //             const retros = await API.graphql({
    //             query: listRetros,
    //             variables: { filter: filter}
    //         });
    //         this.retros = retros.data.listRetros.items
    //     },

});
