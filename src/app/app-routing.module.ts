import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'royalf', loadChildren: './pages/royalf/royalf.module#RoyalfPageModule' },
  { path: 'straightf', loadChildren: './pages/straightf/straightf.module#StraightfPageModule' },
  { path: 'fourkind', loadChildren: './pages/fourkind/fourkind.module#FourkindPageModule' },
  { path: 'fullhouse', loadChildren: './pages/fullhouse/fullhouse.module#FullhousePageModule' },
  { path: 'flush', loadChildren: './pages/flush/flush.module#FlushPageModule' },
  { path: 'straight', loadChildren: './pages/straight/straight.module#StraightPageModule' },
  { path: 'threekind', loadChildren: './pages/threekind/threekind.module#ThreekindPageModule' },
  { path: 'twopair', loadChildren: './pages/twopair/twopair.module#TwopairPageModule' },
  { path: 'onepair', loadChildren: './pages/onepair/onepair.module#OnepairPageModule' },
  { path: 'highcard', loadChildren: './pages/highcard/highcard.module#HighcardPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
