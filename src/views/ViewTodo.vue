<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button
            :text="getBackButtonText()"
            default-href="/"
          ></ion-back-button>
        </ion-buttons>
        <ion-button slot="end" color="warning" v-on:click="updateTodo;"
          >Update</ion-button
        >
        <ion-button slot="end" color="danger" v-on:click="deleteTodo;"
          >Delete</ion-button
        >
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="todo">
      <ion-item>
        <ion-label class="ion-text-wrap">
          <h1>
            {{ todo.title }}
            <span class="date-created">
              <ion-note
                >Created: {{ todo.dateCreated.getRepresentation() }}</ion-note
              >
            </span>
          </h1>
          <h3>
            <ion-note>Due: {{ todo.dateDue.getRepresentation() }}</ion-note>
          </h3>
        </ion-label>
      </ion-item>

      <div class="ion-padding">
        <ion-item>
          <p>{{ todo.notes }}</p>
        </ion-item>
        <ion-item>
          <p>Importance: {{ todo.importance }}</p>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { getTodo, updateTodo, deleteTodo } from "../data/todos";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      getBackButtonText: () => {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === "ios" ? "Todos" : "";
      },
    };
  },
  setup() {
    const route = useRoute();
    const todo = getTodo(route.params.id as string);

    return { todo };
  },
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar,
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date-created {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}

ion-button {
  align-items: center;
  margin-right: 20px;
}
</style>
