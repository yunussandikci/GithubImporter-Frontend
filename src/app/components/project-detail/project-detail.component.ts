import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rest: ApiService, private router: Router) { }

  data = [];
  isEmpty = false;
  isLoadingResult = false;
  message = "";
  ngOnInit() {
    this.isLoadingResult = true;
    this.rest.getImportedRepositoryDetail(this.route.snapshot.params['id']).subscribe(res => {
      this.data = res.project;
      this.isLoadingResult = false;
      this.isEmpty = false;
      console.log(this.data);
    }, (err) => {
      this.isLoadingResult = false;
      this.isEmpty = true;
      if(err.status == 404){
        this.message = err.error.message;
      }else{
        this.message = "Something went wrong";
      }
    });
  }

}
