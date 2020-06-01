import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PageheadingComponent } from './pageheading/pageheading.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageheadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageheadingComponent,
  ]
})
export class SharedModule { }
