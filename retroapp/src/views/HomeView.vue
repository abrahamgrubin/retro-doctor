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
                          <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable
        class="list-group"
        :list="list1"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item">{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
    </div>


    <!--<rawDisplayer class="col-3" :value="list1" title="List 1" />-->

    <!--<rawDisplayer class="col-3" :value="list2" title="List 2" />-->
  </div>
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
                            <draggable
        class="list-group"
        :list="list2"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <ion-item class="list-group-item">
     
            <ion-thumbnail slot="start">
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                      </ion-thumbnail>
                      <ion-label>{{ element.name }} {{ index }}</ion-label>
          </ion-item>
        </template>
      </draggable>
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
  
  import draggable from 'vuedraggable';

  export default defineComponent({
    name: 'Home',
    display: "Two Lists",
    order: 1,
    components: {
      draggable,
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
    },
      data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
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