import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { JusticeComponent } from './justice/justice.component';
import { PoliceComponent } from './police/police.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { WelfareComponent } from './welfare/welfare.component';
import { HomeaffairsComponent } from './homeaffairs/homeaffairs.component';
import { VoteComponent } from './vote/vote.component';
import { NewsComponent } from './news/news.component';
import { JobsComponent } from './jobs/jobs.component';
import { MilitaryComponent } from './military/military.component';
import { TransportComponent } from './transport/transport.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    JusticeComponent,
    PoliceComponent,
    HealthcareComponent,
    WelfareComponent,
    HomeaffairsComponent,
    VoteComponent,
    NewsComponent,
    JobsComponent,
    MilitaryComponent,
    TransportComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
