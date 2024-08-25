import { Selector } from '@ngxs/store';
import { TodoModel } from './app.component';
import { TodoState, TodoStateModel } from './todo-state';

export class TodoSelectors {
  @Selector([TodoState])
  static todoItems(state: TodoStateModel): TodoModel[] {
    return state.items;
  }
}
