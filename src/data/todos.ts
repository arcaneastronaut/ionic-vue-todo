export interface Todo {
  title: string;
  notes: string;
  dateCreated: Date;
  dateDue: Date;
  importance: Importance;
  id: number;
}

export class Date {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  /* Date format: ISO 8601, YYYY-MM-DD */
  getRepresentation() {
    const YEAR_REPRESENTATION = this.year.toString();
    const MONTH_REPRESENTATION = this.month < 10 ? '0' + this.month.toString() : this.month.toString();
    const DAY_REPRESENTATION = this.day < 10 ? '0' + this.day.toString() : this.day.toString();
    const SEPARATOR = '-';
    return YEAR_REPRESENTATION + SEPARATOR + MONTH_REPRESENTATION + SEPARATOR + DAY_REPRESENTATION;
  }
}

export enum Importance {
  Trivial,
  Low,
  Normal,
  High,
  Critical
}

const todos: Todo[] = [
  {
    title: 'TodoTitle1',
    notes: 'TodoNotes1',
    dateCreated: new Date(2021, 5, 6),
    dateDue: new Date(2021, 5, 16),
    importance: Importance.Trivial,
    id: 0
  },
  {
    title: 'TodoTitle2',
    notes: 'TodoNotes2',
    dateCreated: new Date(2021, 5, 16),
    dateDue: new Date(2021, 5, 16),
    importance: Importance.Normal,
    id: 1
  },
  {
    title: 'TodoTitle3',
    notes: 'TodoNotes3',
    dateCreated: new Date(2021, 5, 16),
    dateDue: new Date(2021, 5, 16),
    importance: Importance.Critical,
    id: 2
  }
];

export const getTodos = () => todos;

export const getTodo = (id: number) => todos.find(todo => todo.id === id);