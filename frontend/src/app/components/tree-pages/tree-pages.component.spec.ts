/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TreePagesComponent } from './tree-pages.component';

describe('TreePagesComponent', () => {
  let component: TreePagesComponent;
  let fixture: ComponentFixture<TreePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
