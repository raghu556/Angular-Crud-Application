import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { OverviewComponent } from './overview/overview.component';
import { FormsModule }   from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    OverviewComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
