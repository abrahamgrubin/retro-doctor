<template>
    <ion-col class="ion-text-center">
      <ion-title><Notes /></ion-title>
      
    </ion-col>
</template>
              <!--<ion-card>-->
              <!--  <ion-card-header>-->
              <!--    <ion-card-title>{{ this.retrodata.title }}</ion-card-title>-->
              <!--    <ion-card-subtitle>{{ this.retrodata.subtitle }}</ion-card-subtitle>-->
              <!--  </ion-card-header>-->
              <!--  <template #item="{ element, index }">-->
              <!--    <div class="list-group-item">{{ element.name }} {{ index }}</div>-->
              <!--  </template>-->
              <!--  <ion-card-content>-->
              <!--    <ion-list>-->
              <!--      <draggable-->
              <!--        class="list-group"-->
              <!--        :list="list1"-->
              <!--        group="people"-->
              <!--        @change="log"-->
              <!--        itemKey="name"-->
              <!--      >-->
              <!--      <template #item="{ element, index }">-->
              <!--        <ion-item class="list-group-item">-->
              <!--            <ion-thumbnail slot="start">-->
              <!--              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />-->
              <!--            </ion-thumbnail>-->
              <!--            <ion-note><p>{{ element.name }} {{ index }}</p></ion-note>-->
              <!--        </ion-item>-->
              <!--      </template>-->
              <!--      </draggable>-->
              <!--    </ion-list>-->
              <!--  </ion-card-content>-->
              <!--</ion-card>-->
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
    display: "Two Lists",
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
        console.log(Notes)
    }
  }
  });
</script>