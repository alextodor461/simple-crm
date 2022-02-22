import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();
  allUsers: any = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { 

  }

  ngOnInit(): void {
    //Daten aus FireBase laden
    this.firestore.collection('users').valueChanges().subscribe((changes: any) =>{
      this.allUsers = changes;
      console.log(changes);
    })
  }

  openDialog(): void {
   this.dialog.open(AddUserComponent);
  }
}

