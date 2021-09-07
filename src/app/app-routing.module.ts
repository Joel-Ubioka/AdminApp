import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'Mailbox', component: MailboxComponent},
  { path: 'SignUp', component:  SignupComponent},
  { path: 'SignIp', component:  SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
