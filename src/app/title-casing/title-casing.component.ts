import { Component, OnInit } from "@angular/core";

@Component({
  selector: "title-casing",
  templateUrl: "./title-casing.component.html",
  styleUrls: ["./title-casing.component.scss"],
})
export class TitleCasingComponent implements OnInit {
  userInput;
  minorWords;
  titleCaseExplained;
  constructor() {
    this.userInput = "";
    this.minorWords = ["a", "an", "the", "of"];
    this.titleCaseExplained = `A string is considered to be in title case if each word in the string is
    either capitalized with only the first letter in uppercase. Except in the
    case of a minor word, which will be all lower case unless it is the first
    word of the string, in which case it will be capitalized like a 'normal'
    word."`;
  }

  ngOnInit(): void {}
  userInputChange = () => {
    console.log("userInputChange executed. userInput: " + this.userInput);
  };
}
