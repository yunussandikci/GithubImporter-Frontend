import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/projects';

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})

export class ProjectSearchComponent implements OnInit {

  constructor(public rest:ApiService, private route: ActivatedRoute, private router: Router) { }

  displayedColumns: string[] = ['id', 'name'];
  data: Project[] = [];
  isLoadingResults = true;

  ngOnInit() {
    this.rest.getImportedRepositoriesByUsername("yunussandikci").subscribe(res => {
      this.data = res;
      console.log(res);
      this.isLoadingResults = false;
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    }
  );
  }

}
