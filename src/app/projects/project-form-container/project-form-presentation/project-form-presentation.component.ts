import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Projects } from '../../project.model';
import { ProjectFormPresenterService } from '../project-form-presenter/project-form-presenter.service';

@Component({
  selector: 'app-project-form-presentation',
  templateUrl: './project-form-presentation.component.html'
})
export class ProjectFormPresentationComponent implements OnInit {
  billing: string[];
  status: string[];
  admin: boolean = false

  @Input() public set projectData(value: Projects[] | null) {
    if (value) {
      this._projectData = value
      // this.formTitle = 'Edit Title',
      // this.projectForm.patchValue(value);
    }
  }
  public get projectTitleData(): Projects[] | null {
    return this._projectData;
  }

  @Output() add: EventEmitter<Projects>;
  public projectForm: FormGroup;
  // public formTitle: string
  private _projectData!: Projects[]

  constructor(
    private projectFormPresenter: ProjectFormPresenterService,
    private route: Router,
  ) {
    this.projectForm = this.projectFormPresenter.buildform()
    this.add = new EventEmitter()

    this.billing = [
      'Fixed Price',
      'Daily',
      'Hourly rate',
      'Milestone billing',
      'Time & Material Contract',
    ];
    this.status = [
      'Live',
      'In Development',
      'Approved',
      'Pending Approval',
      'Okay to Start',
      'Scheduled',
      'In Planning',
      'In Setup',
      'Inactive',
      'On Hold',
      'Not Started',
      'On Track',
      'In Testing',
      'Ready For Testing',
      'Needs Review',
      'Past Due',
      'Requires Feedback',
      'Terminated',
      'Closed',
      'Completed',
      'Delievered',
    ];
  }

  ngOnInit(): void {
    this.projectFormPresenter.projectFormData$.subscribe((res) => {
      this.add.emit(res)
    })
  }
  onSubmit() {
    this.projectFormPresenter.onSubmit(this.projectForm)
    console.log(this.projectForm.value);

  }
}
