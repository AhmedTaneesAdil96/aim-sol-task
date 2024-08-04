import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {LayoutModule} from "../layout/layout.module";
import {HeroSectionComponent} from "./hero-section/hero-section.component";
import {ProductRangeComponent} from "./product-range/product-range.component";
import {NgForOf} from "@angular/common";
import {ProductDisplayComponent} from "./product-display/product-display.component";
import {FooterComponent} from "../layout/footer/footer.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes), LayoutModule, HeroSectionComponent, NgForOf, FooterComponent],
  declarations: [MainComponent, ProductRangeComponent, ProductDisplayComponent],
})

export class MainModule {
}



