import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelreadypageComponent } from './pages/parcelreadypage/parcelreadypage.component';
import { DeliveredpageComponent } from './pages/deliveredpage/deliveredpage.component';
import { CompletedpageComponent } from './pages/completedpage/completedpage.component';
import { AcceptedpageComponent } from './pages/acceptedpage/acceptedpage.component';
import { CookingpageComponent } from './pages/cookingpage/cookingpage.component';
import { NeworderpageComponent } from './pages/neworderpage/neworderpage.component';

const routes: Routes = [
  { path: '', component: AcceptedpageComponent },
  { path: 'neworder', component: NeworderpageComponent },
  { path: 'cooking', component: CookingpageComponent },
  { path: 'accepted', component: AcceptedpageComponent },
  { path: 'parcelready', component: ParcelreadypageComponent },
  { path: 'delivered', component: DeliveredpageComponent },
  { path: 'completed', component: CompletedpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
