import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { GithubImportComponent } from './components/github-import/github-import.component';
import { ProjectSearchComponent } from './components/project-search/project-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule, 
  MatGridListModule} from "@angular/material";
  
const appRoutes: Routes = [
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
    data: { title: 'Project Detail' }
  },
  {
    path: 'projects',
    component: ProjectSearchComponent,
    data: { title: 'Project Search' }
  },{
    path: 'githubimport',
    component: GithubImportComponent,
    data: { title: 'Github Search' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    GithubImportComponent,
    ProjectSearchComponent,
    ProjectDetailComponent,
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
    MatGridListModule,
    MatListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
