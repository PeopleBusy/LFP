import { InMemoryDbService } from "angular-in-memory-web-api";
import { ILiasse } from "../models/ILiasse";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const liasses = [
      {
        id: 1,
        Type: "S-2 Réel",
        Rank: "10",
        CoupeDeLaLigue: "200",
        CoupeDeFrance: "300",
        C1: "0",
        C3: "1000",
        Championship: "1"
      },
      {
        id: 2,
        Type: "S-1 Budget Révisé",
        Rank: "11",
        CoupeDeLaLigue: "100",
        CoupeDeFrance: "200",
        C1: "0",
        C3: "200",
        Championship: "1"
      },
      {
        id: 3,
        Type: "S-1 Estimé",
        Rank: "10",
        CoupeDeLaLigue: "200",
        CoupeDeFrance: "300",
        C1: "0",
        C3: "1000",
        Championship: "1"
      },
      {
        id: 4,
        Type: "S-1 Réel",
        Rank: "",
        CoupeDeLaLigue: "",
        CoupeDeFrance: "",
        C1: "",
        C3: "",
        Championship: ""
      },
      {
        id: 5,
        Type: "S Budget Initial",
        Rank: "2",
        CoupeDeLaLigue: "2000",
        CoupeDeFrance: "3000",
        C1: "0",
        C3: "0",
        Championship: "1"
      },
      {
        id: 6,
        Type: "S Budget Révisé",
        Rank: "",
        CoupeDeLaLigue: "",
        CoupeDeFrance: "",
        C1: "",
        C3: "",
        Championship: ""
      },
      {
        id: 7,
        Type: "S Réel mi-saison",
        Rank: "",
        CoupeDeLaLigue: "",
        CoupeDeFrance: "",
        C1: "",
        C3: "",
        Championship: ""
      },
      {
        id: 8,
        Type: "S Estimé",
        Rank: "",
        CoupeDeLaLigue: "",
        CoupeDeFrance: "",
        C1: "",
        C3: "",
        Championship: ""
      },
      {
        id: 9,
        Type: "S+1 Budget Initial",
        Rank: "",
        CoupeDeLaLigue: "",
        CoupeDeFrance: "",
        C1: "",
        C3: "",
        Championship: ""
      }
    ];
    return { liasses };
  }

  genId(liasses: ILiasse[]): number {
    return liasses.length > 0 ? Math.max(...liasses.map(l => l.id)) + 1 : 11;
  }
}
