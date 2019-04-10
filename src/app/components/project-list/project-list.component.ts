import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  constructor(public rest:ApiService,private route: ActivatedRoute, private router: Router) { }

  displayedColumns: string[] = ['id', 'name'];
  data: Project[] = [];
  isLoadingResults = true;

  ngOnInit() {
    this.rest.getImportedRepositoriesByUsername(this.route.snapshot.params['username']).subscribe(res => {
      this.data = res;
      this.isLoadingResults = false;
    }, (err) => {
      this.isLoadingResults = false;
    });
  }
}
