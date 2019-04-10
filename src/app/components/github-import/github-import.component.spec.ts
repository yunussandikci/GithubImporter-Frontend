import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubImportComponent } from './github-import.component';

describe('GithubSearchComponent', () => {
  let component: GithubImportComponent;
  let fixture: ComponentFixture<GithubImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( GithubImportComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
