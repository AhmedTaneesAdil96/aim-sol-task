import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { HeroSectionComponent } from './dashboard/hero-section/hero-section.component';
import { NgForOf } from '@angular/common';
import { FooterComponent } from '../layout/footer/footer.component';
import { PublicModule } from '../public/page-not-found/public.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./checkout/checkout.module').then((m) => m.CheckoutModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./contact-us/contact-us.module').then(
            (m) => m.ContactUsModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LayoutModule,
    HeroSectionComponent,
    NgForOf,
    FooterComponent,
    PublicModule,
  ],
  declarations: [MainComponent],
})
export class MainModule {}
