import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-github-import',
  templateUrl: './github-import.component.html',
  styleUrls: ['./github-import.component.css']
})
export class GithubImportComponent{

  constructor(public rest:ApiService,private route: ActivatedRoute, private router: Router) { }

  username = ""
  onSubmit(form) {
    if(this.username.length > 0){
      console.log(form)
      Swal.fire({
        title: "Wait a sec",
        text: "Importing from " + this.username,
        onBeforeOpen: () =>{
          Swal.showLoading()
        }
      })
      this.rest.importRepositoryFromGithubByUsername(this.route.snapshot.params['username']).subscribe(res => {
        Swal.fire(
          'Success',
          'All repositories of ' + this.username + ' successfully imported.',
          'success'
        );
      }, (err) => {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Something went wrong! :(',
        })
      });
    }else{
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'Please fill in the required fields',
      })
    }
    
  }

}
