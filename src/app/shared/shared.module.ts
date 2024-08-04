import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableDestroyerDirective } from './observable-destroyer.directive';

@NgModule({
  declarations: [ObservableDestroyerDirective],
  imports: [CommonModule],
})
export class SharedModule {}
