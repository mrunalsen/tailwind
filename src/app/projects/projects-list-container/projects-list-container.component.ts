import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-list-container',
  templateUrl: './projects-list-container.component.html'
})
export class ProjectsListContainerComponent implements OnInit {
  public project$: Observable<Projects[]>

  constructor(private projectService: ProjectsService) {
    this.project$ = new Observable()
  }

  ngOnInit(): void {
    this.getData();
  }
  public getData() {
    this.project$ = this.projectService.getProjectData()
  }
}
