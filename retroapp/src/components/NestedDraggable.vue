<template>
  <draggable
    class="dragArea"
    tag="ul"
    :list="tasks"
    :group="{ name: 'g1' }"
    item-key="name"
  >
    <template #item="{ element }">
      <ion-item>
        <ion-thumbnail slot="start">
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>{{ element.name }}</ion-label>
        <nested-draggable :tasks="element.tasks" />
      </ion-item>
    </template>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import {IonCardContent, IonList, IonItem, IonThumbnail, IonLabel} from '@ionic/vue';
export default {
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  components: {
    draggable, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel
  },
  name: "nested-draggable"
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  min-width: 50%;
  border: solid;
  display: block;
}
</style>