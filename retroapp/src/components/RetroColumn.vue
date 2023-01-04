<template>
    <ion-col class="ion-text-center">
      <ion-card>
        <ion-card-header>
          <ion-card-title>{{ this.retrodata.title }}</ion-card-title>
          <ion-card-subtitle>{{ this.retrodata.subtitle }}</ion-card-subtitle>
        </ion-card-header>
        <Notes />
      </ion-card>      
    </ion-col>
</template>

<script>
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCol, IonGrid, IonRow, IonList,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,  IonReorder, IonReorderGroup, IonMenu, IonMenuButton   } from '@ionic/vue';
  import { Authenticator,useAuthenticator } from '@aws-amplify/ui-vue';
  import { defineComponent, defineProps } from 'vue';
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  import Notes from './Notes.vue';
  import draggable from 'vuedraggable';
  defineProps({
      retrodata: Object
  })
export default defineComponent({
    name: 'RetroColumn',
    display: "Retro Columns",
    props: ['retrodata'],
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
      Notes
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
      list1: [
        { name: "this is a test of an idea of something that someone might have", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ]
          
    }
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    getTemplate() {
        console.log(this.$props.retrodata);
    }
  }
  });
</script>