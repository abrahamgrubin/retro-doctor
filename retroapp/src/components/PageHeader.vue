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
        <ion-buttons slot="end">
          <ion-chip>
            <ion-avatar>
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>
              {{this.auth.user.username}}
            </ion-label>
          </ion-chip>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
</ion-page>
</template>
<script>
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCol, IonGrid, IonRow, IonList,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,  IonReorder, IonReorderGroup, IonMenu, IonMenuButton   } from '@ionic/vue';
  import { Authenticator,useAuthenticator } from '@aws-amplify/ui-vue';
  import { defineComponent } from 'vue';
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  const auth = useAuthenticator();
  export default defineComponent({
    name: 'PageHeader',
    components: {
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
    data() {
        return {
          auth: auth,
        }
      }
  })
</script>
