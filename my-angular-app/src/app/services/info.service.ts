import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Skill {
  name: string;
  progress: number;
}

export interface References {
  name: string;
  address: string;
}

export interface Hobbies {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private apiUrl = 'http://localhost:1444';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/skills`);
  }

 getReferences(): Observable<References[]> {
    return this.http.get<References[]>(`${this.apiUrl}/references`);
  }

  addReference(reference: References): Observable<any> {
    return this.http.post(`${this.apiUrl}/references`, reference);
  }

  getHobbies(): Observable<Hobbies[]> {
    return this.http.get<Hobbies[]>(`${this.apiUrl}/hobbies`);
  }

}

