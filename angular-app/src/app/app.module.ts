import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatInputModule, MatCardModule} from '@angular/material';
import { FilterPipe } from './filter.pipe';
import { CategoriesPipe } from './categories.pipe';
import { CategoriesListPipe } from './categoriesList.pipe';

import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    CategoriesPipe,
    CategoriesListPipe
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
