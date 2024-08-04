import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';
import { MatIconButton } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    MatIcon,
    MatBadge,
    MatIconButton,
    FooterComponent,
  ],
  exports: [TopBarComponent],
})
export class LayoutModule {}
