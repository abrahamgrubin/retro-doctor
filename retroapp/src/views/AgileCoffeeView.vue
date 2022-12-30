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
        <ion-buttons slot="{start ,user, signOut }">
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
    <ion-content class="ion-padding">
      <ion-grid>
          <ion-row>
            <ion-col class="ion-text-center">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Topics</ion-card-title>
                  <ion-card-subtitle>What's on your mind?</ion-card-subtitle>
                </ion-card-header>
                <template #item="{ element, index }">
                  <div class="list-group-item">{{ element.name }} {{ index }}</div>
                </template>
                <ion-card-content>
                  <ion-list>
                    <draggable
                      class="list-group"
                      :list="list1"
                      group="people"
                      @change="log"
                      itemKey="name"
                    >
                    <template #item="{ element, index }">
                      <ion-item class="list-group-item">
                          <ion-thumbnail slot="start">
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                          </ion-thumbnail>
                          <ion-note><p>{{ element.name }} {{ index }}</p></ion-note>
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
                          <ion-note>{{ element.name }} {{ index }}</ion-note>
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
                    <draggable
                      class="list-group"
                      :list="list3"
                      group="people"
                      @change="log"
                      itemKey="name"
                    >
                      <template #item="{ element, index }">
                        <ion-item class="list-group-item">
                          <ion-thumbnail slot="start">
                          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                          </ion-thumbnail>
                          <ion-note>{{ element.name }} {{ index }}</ion-note>
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
                  <ion-card-title>Action Item</ion-card-title>
                  <ion-card-subtitle>Let's do something about it</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-list>
                    <draggable
                      class="list-group"
                      :list="list4"
                      group="people"
                      @change="log"
                      itemKey="name"
                    >
                      <template #item="{ element, index }">
                        <ion-item class="list-group-item">
                          <ion-thumbnail slot="start">
                          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                          </ion-thumbnail>
                          <ion-note>{{ element.name }} {{ index }}</ion-note>
                        </ion-item>
                      </template>
                    </draggable>
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

<script>
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCol, IonGrid, IonRow, IonList,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,  IonReorder, IonReorderGroup, IonMenu, IonMenuButton   } from '@ionic/vue';
  import { Authenticator,useAuthenticator } from '@aws-amplify/ui-vue';
  import { defineComponent } from 'vue';
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  
  import draggable from 'vuedraggable';
  const auth = useAuthenticator();
  export default defineComponent({
    name: 'AgileCoffeeView',
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
      list1: [
        { name: "this is a test of an idea of something that someone might have", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ],
      list3: [
        {
          name: "abie", id: 8
        },
        {
          name: "kayla", id:9
        },
        {
          name: "daisy", id: 10
        }
        ], 
      list4: [
        {name: "this is a note that is a note an is an note and stuff, how big should I make this note? Can I keep going and going and going?", id: 11},
        {name: "Rob", id: 12},
        {name:"Marcy", id: 13},
        {name: "Ken", id: 14}
        ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
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