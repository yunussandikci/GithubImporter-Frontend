import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { GithubSearchComponent } from './github-search/github-search.component';
import { ProjectSearchComponent } from './project-search/project-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectListComponent } from './project-list/project-list.component';


import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
  
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
  },
  {
    path: 'projectlist/:username',
    component: ProjectListComponent,
    data: { title: 'Project List' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    ProjectSearchComponent,
    ProjectListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
