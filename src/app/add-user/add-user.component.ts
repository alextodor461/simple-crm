import { Component, Inject, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user = new User();

  constructor(public dialogRef: MatDialogRef<AddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  onNoClick(){
    
  }

  save(){
    this.user.birthDay = (new Date().getTime());
    console.log('current user is: ' + this.user.birthDay);

    this.firestore.collection('users').add(this.user.toJSON()).then((result: any) => {
      console.log('added user is :' , result);
      this.dialogRef.close();
    })
  }
}
