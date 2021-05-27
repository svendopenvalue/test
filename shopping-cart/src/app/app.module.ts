import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { AddToListComponent } from './add-to-list/add-to-list.component';
import { ListComponent } from './list/list.component';
import { TotalComponent } from './total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AddToListComponent,
    ListComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
