import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { GithubSearchComponent } from './github-search/github-search.component';
import { ProjectSearchComponent } from './project-search/project-search.component';

const appRoutes: Routes = [
  {
    path: 'githubsearch',
    component: GithubSearchComponent,
    data: { title: 'Github Search' }
  },
  {
    path: 'projectsearch',
    component: ProjectSearchComponent,
    data: { title: 'Project Search' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    ProjectSearchComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
