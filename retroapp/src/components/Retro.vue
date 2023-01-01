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
      <ion-grid v-for='column in columndata'>
        <ion-row>
            <RetroColumn :retrodata='column'/>
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
  import { defineComponent, defineProps } from 'vue';
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  import RetroColumn from './RetroColumn.vue';
  import draggable from 'vuedraggable';
  const auth = useAuthenticator();
  defineProps({
    template: String
    });
  export default defineComponent({
    name: 'Retro',
    display: "Two Lists",
    props: ['template'],
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
      RetroColumn
    },
    setup() {
      return {
        router: useRouter(),
        add, 
      }
    },
    created(){
      this.getTemplate()
    },
      data() {
    return {
      auth: auth,
      columndata: {},
      templates: [
          { name: 'Custom', columns:[], slug: 'custom' },
          { name: 'Agile Coffee', columns: [
            { title: 'Topics', subtitle: 'placeholder' },
            { title: 'Discussing',subtitle: 'placeholder' },
            { title: 'Discussed', subtitle: 'placeholder' },
            { title: 'Action Items', subtitle: 'placeholder' }
            ], slug: 'agile_coffee'},
          { name: 'Start Stop Contine', columns: ['Start', 'Stop', 'Continue', 'Action Items'], slug:'start_stop_continue'},
      ],
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
    },
    getTemplate() {
        const template = this.templates.filter(template => template.slug == this.$route.params.template)
        this.columndata = template[0].columns;
        console.log(template[0].columns);
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