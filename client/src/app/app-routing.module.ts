import {RouterModule, Routes} from '@angular/router';
import {NgModule, OnInit} from '@angular/core';

import {LandingPageComponent} from './landing-page/landing-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MainComponent} from './main/main.component';
import {AdminComponent} from './admin/admin.component';

const appRoutes: Routes = [
    {path: 'landing', component: LandingPageComponent},
    {
        path: '', component: MainComponent, children: [
        {path: '', component: DashboardComponent},
        {path: 'admin', component: AdminComponent}
    ]
    },
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
