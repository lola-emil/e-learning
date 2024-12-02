import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/views/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./shared/shared-routing.module").then(m => m.SharedRoutingModule)
    },    
    {
        path: "student",
        loadChildren: () => import("./student/student-routing.module").then(m => m.StudentRoutingModule)
    },

    {
        path: "teacher",
        loadChildren: () => import("./teacher/teacher-routing.module").then(m => m.TeacherRoutingModule)
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
