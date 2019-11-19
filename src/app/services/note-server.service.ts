import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../models/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteServerService {

  constructor(private http: HttpClient) {
  }
  apiUrl: string = `https://afternoon-island-71359.herokuapp.com/note`;

  public getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  public getNote(id: number): Observable<Note> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Note>(url);
  }
  public addNote(note: Note): Observable<any> {
    return this.http.post(this.apiUrl, note);
  }
  public updateNote(note: Note): Observable<any> {
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.put(url, note);
  }
  public deleteNote(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  public isLive(): Observable<any> {
    const url = `${this.apiUrl}/islive`;
    return this.http.get(url);
  }
  public getIPAddress() {
    return this.http.get('https://jsonip.com');
  }

}
