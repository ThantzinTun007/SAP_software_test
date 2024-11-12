import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { ProductsScreenComponent } from './components/products-screen/products-screen.component';
import { SupportComponent } from './components/support/support.component';
import { LearningComponent } from './components/learning/learning.component';
import { CommunityComponent } from './components/community/community.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AboutComponent } from './components/about/about.component';
import { ExploreComponent } from './components/explore/explore.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CategoryComponent } from './components/category/category.component';
import { SupportScreenComponent } from './components/support-screen/support-screen.component';
import { LearningScreenComponent } from './components/learning-screen/learning-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    ProductsScreenComponent,
    SupportComponent,
    LearningComponent,
    CommunityComponent,
    PartnersComponent,
    AboutComponent,
    ExploreComponent,
    BodyComponent,
    FooterComponent,
    ContactUsComponent,
    CategoryComponent,
    SupportScreenComponent,
    LearningScreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
