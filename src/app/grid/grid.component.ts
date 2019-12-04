import { Component, OnInit } from '@angular/core';
import { AllCommunityModules, GridApi, Module } from '@ag-grid-community/all-modules';
import { EmployeeService } from '../services/employee.service';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { StatusRendererComponent } from '../status-renderer/status-renderer.component';
import { StreamEditorComponent } from '../stream-editor/stream-editor.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  private gridApi: GridApi;
  private paginationPageSize = 5;
  private totalPages = 0;
  private rowData = [];
  private frameworkComponents = {
    searchFilterComponent: SearchFilterComponent,
    statusRendererComponent: StatusRendererComponent,
    streamEditorComponent: StreamEditorComponent
  };
  private modules = AllCommunityModules;

  get PaginationPageSize(): number {
    return this.paginationPageSize;
  }

  get gridAPI(): GridApi {
    return this.gridApi;
  }

  get TotalPages(): number {
    return this.totalPages;
  }

  get RowData(): Array<any> {
    return this.rowData;
  }

  get FrameworkComponents(): object {
    return this.frameworkComponents;
  }

  get Modules(): Module[] {
    return this.modules;
  }

  columnDefs = [
    { headerName: 'Employee Id', field: 'id' },
    { headerName: 'Employee Name', field: 'name', filter: 'searchFilterComponent' },
    { headerName: 'Unit', field: 'unit' },
    { headerName: 'Technology stream', field: 'stream', cellEditor: 'streamEditorComponent', editable: true, },
    { headerName: 'Status', field: 'status', cellRenderer: 'statusRendererComponent' }
  ];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => { this.rowData = data; });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.totalPages = this.gridApi.paginationGetTotalPages();
  }

}
