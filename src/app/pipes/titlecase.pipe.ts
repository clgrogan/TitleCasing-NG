import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "titlecase", // the name is the keyword used to access the custom pipe
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string, minorWords?: string[]) {
    const defaultMinorWords = ["a", "an", "and", "or", "the", "of"];
    let returnValue: string = "";
    if (!value) return null;
    if (!minorWords) minorWords = defaultMinorWords;
    const titleWords = value.split(" ");

    for (let i = 0; i < titleWords.length; i++) {
      minorWords.includes(titleWords[i]) && i > 0
        ? (returnValue += " " + titleWords[i])
        : (returnValue +=
            " " +
            titleWords[i].charAt(0).toUpperCase() +
            titleWords[i].slice(1));
    }

    return returnValue;
  }
}
