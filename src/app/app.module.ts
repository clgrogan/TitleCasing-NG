import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TitleCasingComponent } from "./title-casing/title-casing.component";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, TitleCasingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
