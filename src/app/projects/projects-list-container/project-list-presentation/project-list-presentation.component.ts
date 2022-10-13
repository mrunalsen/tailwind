import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../../project.model';

@Component({
  selector: 'app-project-list-presentation',
  templateUrl: './project-list-presentation.component.html'
})
export class ProjectListPresentationComponent implements OnInit {

  @Input() public set projectData(v: Projects[] | null) {
    if (v)
      this._projectData = v;
  }
  public get projectData(): Projects[] {
    return this._projectData;
  }

  private _projectData!: Projects[];

  constructor() { }

  ngOnInit(): void {
  }

}
