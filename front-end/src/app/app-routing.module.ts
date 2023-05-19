import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path : 'home', component: HomeComponent},
  {path  : 'login', component: LoginComponent},
  {path  : 'users', component: LoginComponent},
  {path  : 'employees', component: EmployeesComponent},
  {path :'**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
