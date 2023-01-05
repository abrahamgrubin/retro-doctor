import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { API } from 'aws-amplify';
import { getColumn, getTemplate, listRetros, getCreator,listCreators, listTemplates, listColumns } from '../graphql/queries';
export const useRetroStore = defineStore("retro", () => {
    state: () => ({
        retros: [],
        templates: [],
        creator: {},
    }),
    getters: {
        getRetros(state){
          return state.retros
        },
        getTemplates(state) {
            return state.templates
        },
        getCreator(state){
            return state.creator
        }
    },
    actions: {
        async getRetros() {
                let filter = { retroCreatorId: {
                  eq: this.creator.id
                } 
            }
                const retros = await API.graphql({
                query: listRetros,
                variables: { filter: filter}
            });
            this.retros = retros.data.listRetros.items
        },
        async getOrCreateCreator(){
          let filter = {
            username: {
            eq: this.auth.user.username
          }}
          const creator = await API.graphql({
                query: listCreators,
                variables: { filter: filter}
              })
              if (creator.data.listCreators.items.length > 0) {
                this.creator = creator.data.listCreators.items[0]
                this.getRetros(this.creator.id);
              } else {
                this.createCreator();
              }
        },
    },
});
