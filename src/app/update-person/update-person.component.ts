import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBan, faCaretLeft, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Person } from '../person';
import { PersonService } from '../services/person/person.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  // ICONS
  faSave = faFloppyDisk;
  faCancel = faBan;
  faBack = faCaretLeft;

  id!: number;
  person: Person = new Person();
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit(): void {

    this.person = new Person();

    this.id = this.route.snapshot.params['id'];

    this.personService.getPerson(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.person = data;
        },
        error => console.log(error)
      );
  }

  updatePerson(){
    this.personService.updatePerson(this.id, this.person)
      .subscribe(
        data => {
          console.log(data);
          this.person = new Person();
          this.goToList();
        },
        error => console.log(error)
      );
  }

  onSubmit(){
    this.submitted = true;
    this.updatePerson();
  }

  goToList(){
    this.router.navigate(['/person/all']);
  }

}
