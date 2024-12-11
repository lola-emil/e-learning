import { Routes } from '@angular/router';
import { LandingPageComponent } from './common/views/landing-page/landing-page.component';
import { PageNotFoundComponent } from './common/views/page-not-found/page-not-found.component';
import { AboutPageComponent } from './common/views/about-page/about-page.component';

export const routes: Routes = [
    {
        path: "",
        component: LandingPageComponent
    },

    {
        path: "about",
        component: AboutPageComponent
    },

    {
        path: "**",
        component: PageNotFoundComponent
    }
];
