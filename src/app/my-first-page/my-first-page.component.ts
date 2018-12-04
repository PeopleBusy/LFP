import { Component, OnInit } from '@angular/core';

export interface Tile {
  text: string;
  tileContents: TileContent[];
}

export interface TileContent {
  color: string;
  text: string;
  isDisabled: boolean;
}

@Component({
  selector: 'app-my-first-page',
  templateUrl: './my-first-page.component.html',
  styleUrls: ['./my-first-page.component.css']
})
export class MyFirstPageComponent implements OnInit {

  tiles: Tile[] = [
    {
      text: 'Date 1', tileContents: [
        { color: 'orange', text: 'text 1', isDisabled: false },
        { color: 'gray', text: 'text 2', isDisabled: false },
        { color: 'orange', text: 'text 3', isDisabled: false },
        { color: 'orange', text: 'text 4', isDisabled: false }
      ]
    },
    {
      text: 'Date 2', tileContents: [
        { color: 'orange', text: 'text 1', isDisabled: true },
        { color: 'red', text: 'text 2', isDisabled: false },
        { color: 'gray', text: 'text 3', isDisabled: true },
        { color: 'gray', text: 'text 4', isDisabled: true }
      ]
    },
    {
      text: 'Date 3', tileContents: [
        { color: 'orange', text: 'text 1', isDisabled: false },
        { color: 'orange', text: 'text 2', isDisabled: true },
        { color: 'red', text: 'text 3', isDisabled: false },
        { color: 'red', text: 'text 4', isDisabled: false }
      ]
    },
    {
      text: 'Date 4', tileContents: [
        { color: 'orange', text: 'text 1', isDisabled: false },
        { color: 'red', text: 'text 2', isDisabled: false },
        { color: 'orange', text: 'text 3', isDisabled: true },
        { color: 'orange', text: 'text 3', isDisabled: true }
      ]
    },
    {
      text: 'Date 5', tileContents: [
        { color: 'orange', text: 'text 1', isDisabled: false },
        { color: 'red', text: 'text 2', isDisabled: false },
        { color: 'red', text: 'text 3', isDisabled: true },
        { color: 'orange', text: 'text 3', isDisabled: true }
      ]
    },
    {
      text: 'Date 6', tileContents: [
        { color: 'red', text: 'text 1', isDisabled: false },
        { color: 'red', text: 'text 2', isDisabled: false },
        { color: 'red', text: 'text 3', isDisabled: true },
        { color: 'gray', text: 'text 3', isDisabled: true }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
