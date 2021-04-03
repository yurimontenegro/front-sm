import { ProtectGuard } from './login/protect.guard';
import { LoginGuard } from './login/login.guard';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ServiceCreateComponent } from './components/service/service-create/service-create.component';
import { ServiceCrudComponent } from './views/service-crud/service-crud.component';

const routes: Routes = [{
  path: "", 
  component: LoginComponent,
  canActivate: [LoginGuard]
},{
  path: "home", 
  component: HomeComponent,
  canActivate: [ProtectGuard]
},{
  path: "services",
  component: ServiceCrudComponent
},{
  path: "services/create",
  component: ServiceCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
