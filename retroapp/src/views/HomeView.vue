<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Retro Doctor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
          <ion-row>
            <ion-col class="ion-text-center">
<ion-card>
  <ion-card-header>
    <ion-card-title>Topics</ion-card-title>
    <ion-card-subtitle>What's on your mind?</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>
    <ion-list>
      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item lines="none">
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>
    </ion-list>
  </ion-card-content>
</ion-card>
            </ion-col>
            <ion-col class="ion-text-center">
 <ion-card>
  <ion-card-header>
    <ion-card-title>Discussing</ion-card-title>
    <ion-card-subtitle>Everyone Contribute!</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>
    <ion-list>
      <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder($event)">
      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item lines="none">
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
       </ion-reorder-group>
    </ion-list>
  </ion-card-content>
  </ion-card>
            </ion-col>
            <ion-col class="ion-text-center">
<ion-card>
  <ion-card-header>
    <ion-card-title>Discussed</ion-card-title>
    <ion-card-subtitle>What'd we talk about?</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>
    <ion-list>
      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item lines="none">
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>
    </ion-list>
  </ion-card-content>
  </ion-card>
            </ion-col>
            <ion-col class="ion-text-center">
<ion-card>
  <ion-card-header>
    <ion-card-title>Action Items</ion-card-title>
    <ion-card-subtitle>Let's do something about it</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>
    <ion-list>
      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item lines="none">
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>
    </ion-list>
  </ion-card-content>
  </ion-card>
            </ion-col>
          </ion-row>
      </ion-grid>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/new')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCol, IonGrid, IonRow, IonList,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,  IonReorder, IonReorderGroup   } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'Home',
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
      IonReorder, 
      IonReorderGroup
    },
    setup() {
      const handleReorder = (event: CustomEvent) => {
          event.detail.complete();
      };
      return {
        router: useRouter(),
        add, 
        handleReorder,
      }
    }
  });
</script>

<style scoped>
  #container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>