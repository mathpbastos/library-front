import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonListComponent } from './person-list/person-list.component';
import { UpdatePersonComponent } from './update-person/update-person.component';

const routes: Routes = [
  { path: '', redirectTo:'person/all', pathMatch: 'full' },
  { path: 'person/all', component: PersonListComponent },
  { path: 'person/new', component: CreatePersonComponent },
  { path: 'person/details/:id', component: PersonDetailsComponent },
  { path: 'person/update/:id', component: UpdatePersonComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
