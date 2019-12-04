import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from '@ag-grid-community/angular';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MaterialModule } from './common/material.module';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { StreamEditorComponent } from './stream-editor/stream-editor.component';
import { StatusRendererComponent } from './status-renderer/status-renderer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GridComponent,
        PaginationComponent,
        SearchFilterComponent,
        StatusRendererComponent,
        StreamEditorComponent
      ],
      imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        AgGridModule.withComponents([SearchFilterComponent, StatusRendererComponent, StreamEditorComponent])
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'My Angular Grid'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My Angular Grid');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('My Angular Grid app is running!');
  });
});
