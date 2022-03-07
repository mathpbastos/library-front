import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../person';
import { PersonService } from '../services/person/person.service';
import { ConfirmDialogService } from '../shared/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons!: Observable<Person[]>;

  constructor(private personService: PersonService,
              private router: Router,
              private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.persons = this.personService.getPersonList();
  }

  deletePerson(id: number){   
    this.confirmDialogService.confirm("DELETE PERSON", "Are you sure?", "Delete", "Cancel")
      .then(
        () => {
          this.personService.deletePerson(id)
            .subscribe(
              data => {
                console.log("to aqui");
                console.log(data);
                this.reloadData();
              },
              error => console.log((error))
            );
        }
      )
      .catch( );
  }

  personDetails(id: number){
    this.router.navigate([`/person/details`, id]);
  }

}
