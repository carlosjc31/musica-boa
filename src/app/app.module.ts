import { NgModule } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { TabelaMusicaComponent } from "./tabela-musica/tabela-musica.component";
import { HttpClient } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TabelaMusicaComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    HttpClient
  ],
  providers: [
    provideClientHydration()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

