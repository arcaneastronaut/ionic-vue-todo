<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Todos</ion-title>
        <ion-button slot="end" color="success" v-on:click="addTodo;"
          >Add Todo</ion-button
        >
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Todos</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import TodoListItem from "@/components/TodoListItem.vue";
import { defineComponent } from "vue";
import { getTodos, addTodo } from "@/data/todos";

export default defineComponent({
  name: "Home",
  data() {
    return {
      todos: getTodos(),
    };
  },
  methods: {
    refresh: (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    },
  },
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    TodoListItem,
  },
});
</script>

<style scoped>
ion-button {
  align-items: center;
  margin-right: 20px;
}
</style>
