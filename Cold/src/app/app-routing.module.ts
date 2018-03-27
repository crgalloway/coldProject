import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabnewComponent } from './labnew/labnew.component';
import { LabeditComponent } from './labedit/labedit.component';
import { LabviewComponent } from './labview/labview.component';
import { StornewComponent } from './stornew/stornew.component';
import { StorviewComponent } from './storview/storview.component';
import { StoreditComponent } from './storedit/storedit.component';
import { LabdetailsComponent } from './labdetails/labdetails.component';
import { StordetailsComponent } from './stordetails/stordetails.component';

const routes: Routes = [
	{path:'labnew', component:LabnewComponent},
	{path:'labdetails/:id', component:LabdetailsComponent},
	{path:'labedit/:id', component:LabeditComponent},
	{path:'labview', component:LabviewComponent},
	{path:'stornew', component:StornewComponent},
	{path:'stordetails/:id', component:StordetailsComponent},
	{path:'storedit/:id', component:StoreditComponent},
	{path:'storview', component:StorviewComponent},
	{ path: '**', redirectTo: 'labview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }