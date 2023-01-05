<template>
      <h3>Nested draggable</h3>
  <ion-card-content>
    <ion-list>
      <nested-draggable :tasks="list" />
    </ion-list>
        
  </ion-card-content>



</template>

<script>
import nestedDraggable from "./NestedDraggable.vue";
import {IonCardContent, IonList} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { API } from 'aws-amplify';
import { getRetro } from '../graphql/queries';
export default {
  name: "nested-example",
  display: "Nested",
  order: 15,
  components: {
    nestedDraggable, IonCardContent,IonList
  },
  setup() {
    return {
      router: useRouter()
    }
  },
  methods: {
    async getNotes() {
      const id = this.$route.params.retroid
      const retro = await API.graphql({
        query: getRetro,
        variables: { id: id}
      });
     // console.log(retro.data.getRetro.notes);
    }
  },
  async created() {
    this.getNotes();
  },
  data() {
   return {
      list: [
                {
          name: "THis is a note",
          tasks: [
            {
              name: "task 2",
              tasks: []
            }
          ]
        },
      ]
    };
  } 
};
</script>
<style scoped></style>