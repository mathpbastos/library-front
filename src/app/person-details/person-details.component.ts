import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  id!: number;
  person!: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.person = new Person();
    this.id = this.route.snapshot.params['id'];
    this.personService.getPerson(this.id)
      .subscribe(data => {
        console.log(data);
        this.person = data;
      }, error => console.log(error)
      );
  }

  goToList(){
    this.router.navigate(['person/all']);
  }

}
