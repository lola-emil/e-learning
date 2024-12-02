import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/views/page-not-found/page-not-found.component';
import { authGuard } from './middlewares/auth/auth.guard';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./shared/shared-routing.module").then(m => m.SharedRoutingModule)
    },
    {
        path: "student",
        loadChildren: () => import("./student/student-routing.module").then(m => m.StudentRoutingModule),
        data: { roles: ["student"] },
        canActivate: [authGuard]
    },

    {
        path: "teacher",
        loadChildren: () => import("./teacher/teacher-routing.module").then(m => m.TeacherRoutingModule),
        data: {roles: ["teacher"]},
        canActivate: [authGuard]
    },
    {
        path: "page-not-found",
        component: PageNotFoundComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
