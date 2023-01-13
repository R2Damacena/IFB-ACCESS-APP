import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./pages/splash/splash.module').then((m) => m.SplashPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'singup',
    loadChildren: () =>
      import('./pages/singup/singup.module').then((m) => m.SingupPageModule),
  },
  {
    path: 'carteira',
    loadChildren: () =>
      import('./pages/carteira/carteira.module').then(
        (m) => m.CarteiraPageModule
      ),
  },
  {
    path: 'adicionar',
    loadChildren: () => import('./pages/adicionar/adicionar.module').then( m => m.AdicionarPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'cardadd',
    loadChildren: () => import('./pages/cardadd/cardadd.module').then( m => m.CardaddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
