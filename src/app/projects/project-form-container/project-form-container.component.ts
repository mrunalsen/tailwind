import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Projects } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-form-container',
  templateUrl: './project-form-container.component.html'
})
export class ProjectFormContainerComponent implements OnInit {

  public project$: Observable<Projects[]>

  constructor(
    private route: Router,
    private projectService: ProjectsService
  ) {
    this.project$ = new Observable()
  }

  ngOnInit(): void {
    this.getData()
  }
  public getData() {
    this.project$ = this.projectService.getProjectData()
  }
  public addData(form: Projects) {
    this.projectService.addProjectData(form).subscribe((res) => {
      this.route.navigateByUrl('/projects/list')
    })
  }
}
