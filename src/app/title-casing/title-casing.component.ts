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
    this.userInput = "a user sHoUld deLete THIS input line of text";
    this.minorWords = ["a", "an", "the", "of", "is"];
    this.titleCaseExplained = `a string is considered to be in title case if each word in the string is
    either capitalized with only the first letter in uppercase. except in the
    case of a minor word, which will be all lower case unless it is the first
    word of the string, in which case it will be capitalized like a major
    word.`;
  }

  ngOnInit(): void {}
  userInputChange = () => {
    console.log("userInputChange executed. userInput: " + this.userInput);
  };
}
