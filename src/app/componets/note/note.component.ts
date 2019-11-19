import { Component, OnInit } from '@angular/core';
import {Note} from '../../models/Note';
import {NoteServerService} from '../../services/note-server.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  listNote: Note[] = null;
  listClick: boolean = true;
  addClick: boolean = false;
  editClickindex: number = 0;
  noteAdd: Note = new Note();
  myIp: string;
  backendLive: boolean = false;
  constructor(private noteservice: NoteServerService) { }

  ngOnInit() {
    this.noteservice.getIPAddress().subscribe( (res: any) => {
        this.myIp = res.ip;
      }
    );
    this.noteservice.isLive().subscribe( res => {
      this.backendLive = true;
    });
    this.getList();
  }
  getList() {
    this.noteservice.getNotes().subscribe(value => {
      this.listNote =  value;
    });
  }

  clickList() {
    this.addClick = false;
    this.editClickindex = 0;
  }

  clickAdd() {
    this.addClick = true;
  }

  updateNote(note: Note) {
    note.ip = this.myIp;
    this.noteservice.updateNote(note).subscribe(res => {
      this.editClickindex = 0;
      this.getList();
      }
    );
  }

  saveNote(noteAdd: Note) {
    noteAdd.ip = this.myIp;
    this.noteservice.addNote(noteAdd).subscribe(res => {
      this.addClick = false;
      this.noteAdd.name = '';
      this.noteAdd.content = '';
      this.noteAdd.ip = '';
      this.getList();
    });
  }

  deleteNote(id: number) {
    this.noteservice.deleteNote(id).subscribe(res => {
      this.getList();
    });
  }

  clicEdit(id: number) {
    if (this.editClickindex !== id){
      this.editClickindex = id;
    } else {
      this.editClickindex = 0;
    }
  }
}
