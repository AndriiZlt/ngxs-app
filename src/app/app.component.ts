import { Component } from '@angular/core';
import { Select, StateContext, Store } from '@ngxs/store';
import {
  AddItemAction,
  DeleteItemAction,
  ToggleItemAction,
} from './todo-actions';
import { TodoStateModel } from './todo-state';
import { TodoSelectors } from './todo-selectors';
import { Observable } from 'rxjs';

export interface TodoModel {
  id: number;
  isDone: boolean;
  title: string;
}

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(TodoSelectors.todoItems) todoItems$!: Observable<TodoModel[]>;

  newItemName: string;
  items: TodoModel[] = [];

  constructor(private store: Store) {}

  trackById(index: number, item: TodoModel): number {
    return item.id;
  }

  addItem(): void {
    this.store.dispatch(new AddItemAction(this.newItemName));

    this.newItemName = '';
  }

  toggleItem(toDoItem: TodoModel): void {
    this.store.dispatch(new ToggleItemAction(toDoItem.id));
  }

  deleteItem(id: number) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
