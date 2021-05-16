export enum Importance {
  Trivial,
  Low,
  Normal,
  High,
  Critical
}

export interface Todo {
  title: string;
  notes: string;
  dateCreated: TodoDate;
  dateDue: TodoDate;
  importance: Importance;
  id: number;
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
}

const todos: Todo[] = [
  {
    title: 'TodoTitle1',
    notes: 'Notes: Not due yet',
    dateCreated: new TodoDate(2021, 5, 16),
    dateDue: new TodoDate(2021, 5, 20),
    importance: Importance.Trivial,
    id: 0
  },
  {
    title: 'TodoTitle2',
    notes: 'Notes: Due today',
    dateCreated: new TodoDate(2021, 5, 16),
    dateDue: new TodoDate(2021, 5, 16),
    importance: Importance.Normal,
    id: 1
  },
  {
    title: 'TodoTitle3',
    notes: 'Notes: Overdue',
    dateCreated: new TodoDate(2021, 5, 16),
    dateDue: new TodoDate(2021, 5, 5),
    importance: Importance.Critical,
    id: 2
  },
  {
    title: 'TodoTitle2',
    notes: 'Notes: Due today',
    dateCreated: new TodoDate(2021, 5, 16),
    dateDue: new TodoDate(2021, 5, 16),
    importance: Importance.Normal,
    id: 1
  },
  {
    title: 'TodoTitle2',
    notes: 'Notes: Due today',
    dateCreated: new TodoDate(2021, 5, 16),
    dateDue: new TodoDate(2021, 5, 16),
    importance: Importance.Normal,
    id: 1
  },
  {
    title: 'TodoTitle2',
    notes: 'Notes: Due today',
    dateCreated: new TodoDate(2021, 5, 16),
    dateDue: new TodoDate(2021, 5, 16),
    importance: Importance.Normal,
    id: 1
  },
  {
    title: 'TodoTitle3',
    notes: 'Notes: Overdue',
    dateCreated: new TodoDate(2021, 5, 16),
    dateDue: new TodoDate(2021, 5, 5),
    importance: Importance.Critical,
    id: 2
  },
  {
    title: 'TodoTitle1',
    notes: 'Notes: Not due yet',
    dateCreated: new TodoDate(2021, 5, 16),
    dateDue: new TodoDate(2021, 5, 20),
    importance: Importance.Trivial,
    id: 0
  },
];

export const getTodos = () => todos;

export const getTodo = (id: number) => todos.find(todo => todo.id === id);