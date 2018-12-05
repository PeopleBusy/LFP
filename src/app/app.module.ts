import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatIconModule, MatGridListModule, MatListModule, 
  MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MyFirstPageComponent } from './my-first-page/my-first-page.component';
import { PlayersComponent } from './players/players.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent,
    MyFirstPageComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyDialogComponent]
})
export class AppModule { }
