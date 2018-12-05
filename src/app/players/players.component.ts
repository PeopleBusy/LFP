import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog, MatDialogConfig, MatTableDataSource, MatPaginator } from "@angular/material";
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Player } from '../models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [
    { Id: 1, name: "Junior MBAPPE", playerNumber: "10", nbMonth: 10, salary: 1000000000, prime: 134570 }
  ];

  mode: number; //1 = Mode ajout; 2 = Mode modification

  displayedColumns: string[] = ['Nom et Prénom(s)', 'Numéro du joueur', 'Nombre de mois', 'Salaire', 'Prime', 'Actions'];
  playerDatasource = new MatTableDataSource(this.players);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.playerDatasource.paginator = this.paginator;
  }

  addPlayer() {
    this.mode = 1;
    this.openDialog("Ajout d'un nouveau joueur", "Ajouter" , new Player());
  }

  editPlayer(player: Player) {
    this.mode = 2;
    this.openDialog(`Modification du joueur ${player.name}`, "Modifier", player);
  }

  openDialog(title: string, btnTitle: string, player: Player){
    const dialogConfig = new MatDialogConfig();

    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: title,
      btnTitle: btnTitle,
      player: player
    };

    this.dialog.open(MyDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      player => {
        if(this.mode == 1){
            //Ajout
            let newId = this.players[this.players.length - 1].Id + 1;
            player.Id = newId;
            this.players = [player, ...this.players];
        }
        if(this.mode == 2){
            //Modification
            let index = this.players.findIndex(p => p.Id == player.Id);           
            if(index != -1){
              this.players[index] = player;
            }
        }

        this.playerDatasource = new MatTableDataSource(this.players);
      }     
    );
  }
}
