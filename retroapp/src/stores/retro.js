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
      selectedTemplate: {},
      columns: [],
      participants: [],
      notes: [],
      creatorID: "",
      user: {},
      retroTitle: '',
  }),
  getters: {
//     doubleCount: (state) => state.count * 2,
  },
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
            return this.creator
        },
        
        async getRetros() {
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
      
      async getTemplates() {
        const findTemplates = await API.graphql({
          query: listTemplates,
        });
        this.templates = findTemplates.data.listTemplates.items
      },
      async getSelectedTemplate() {
        const findTemplate = await API.graphql({
          query: getTemplate,
          variables: { id: this.selectedTemplate.id }
          })
          this.columns = findTemplate.data.getTemplate.columns.items;         console.log()
        },
      
      async createRetro() {
        const { selectedTemplate } = this;
        const title = this.retroTitle;
        const retroTemplateId = this.selectedTemplate.id
        const retroCreatorId = this.creator.id
        if (!title) return;
        const retro = { title, retroTemplateId, retroCreatorId };
        const createdRetro = await API.graphql({
          query: createRetro,
          variables: { input: retro }
        });
        this.retro = createdRetro.data.createRetro;
        this.router.push(this.creator.username + '/retro/' + this.selectedTemplate.slug + '/' + this.retro.id + '/');
      },
  },
});
