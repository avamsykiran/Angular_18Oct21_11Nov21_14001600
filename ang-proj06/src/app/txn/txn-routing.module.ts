import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TxnFormComponent } from './txn-form/txn-form.component';

import { TxnComponent } from './txn.component';
import { TxnsListComponent } from './txns-list/txns-list.component';

const routes: Routes = [
  {
    path: '', component: TxnComponent, children: [
      { path: 'list', component: TxnsListComponent },
      { path: 'new', component: TxnFormComponent },
      { path: 'edit/:id', component: TxnFormComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxnRoutingModule { }
