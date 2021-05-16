<template>
  <ion-item
    v-if="todo"
    :routerLink="'/todo/' + todo.id"
    :detail="false"
    class="list-item"
  >
    <div
      slot="start"
      :class="
        todo.dateDue.getDueStatus() == 'NotDueYet'
          ? 'dot dot-not-due-yet'
          : todo.dateDue.getDueStatus() == 'DueToday'
          ? 'dot dot-due-today'
          : 'dot dot-overdue'
      "
    ></div>
    <ion-label class="ion-text-wrap">
      <h2>
        {{ todo.title }}
        <span class="date-created">
          <ion-note
            >Created: {{ todo.dateCreated.getRepresentation() }}</ion-note
          >
          <ion-icon
            :icon="chevronForward"
            size="small"
            v-if="isIos()"
          ></ion-icon>
        </span>
      </h2>
      <h3>{{ todo.notes }}</h3>
      <p>Importance: {{ todo.importance }}</p>
      <ion-button color="warning" v-on:click="updateTodo;">Update</ion-button>
      <ion-button color="danger" v-on:click="deleteTodo;">Delete</ion-button>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonIcon, IonItem, IonLabel, IonNote } from "@ionic/vue";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";
import { getTodos, updateTodo, deleteTodo } from "@/data/todos";

export default defineComponent({
  name: "TodoListItem",
  components: {
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
  },
  props: {
    todo: Object,
  },
  methods: {
    isIos: () => {
      const win = window as any;
      return win && win.Ionic && win.Ionic.mode === "ios";
    },
  },
  data() {
    return { chevronForward };
  },
});
</script>

<style scoped>
.list-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  cursor: pointer;
}

.list-item ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

.list-item h2 {
  font-weight: 600;
  margin: 0;
}

.list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}

.list-item .date-created {
  float: right;
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}

.list-item .dot {
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  align-self: start;
  margin: 16px 10px 16px 16px;
}

.list-item .dot-not-due-yet {
  background: var(--ion-color-success);
}

.list-item .dot-due-today {
  background: var(--ion-color-warning);
}

.list-item .dot-overdue {
  background: var(--ion-color-danger);
}

ion-button {
  align-items: center;
}
</style>
