import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = "http://localhost:8080/person";

  constructor(
    private http: HttpClient
  ) { }

  getPerson(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  createPerson(person: Object): Observable<Object>{
    return this.http.post(`${this.url}/new`, person);
  }

  updatePerson(id: number, value: any){
    return this.http.put(`${this.url}/update`, value);
  }

  deletePerson(id: number): Observable<any>{
    return this.http.delete(`${this.url}/delete/${id}`, {responseType: 'text'});
  }

  getPersonList(): Observable<any>{
    return this.http.get(`${this.url}/all`);
  }
}
