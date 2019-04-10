import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { GithubImportComponent } from './components/github-import/github-import.component';
import { ProjectSearchComponent } from './components/project-search/project-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule } from "@angular/material";
  
const appRoutes: Routes = [
  {
    path: 'githubimport',
    component: GithubImportComponent,
    data: { title: 'Github Search' }
  },
  {
    path: 'projectsearch',
    component: ProjectSearchComponent,
    data: { title: 'Project Search' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    GithubImportComponent,
    ProjectSearchComponent,
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
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
