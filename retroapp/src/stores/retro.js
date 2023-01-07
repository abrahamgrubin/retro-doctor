import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { API } from 'aws-amplify';
import { createRetro, createCreator, deleteCreator, createTemplate, createColumn } from '../graphql/mutations';
import { getColumn, getTemplate, listRetros, getCreator,listCreators, listTemplates, listColumns } from '../graphql/queries';
export const useRetroStore = defineStore("retro", {
  state: () => ({ 
      creator: {},
      retros: [],
      templates: [],
      columns: [],
      participants: [],
      notes: [],
      creatorID: "",
      user: {},
  }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
  actions: {
    async getOrCreateCreator() {
        let filter = {
            username: {
            eq: this.user.username
          }}
          const findCreator = await API.graphql({
                query: listCreators,
                variables: { filter: filter}
              })
        if (findCreator.data.listCreators.items.length > 0) {
            this.creator = findCreator.data.listCreators.items[0]
            this.getRetros(this.creator.id);
        } else {
            this.createCreator();
        };
    },
      async createCreator() {
            const username = user.username
            const accountID = user.attributes.email
            const user = { username, accountID } 
            const createdCreator = await API.graphql({
                query: createCreator,
                variables: { input: user }
            });
            this.creator = createdCreator.data.createCreator
            console.log(createdCreator)
            return this.creator
        },
        
        async getRetros() {
            debugger;
            let filter = { 
              retroCreatorId: {
                eq: this.creator.id
              }
            };
            const findRetros = await API.graphql({
              query: listRetros,
              variables: { filter: filter}
            });
          this.retros = findRetros.data.listRetros.items
        },
  },
});
// export const useRetroStore = defineStore("retro", () => {
//     // ref is setting state properties
//     const creator = ref({});
//     const retros = ref([]);
//     const templates = ref([]);
//     const columns = ref([]);
//     const participants = ref([]);
//     const notes = ref([]);
//     const creatorID = ref('');
//     const user = ref({});
    
//     //computed are getters

//     //function are actions

//     return { retros, templates, creator }
//     // getters: {
//     //     getRetros(state){
//     //       return state.retros
//     //     },
//     //     getTemplates(state) {
//     //         return state.templates
//     //     },
//     //     getCreator(state){
//     //         return state.creator
//     //     }
//     // },
//     // actions: {
//     //     async listRetros() {
//     //             let filter = { retroCreatorId: {
//     //               eq: this.creator.id
//     //             } 
//     //         }
//     //             const retros = await API.graphql({
//     //             query: listRetros,
//     //             variables: { filter: filter}
//     //         });
//     //         this.retros = retros.data.listRetros.items
//     //     },

// });
