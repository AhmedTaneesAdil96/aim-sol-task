import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TopBarComponent} from './top-bar/top-bar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  exports: [TopBarComponent],
})
export class LayoutModule {
}
