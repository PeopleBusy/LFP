import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '../models/player';
import { PlayersComponent } from '../players/players.component';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  form: FormGroup;
  title: string;
  btnTitle: string;

  player: Player;
  playerToSave: Player;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    if(data) {
      this.title = data.title;
      this.btnTitle = data.btnTitle;
      this.player = data.player;
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.player.name, [Validators.required]],
      playerNumber: [this.player.playerNumber, [Validators.required]],
      nbMonth: [this.player.nbMonth, [Validators.required]],
      salary: [this.player.salary, [Validators.required]],
      prime: [this.player.prime, [Validators.required]]
    });
  }

  add() {
    this.playerToSave = this.form.value;
    if(this.player.Id) this.playerToSave.Id = this.player.Id;
    this.dialogRef.close(this.playerToSave);
  }

  close() {
    this.dialogRef.close();
  }

}
