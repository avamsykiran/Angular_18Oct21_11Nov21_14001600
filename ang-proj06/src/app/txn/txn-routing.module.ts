import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TxnComponent } from './txn.component';

const routes: Routes = [{ path: '', component: TxnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxnRoutingModule { }
