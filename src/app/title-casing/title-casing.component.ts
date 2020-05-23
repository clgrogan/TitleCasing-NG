import { Component, OnInit } from "@angular/core";

@Component({
  selector: "title-casing",
  templateUrl: "./title-casing.component.html",
  styleUrls: ["./title-casing.component.scss"],
})
export class TitleCasingComponent implements OnInit {
  userInput;
  constructor() {
    this.userInput = "";
  }

  ngOnInit(): void {}
  userInputChange = () => {
    console.log("userInputChange executed. userInput: " + this.userInput);
  };
}
