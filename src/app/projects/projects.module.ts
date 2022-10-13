import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectsListContainerComponent } from './projects-list-container/projects-list-container.component';
import { ProjectFormPresentationComponent } from './project-form-container/project-form-presentation/project-form-presentation.component';
import { ProjectListPresentationComponent } from './projects-list-container/project-list-presentation/project-list-presentation.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectFormContainerComponent,
    ProjectsListContainerComponent,
    ProjectFormPresentationComponent,
    ProjectListPresentationComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProjectsModule { }
