import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatIconModule, MatGridListModule, MatListModule, 
  MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MyFirstPageComponent } from './my-first-page/my-first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent,
    MyFirstPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
