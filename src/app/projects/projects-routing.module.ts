import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectsListContainerComponent } from './projects-list-container/projects-list-container.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '', component: ProjectsComponent,
    children: [
      {
        path: 'form', component: ProjectFormContainerComponent
      },
      {
        path: 'list', component: ProjectsListContainerComponent
      },
      {
        path: ``,
        pathMatch: `full`,
        redirectTo: `form`
      },
      {
        path: 'edit/:id',
        component: ProjectFormContainerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
