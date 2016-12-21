import { Routes,RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { AddtasksComponent } from './task/addtasks.component';

const router:Routes=[

    {path:'',redirectTo:'/allTask',pathMatch:'full'},
    {path:'allTask',component:TaskComponent},
    {path:'addTask',component:AddtasksComponent}
];

export const routes=RouterModule.forRoot(router);
