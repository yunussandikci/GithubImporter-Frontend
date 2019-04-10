import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})

export class ProjectSearchComponent{
  constructor(public rest:ApiService,private route: ActivatedRoute, private router: Router) { }

  displayedColumns: string[] = ['id', 'name'];
  data = [];

  isLoadingResults = false;
  isEmpty = true;
  message = "";
  owner = [];
  username = "";

  onClickSearchButton() {
    if(this.username.length > 0){
      this.data = [];
      this.owner = null;
      this.isEmpty = true;
      this.message = "";
      this.isLoadingResults = true;
      this.rest.getImportedRepositoriesByUsername(this.username).subscribe(res => {
        this.data = res.importedProjects;
        this.owner = res.owner;
        this.isLoadingResults = false;
        this.isEmpty = false;
      }, (err) => {
        this.isLoadingResults = false;
        this.isEmpty = true;
        if(err.status == 404){
          this.message = err.error.message;
        }else{
          this.message = "Something went wrong";
        }
      });
    }
  }

}
