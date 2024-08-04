import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductRangeComponent } from './product-range/product-range.component';
import { ProductDisplayComponent } from './product-display/product-display.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProductRangeComponent,
    ProductDisplayComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    HeroSectionComponent,
  ],
})
export class DashboardModule {}
