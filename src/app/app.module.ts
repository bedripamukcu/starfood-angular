import { initializeApp } from '@angular/fire/app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrdersectionComponent } from './components/ordersection/ordersection.component';
import { AcceptedpageComponent } from './pages/acceptedpage/acceptedpage.component';
import { CompletedpageComponent } from './pages/completedpage/completedpage.component';
import { CookingpageComponent } from './pages/cookingpage/cookingpage.component';
import { DeliveredpageComponent } from './pages/deliveredpage/deliveredpage.component';
import { NeworderpageComponent } from './pages/neworderpage/neworderpage.component';
import { ParcelreadypageComponent } from './pages/parcelreadypage/parcelreadypage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxPrintModule } from 'ngx-print';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase,
} from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LeftsidebarComponent,
    SidebarComponent,
    OrdersectionComponent,
    AcceptedpageComponent,
    CompletedpageComponent,
    CookingpageComponent,
    DeliveredpageComponent,
    NeworderpageComponent,
    ParcelreadypageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxPrintModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent],
})
export class AppModule {}
