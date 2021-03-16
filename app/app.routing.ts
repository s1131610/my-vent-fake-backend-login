import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ServiceProvPortfolioComponent } from './service-prov-portfolio/service-prov-portfolio.component';
import { SearchProvidersComponent} from './search-providers/search-providers.component'
import { LayoutComponent } from './event-list/layout.component';

import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'service-prov-portfolio', component: ServiceProvPortfolioComponent},    
    { path: 'search-providers', component: SearchProvidersComponent},
    {path: 'event-list', component: LayoutComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);