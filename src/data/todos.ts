export interface Todo {
  title: string;
  notes: string;
  dateCreated: string;
  id: number;
}

const todos: Todo[] = [
  {
    title: 'TodoTitle1',
    notes: 'TodoNotes1',
    dateCreated: '09:32',
    id: 0
  },
  {
    title: 'TodoTitle2',
    notes: 'TodoNotes2',
    dateCreated: '06:12',
    id: 1
  },
  {
    title: 'TodoTitle3',
    notes: 'TodoNotes3',
    dateCreated: 'Last Week',
    id: 2
  }
];

export const getTodos = () => todos;

export const getTodo = (id: number) => todos.find(todo => todo.id === id);