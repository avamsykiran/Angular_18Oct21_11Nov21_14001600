import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxnRoutingModule } from './txn-routing.module';
import { TxnComponent } from './txn.component';
import { TxnsListComponent } from './txns-list/txns-list.component';
import { TxnFormComponent } from './txn-form/txn-form.component';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [TxnComponent, TxnsListComponent, TxnFormComponent],
  imports: [
    CommonModule,
    TxnRoutingModule,
    WidgetsModule
  ]
})
export class TxnModule { }
