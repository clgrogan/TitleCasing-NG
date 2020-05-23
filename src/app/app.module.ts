import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TitleCasingComponent } from "./title-casing/title-casing.component";

import { FormsModule } from "@angular/forms";
import { TitleCasePipe } from "./pipes/titlecase.pipe";

@NgModule({
  declarations: [AppComponent, TitleCasingComponent, TitleCasePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
