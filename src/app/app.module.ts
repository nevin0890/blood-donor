import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonorComponent } from './adddonor/adddonor.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchdonorComponent } from './searchdonor/searchdonor.component';
import { DeletedonorComponent } from './deletedonor/deletedonor.component';
import { ViewAllDonorsComponent } from './view-all-donors/view-all-donors.component';

const appRoutes: Routes = [
  { path: '', component: AdddonorComponent },
  { path: 'searchdonor', component: SearchdonorComponent },
  { path: 'deletedonor', component: DeletedonorComponent },
  { path: 'viewalldonors', component: ViewAllDonorsComponent },
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdddonorComponent,
    NavbarComponent,
    SearchdonorComponent,
    DeletedonorComponent,
    ViewAllDonorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
