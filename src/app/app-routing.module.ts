import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { CategoryComponent } from './components/category/category.component';
import { SupportScreenComponent } from './components/support-screen/support-screen.component';
import { LearningScreenComponent } from './components/learning-screen/learning-screen.component';
import { CommunityScreenComponent } from './components/community-screen/community-screen.component';
import { PartnersScreenComponent } from './components/partners-screen/partners-screen.component';
import { AboutScreenComponent } from './components/about-screen/about-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainScreenComponent },
  { path: 'category', component: CategoryComponent},
  {path: 'support', component: SupportScreenComponent},
  {path: 'learning', component: LearningScreenComponent},
  {path: 'community', component: CommunityScreenComponent},
  {path: 'partner', component: PartnersScreenComponent},
  {path: 'about', component: AboutScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
