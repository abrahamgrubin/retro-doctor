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
          <!--<ion-button fill="outline" shape="round" @click="auth.signOut">Sign Out</ion-button>-->
          <ion-button fill="outline" shape="round" @click="getOrCreateCreator">Get creator</ion-button>
          <!--<ion-button fill="outline" shape="round" @click="deleteCreator">delete creator</ion-button>-->
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  <ion-content class="ion-padding">
      <ion-grid>
          <ion-row>
              <ion-col>
                <ion-button id="open-modal">Create retro</ion-button>
            </ion-col>
            <!--<ion-button @click="listCreators">create Creator</ion-button>-->
            <!--<ion-col>-->
            <!--    <h1>{{this.auth.user.username}}'s Retros</h1>-->
            <!--</ion-col>-->
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
            <ion-select placeholder="Retro Template" ref="template">
            <ion-select-option value="Custom">Custom</ion-select-option>
            <ion-select-option value="Agile Coffee">Agile Coffee</ion-select-option>
            <ion-select-option value="Start Stop Continue">Start Stop Continue</ion-select-option>
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
  import { createRetro, createCreator, deleteCreator } from '../graphql/mutations';
    import { listRetros, getCreator,listCreators } from '../graphql/queries';
  import { defineComponent, ref } from 'vue';
    import { OverlayEventDetail } from '@ionic/core/components';
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
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
      return {
        router: useRouter(),
        add, 
      }
    },
    async created() {
      this.getOrCreateCreator();
      this.getRetros();
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
            async getRetros() {
                const retros = await API.graphql({
                query: listRetros
            });
            this.retros = retros.data.listRetros.items;
            console.log(this.retros)
            // refactor this to only include creator's retros
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
            console.log(creator) 
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
                this.creator = creator.data.listCreators.items[4]
                // debugger;
                // this.retros = this.creator.retros
                console.log(this.creator)
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
                const { title,template } = this;
                const retroCreatorId = this.creator.id
                if (!title) return;
                const retro = { title, template, retroCreatorId };
                const createdRetro = await API.graphql({
                  query: createRetro,
                  variables: { input: retro }
                });
                console.log(createdRetro);
                // this.title = '';
                //this.updateRetro();
              },
            async createCreator() {
                const username = this.auth.user.username
                const creator = { username, accoutID };
                await API.graphql({
                  query: createCreator,
                  variables: { input: creator }
                });
              },
          cancel() {
            this.$refs.modal.$el.dismiss(null, 'cancel');
          },
          confirm() {
            const title = this.$refs.title.$el.value;
            const template = this.$refs.template.$el.value;
            this.$refs.modal.$el.dismiss(title, 'confirm');
            this.title = title
            this.template= template
            this.createRetro();
            
            //this.$router.push('this.auth.user.username/{{this.createdRetroID}}/{{this.template}}');
          },
          onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
            if (ev.detail.role === 'confirm') {
              this.message = `Hello, ${ev.detail.data}!`;
            }
          }
      },
      
  })
</script>
