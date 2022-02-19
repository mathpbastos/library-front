import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  person: Person = new Person();
  submitted = false;

  constructor(private personService: PersonService,
              private router: Router) { }

  ngOnInit(): void {
  }

  newPerson(): void{
    this.submitted = false;
    this.person = new Person();
  }

  save(){
    this.personService.createPerson(this.person)
      .subscribe(
        data => {
          console.log(data);
          this.person = new Person();
          this.goToList();
        },
        error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  goToList(){
    this.router.navigate(['/person/all']);
  }

}
