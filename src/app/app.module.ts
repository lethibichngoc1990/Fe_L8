import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
/* needs styles.css here 
  ...............
*/
import { FormsModule } from '@angular/forms'; 
// New
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// default entries
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HeaderComponent } from './tutorial/header/header.component';
import { MainComponent } from './tutorial/main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AddComponent } from './tutorial/add/add.component';
import { DetailsComponent } from './tutorial/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HeaderComponent,
    MainComponent,
    AddComponent,
    LoginComponent,
    TutorialComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    FormsModule 
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }








