import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TabelaMusicasComponent } from "./tabela-musicas/tabela-musicas.component";
import { FormMusicasComponent } from "./form-musicas/form-musicas.component";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    TabelaMusicasComponent,
    FormMusicasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

