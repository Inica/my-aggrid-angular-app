import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from '@ag-grid-community/angular';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MaterialModule } from './common/material.module';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { StreamEditorComponent } from './stream-editor/stream-editor.component';
import { StatusRendererComponent } from './status-renderer/status-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PaginationComponent,
    SearchFilterComponent,
    StreamEditorComponent,
    StatusRendererComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([SearchFilterComponent, StatusRendererComponent, StreamEditorComponent]),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
