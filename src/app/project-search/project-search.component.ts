import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/projects';

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})

export class ProjectSearchComponent{
  constructor(private router: Router) { }

  username: string;
  onSubmit() {
    this.router.navigate(['/projectlist/' + this.username]);
  }

}
