import {NgModule} from '@angular/core';
import {VarDirective} from './VarDirective';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [VarDirective],
  exports: [VarDirective, CommonModule]
})
export class VarDirectiveModule {
}
