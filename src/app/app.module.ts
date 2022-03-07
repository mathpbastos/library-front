import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonListComponent } from './person-list/person-list.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogService } from './shared/confirm-dialog/confirm-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonComponent,
    PersonDetailsComponent,
    PersonListComponent,
    UpdatePersonComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    NgbModalModule
  ],
  providers: [
    ConfirmDialogService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
