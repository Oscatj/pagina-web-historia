import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { GridComponent } from './grid/grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { AnoNuevoComponent } from './DiasFestivos/ano-nuevo/ano-nuevo.component';
import { DiaReyesComponent } from './DiasFestivos/dia-reyes/dia-reyes.component';
import { AltagraciaComponent } from './DiasFestivos/altagracia/altagracia.component';
import { JpdComponent } from './DiasFestivos/jpd/jpd.component';
import { IndependenciaComponent } from './DiasFestivos/independencia/independencia.component';
import { ViernesSantosComponent } from './DiasFestivos/viernes-santos/viernes-santos.component';
import { DiaTrabajoComponent } from './DiasFestivos/dia-trabajo/dia-trabajo.component';
import { CorpusChristiComponent } from './DiasFestivos/corpus-christi/corpus-christi.component';
import { RestauracionComponent } from './DiasFestivos/restauracion/restauracion.component';
import { MercedesComponent } from './DiasFestivos/mercedes/mercedes.component';
import { ConstitucionComponent } from './DiasFestivos/constitucion/constitucion.component';
import { NavidadComponent } from './DiasFestivos/navidad/navidad.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from './app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DescriptionComponent } from './description/description.component';
import { FabulasComponent } from './fabulas/fabulas.component';

@NgModule({
  declarations: [
    GridComponent,
    NavbarComponent,
    CardComponent,
    AnoNuevoComponent,
    DiaReyesComponent,
    AltagraciaComponent,
    JpdComponent,
    IndependenciaComponent,
    ViernesSantosComponent,
    DiaTrabajoComponent,
    CorpusChristiComponent,
    RestauracionComponent,
    MercedesComponent,
    ConstitucionComponent,
    NavidadComponent,
    AsideComponent,
    FooterComponent,
    DescriptionComponent,
    FabulasComponent,
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    HttpClientModule,
    MatToolbarModule, 
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    MatFormFieldModule,
    MatListModule,
    MatDatepickerModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    AppRoutingModule
  ]
})
export class CalendarModule { }
