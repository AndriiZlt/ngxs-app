import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material-module';
import { FormsModule } from '@angular/forms';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { NgxsModule } from '@ngxs/store';
// import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { TodoState } from './todo-state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    MatFormFieldModule,
    MatListModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([TodoState], {
      developmentMode: !environment.production,
    }),
    // NgxsStoragePluginModule.forRoot({ keys: '*' }),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
