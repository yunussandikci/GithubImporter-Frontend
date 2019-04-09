import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  constructor(public rest:ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

}
