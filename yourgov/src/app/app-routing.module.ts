import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JusticeComponent } from './justice/justice.component';
import { VoteComponent } from './vote/vote.component';
import { PoliceComponent } from './police/police.component';
import { LoginComponent } from './login/login.component';
import { HealthcareComponent } from './healthcare/healthcare.component';

const routes: Routes = [ 
{path: "", component: HomeComponent},
{path:"justice", component: JusticeComponent},
{path:"election", component: VoteComponent},
{path:"police", component: PoliceComponent},
{path:"login", component: LoginComponent},
{path:"healthcare", component: HealthcareComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
