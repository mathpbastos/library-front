import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './person/cadastro-pessoa/cadastro-pessoa.component';
import { InputTextComponent } from './shared/components/fields/input-text/input-text.component';
import { PersonRegisterComponent } from './person/person-register/person-register.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonListComponent } from './person-list/person-list.component';
import { UpdatePersonComponent } from './update-person/update-person.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoaComponent,
    InputTextComponent,
    PersonRegisterComponent,
    CreatePersonComponent,
    PersonDetailsComponent,
    PersonListComponent,
    UpdatePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
