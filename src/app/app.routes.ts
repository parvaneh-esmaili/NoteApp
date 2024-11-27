import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { AliComponent } from './pages/ali/ali.component';
import { KoroshComponent } from './pages/korosh/korosh.component';
import { SaminComponent } from './pages/samin/samin.component';
import { HasanComponent } from './pages/hasan/hasan.component';
import { RezaComponent } from './pages/reza/reza.component';

export const routes: Routes = [
    { path: '', redirectTo: 'list' , pathMatch: 'full'},
    { path: 'list', component: ListComponent},
    { path: 'add', component: AddComponent},
    { path: 'ali', component: AliComponent},
    { path: 'korosh', component: KoroshComponent },
    { path: 'samin', component: SaminComponent },
    { path: 'hasan', component: HasanComponent },
    { path: 'reza', component: RezaComponent}
];

