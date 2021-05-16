export enum Importance {
  Trivial = "Trivial",
  Low = "Low",
  Normal = "Normal",
  High = "High",
  Critical = "Critical"
}

export interface Todo {
  title: string;
  notes: string;
  dateCreated: TodoDate;
  dateDue: TodoDate;
  importance: Importance;
  id: string;
}

export class TodoDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getRepresentation() {
    // Date format: ISO 8601, YYYY-MM-DD
    const YEAR_REPRESENTATION = this.year.toString();
    const MONTH_REPRESENTATION = this.month < 10 ? '0' + this.month.toString() : this.month.toString();
    const DAY_REPRESENTATION = this.day < 10 ? '0' + this.day.toString() : this.day.toString();
    const SEPARATOR = '-';
    return YEAR_REPRESENTATION + SEPARATOR + MONTH_REPRESENTATION + SEPARATOR + DAY_REPRESENTATION;
  }

  getDueStatus(): string {
    // TODO: Figure out how to return DueStatus enum and use it in TodoListItem.vue, "stringly typed" APIs suck!
    // TODO: Improve method of comparison - maybe isolate year, month, and day comparisons
    const CURRENT_TIME = new Date();
    const CURRENT_DATE = new Date(CURRENT_TIME.getFullYear() + '-' + (CURRENT_TIME.getMonth() + 1) + '-' + CURRENT_TIME.getDate());
    const DUE_DATE = new Date(this.year + '-' + this.month + '-' + this.day);
    if (CURRENT_DATE < DUE_DATE) {
      return 'NotDueYet';
    } else if (CURRENT_DATE > DUE_DATE) {
      return 'Overdue';
    } else {
      return 'DueToday';
    }
  }

  static getCurrentDate(): TodoDate {
    const CURRENT_TIME = new Date();
    const CURRENT_DATE = new TodoDate(CURRENT_TIME.getFullYear(), (CURRENT_TIME.getMonth() + 1), CURRENT_TIME.getDate());
    return CURRENT_DATE;
  }
}

function getRandomUid(): string {
  return Math.random().toString().replace("0.", "");
}

const todos: Todo[] = [
  {
    title: 'TodoTitle1',
    notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    dateCreated: new TodoDate(2021, 5, 16),
    dateDue: new TodoDate(2022, 5, 20),
    importance: Importance.Trivial,
    id: '8362922893451246'
  },
  {
    title: 'TodoTitle2',
    notes: 'Nulla feugiat sem eget auctor pretium.',
    dateCreated: TodoDate.getCurrentDate(),
    dateDue: TodoDate.getCurrentDate(),
    importance: Importance.Normal,
    id: '5153984212833158'
  },
  {
    title: 'TodoTitle3',
    notes: 'Nam congue urna id hendrerit pellentesque.',
    dateCreated: new TodoDate(2021, 5, 16),
    dateDue: new TodoDate(2020, 5, 5),
    importance: Importance.Critical,
    id: '5717127471562551'
  },
];

export const getTodos = () => todos;

export const getTodo = (id: string) => todos.find(todo => todo.id === id);

// TODO: Add user input to add TODO
export const addTodo = () => {
  todos.push({
    title: 'TodoTitle',
    notes: '-',
    dateCreated: TodoDate.getCurrentDate(),
    dateDue: new TodoDate(2021, Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (25 - 1) + 1)),
    importance: Importance.Normal,
    id: getRandomUid()
  });
}

// TODO: UPDATE
export const updateTodo = (id: string, title: string, notes: string, dateDue: TodoDate, importance: Importance) => { return true };
// update = delete + add?

// TODO DELETE
export const deleteTodo = (id: string) => { return true };