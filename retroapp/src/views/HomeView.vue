<template>
  <authenticator></authenticator>
    <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Retro Doctor</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          Home
        </ion-item>
        <ion-item>
          My Retros
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Retro Doctor</ion-title>
        <ion-buttons  slot="end">
          <ion-chip>
            <ion-avatar>
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>
              {{this.auth.user.username}}
            </ion-label>
          </ion-chip>
          <ion-button fill="outline" shape="round" @click="auth.signOut">Sign Out</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  <ion-content class="ion-padding">
      <ion-grid>
          <ion-row>
              <ion-col>
                <ion-button id="open-modal">Create retro</ion-button>
            </ion-col>
          </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>

      <ion-list v-for="item in retros" :key="item.id">
            <ion-col>
            <ion-card>
    <ion-card-header>
      <ion-card-title>{{item.title}}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div>Created at {{item.createdAt}}</div>
      <div>Participants</div>
      <div>Template</div>
    </ion-card-content>
  </ion-card>
  </ion-col>
    </ion-list></ion-row>
    </ion-grid>
    
    <ion-modal ref="modal" trigger="open-modal">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="cancel()">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Create New Retro</ion-title>
          <ion-buttons slot="end">
            <ion-button :strong="true" @click="confirm()">Create</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-input ref="title" type="text" placeholder="Retro Name"></ion-input>

        </ion-item>
        <ion-item>
          <ion-select placeholder="Retro Template" ref="not_template">
            <ion-select-option value="this.template">{{this.template.name}}</ion-select-option>
          </ion-select>
         </ion-item>
      </ion-content>
    </ion-modal>
  </ion-content>
</ion-page>
</template>
<script lang='ts'>
  import { 
      IonSelect, IonSelectOption,
      IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar, 
        IonFab, 
        IonFabButton, 
        IonIcon, 
        IonCol, 
        IonGrid, 
        IonRow, 
        IonList,
        IonCard, 
        IonCardContent, 
        IonCardHeader, 
        IonCardSubtitle, 
        IonCardTitle,  
        IonReorder, 
        IonReorderGroup,
        IonMenu, 
        IonMenuButton,
        IonButtons,
        IonButton,
        IonModal,
        IonInput,
  } from '@ionic/vue';
  import { Authenticator,useAuthenticator } from '@aws-amplify/ui-vue';
  import { API } from 'aws-amplify';
  import { createRetro, createCreator, deleteCreator, createTemplate, createColumn } from '../graphql/mutations';
  import { getColumn, getTemplate, listRetros, getCreator,listCreators, listTemplates, listColumns } from '../graphql/queries';
  import { defineComponent, ref } from 'vue';
  import { OverlayEventDetail } from '@ionic/core/components';
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  import { useRetroStore } from '../stores/retro';
  const auth = useAuthenticator();
  export default defineComponent({
    name: 'HomeView',
    components: {
        IonButtons,
        IonButton,
        IonModal,
        IonInput,
        IonSelect, IonSelectOption,
      IonContent,
      IonFab,
      IonFabButton,
      IonHeader,
      IonIcon,
      IonPage,
      IonTitle,
      IonToolbar, 
      IonCol, 
      IonGrid, 
      IonRow, 
      IonList,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle, 
      IonMenu, 
      IonMenuButton,
    },
    setup() {
      const store = useRetroStore();
      return {
        router: useRouter(),
        add, 
        store,
      }
    },
    async created() {
      this.getOrCreateCreator();
      // this.createOrGetTemplates();
      // this.getTemplates()
     // this.createColumn()
      this.getTemplate();
    },
    data() {
        return {
          auth: auth,
          title: '',
          retros: [],
          creator: {},
          template: '',
          createdRetroId: ''
        }
      },
      methods: {
            async getRetros(userid) {
                let filter = { 
                  retroCreatorId: {
                    eq: userid
                  }
                };
                const retros = await API.graphql({
                  query: listRetros,
                  variables: { filter: filter}
                });
              this.retros = retros.data.listRetros.items
        },
        signout(){
          return this.auth.signout()
        },
        async createCreator(){
            const fetchedCreator = this.getCreator();
            const username = this.auth.user.username
            const accountID = this.auth.user.attributes.email
            const user = { username, accountID } 
            const creator = await API.graphql({
                query: createCreator,
                variables: { input: user }
            });
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
        async deleteCreator(){
          const creator = this.creators[0]
          const deletedCreators = 
          await API.graphql({
                  query: deleteCreator,
                  variables: { input: creator }
                });
          
        },
        async getCreators() {
          let filter = { username: {
            eq: this.auth.user.username 
          }
          }
          const creators = await API.graphql({
            query: listCreators,
            variables: {filter: filter}
          });
          this.creators = creator.data.items
        },
            async createRetro() {
                const { title, template } = this;
                const retroTemplateId = this.template.id
                const retroCreatorId = this.creator.id
                if (!title) return;
                const retro = { title, retroTemplateId, retroCreatorId };
                const createdRetro = await API.graphql({
                  query: createRetro,
                  variables: { input: retro }
                });
                debugger;
                this.$router.push(this.auth.user.username + '/retro/' + createdRetro.data.createRetro.id + '/' + this.template.slug + '/');
              },
            async createCreator() {
                const username = this.auth.user.username
                const accountID = this.auth.user.attributes.email;
                const creator = { username, accountID };
                await API.graphql({
                  query: createCreator,
                  variables: { input: creator }
                });
              },
           createOrGetTemplates(){
             const agileCoffee = { name: 'Agile Coffee', slug: 'agile_coffee' }
             const custom = { name: 'Custom', slug: 'custom' }
             const startStopContinue = { name: 'Start Stop Continue', slug: 'start_stop_continue' }
             // this.createTemplate(startStopContinue)
           },
           async listTemplates() {
             const templates = await API.graphql({
                query: listTemplates
             });
             console.log(templates)
           },
           async createColumn() {
            const column1 = { templateColumnsId: "8c035644-a5a4-4676-93cb-1d6329dc1261", title: 'Topics', subtitle: 'What topics would you like to discuss?' };
            const column2 = { templateColumnsId: "8c035644-a5a4-4676-93cb-1d6329dc1261", title: 'Discussing',subtitle: 'What are we discussing?' };
            const column3 = { templateColumnsId: "8c035644-a5a4-4676-93cb-1d6329dc1261", title: 'Discussed', subtitle: 'What did we discuss?' };
            const column4 = { templateColumnsId: "8c035644-a5a4-4676-93cb-1d6329dc1261", title: 'Action Items', subtitle: 'What will we do about it?' };
                // const newColumn1 = await API.graphql({
                //   query: createColumn,
                //   variables: { input: column1 }
                // });
                // const newColumn2 = await API.graphql({
                //   query: createColumn,
                //   variables: { input: column2 }
                // });
                // const newColumn3 = await API.graphql({
                //   query: createColumn,
                //   variables: { input: column3 }
                // });
                // const newColumn4 = await API.graphql({
                //   query: createColumn,
                //   variables: { input: column4 }
                // });
              console.log(newColumn1, newColumn2, newColumn3, newColumn4);
           },
           async getColumns() {
              const columns = await API.graphql({
                query: listColumns
             });
             console.log(columns);
           },
           async getTemplate(){ 
             const id = "8c035644-a5a4-4676-93cb-1d6329dc1261";
             const template = await API.graphql({
                query: getTemplate,
                variables: { id: id }
              });
              this.template = template.data.getTemplate;
           },
           async getTemplates() {
            const templates = await API.graphql({
                query: listTemplates
              });
              console.log(templates);
           },
           async createTemplate(template){
             const aTemplate= await API.graphql({
                  query: createTemplate,
                  variables: { input: template }
                });
              console.log(aTemplate);
           },
          cancel() {
            this.$refs.modal.$el.dismiss(null, 'cancel');
          },
          confirm() {
            const title = this.$refs.title.$el.value;
            const template = this.$refs.not_template.$el.value;
            this.$refs.modal.$el.dismiss(title, 'confirm');
            this.title = title
            //this.template= template
            this.createRetro();
            // add in the route below
          },
          onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
            if (ev.detail.role === 'confirm') {
              this.message = `Hello, ${ev.detail.data}!`;
            }
          }
      },
      
  })
</script>
