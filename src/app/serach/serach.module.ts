import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterbasedserachComponent } from './filterbasedserach/filterbasedserach.component';



@NgModule({
  declarations: [
    FilterbasedserachComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FilterbasedserachComponent]
})
export class SerachModule { }
