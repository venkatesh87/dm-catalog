import { FamilyCompositionModule } from './components/family-composition/family-composition.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule }   from './app-routing.module';

import { AppComponent } from './app.component';
import { NavstackComponent } from './components/nav-stack/nav-stack/navstack.component';
import { FamilyBarDemoComponent } from './catalog/family-bar-demo/family-bar-demo.component';
import { ButtonsDemoComponent } from './catalog/buttons-demo/buttons-demo.component';
import { NavstackDemoComponent } from './catalog/navstack-demo/navstack-demo.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarDemoComponent } from './catalog/sidebar-demo/sidebar-demo.component';
import { NavItemComponent } from './components/nav-stack/nav-item/nav-item.component';
import { NavCategoryComponent } from './components/nav-stack/nav-category/nav-category.component';
import { NavDividerComponent } from './components/nav-stack/nav-divider/nav-divider.component';
import { IconsComponent } from './components/icons/icons.component';
import { IconsDemoComponent } from './catalog/icons-demo/icons-demo.component';
import { TypographyDemoComponent } from './catalog/typography-demo/typography-demo.component';
import { CardDemoComponent } from './catalog/card-demo/card-demo.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyBarDemoComponent,
    ButtonsDemoComponent,
    NavstackComponent,
    NavstackDemoComponent,
    SidebarComponent,
    SidebarDemoComponent,
    NavItemComponent,
    NavCategoryComponent,
    NavDividerComponent,
    IconsComponent,
    IconsDemoComponent,
    TypographyDemoComponent,
    CardDemoComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FamilyCompositionModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-fr' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
