<template>
      <h3>Nested draggable</h3>
  <ion-card-content>
    <ion-list>
      <nested-draggable :tasks="list" />
    </ion-list>
        
  </ion-card-content>
  <rawDisplayer :value="list" title="List" />



</template>

<script>
import nestedDraggable from "./NestedDraggable.vue";
import {IonCardContent, IonList} from '@ionic/vue';
export default {
  name: "nested-example",
  display: "Nested",
  order: 15,
  components: {
    nestedDraggable, IonCardContent,IonList
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
        {
          name: "task 3",
          tasks: [
            {
              name: "task 4",
            }
          ]
        },
        {
          name: "task 5",
          tasks: []
        }
      ]
    };
  } 
};
</script>
<style scoped></style>