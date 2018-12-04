import { Component, OnInit } from "@angular/core";
import { ILiasse } from "../models/ILiasse";
import { LiasseService } from "../services/liasse.service";

export interface Periode {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-my-first-page",
  templateUrl: "./my-first-page.component.html",
  styleUrls: ["./my-first-page.component.css"]
})
export class MyFirstPageComponent implements OnInit {
  liasses: ILiasse[];
  periodes: Periode[] = [
    { value: "1", viewValue: "Liasse 1" },
    { value: "2", viewValue: "Liasse 2" },
    { value: "3", viewValue: "Liasse 3" },
    { value: "4", viewValue: "Liasse 4" }
  ];

  selected = "";

  constructor(private liasseService: LiasseService) {}

  ngOnInit() {}
  onChange() {
    this.getLiasse();
  }

  onClick() {
    console.log(this.liasses);
    this.liasses.forEach(l => {
      this.liasseService.updateLiasse(l).subscribe(() => console.log('OK'));
    });
  }

  getLiasse() {
    this.liasseService.getLiasses().subscribe(r => {
      switch (this.selected) {
        case "1":
          this.liasses = r.filter(
            l =>
              l.Type == "S-2 Réel" ||
              l.Type == "S-1 Budget Révisé" ||
              l.Type == "S-1 Estimé" ||
              l.Type == "S-1 Réel"
          );
          this.liasses.forEach(l => {
            if (l.Type == "S-1 Réel") {
              l.Color = "red";
              l.IsDisable = false;
            } else {
              l.Color = "orange";
              l.IsDisable = true;
            }
          });
          break;
        case "2":
          this.liasses = r.filter(
            l =>
              l.Type == "S-2 Réel" ||
              l.Type == "S-1 Réel" ||
              l.Type == "S Budget Initial" ||
              l.Type == "S Budget Révisé"
          );
          this.liasses.forEach(l => {
            if (l.Type == "S Budget Révisé") {
              l.Color = "red";
              l.IsDisable = false;
            } else {
              l.Color = "orange";
              l.IsDisable = true;
            }
          });
          break;
        case "3":
          this.liasses = r.filter(
            l =>
              l.Type == "S-1 Réel" ||
              l.Type == "S Budget Initial" ||
              l.Type == "S Budget Révisé" ||
              l.Type == "S Réel mi-saison"
          );
          this.liasses.forEach(l => {
            if (l.Type == "S Réel mi-saison") {
              l.Color = "red";
              l.IsDisable = false;
            } else {
              l.Color = "orange";
              l.IsDisable = true;
            }
          });
          break;
        case "4":
          this.liasses = r.filter(
            l =>
              l.Type == "S-1 Réel" ||
              l.Type == "S Budget Initial" ||
              l.Type == "S Budget Révisé" ||
              l.Type == "S Estimé" ||
              l.Type == "S+1 Budget Initial"
          );
          this.liasses.forEach(l => {
            if (l.Type == "S Estimé" || l.Type == "S+1 Budget Initial") {
              l.Color = "red";
              l.IsDisable = false;
            } else {
              l.Color = "orange";
              l.IsDisable = true;
            }
          });
          break;
        default:
          console.log("Default case");
          break;
      }
    });
  }
}
