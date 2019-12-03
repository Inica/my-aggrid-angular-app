import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GridApi } from '@ag-grid-community/core';
import { PagerService } from '../services/pager.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  providers: [PagerService]
})
export class PaginationComponent implements OnChanges {
  @Input() pageSize = 0;
  @Input() gridApi: GridApi;
  private paginationPages = {};
  private noOfPages = 0;

  get PaginationPages() {
    return this.paginationPages;
  }

  get currentPage(): number {
    return this.gridApi ? this.gridApi.paginationGetCurrentPage() : 0;
  }

  get totalPages(): number {
    return this.gridApi ? this.gridApi.paginationGetTotalPages() : 0;
  }

  constructor(private pagerService: PagerService) { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'gridApi') {
        this.paginationPages = this.gridApi ? this.pagerService.getPager(this.gridApi.paginationGetTotalPages(), 1) : {};
        this.noOfPages = this.gridApi ? this.gridApi.paginationGetTotalPages() : 0;
      }
    }
  }

  goToPage(index: number) {
    this.gridApi.paginationGoToPage(index);
    this.paginationPages = this.pagerService.getPager(this.noOfPages, index + 1);
  }

  goToNext() {
    this.gridApi.paginationGoToNextPage();
    this.paginationPages = this.pagerService.getPager(this.noOfPages, this.currentPage);
  }

  goToPrevious() {
    this.gridApi.paginationGoToPreviousPage();
    this.paginationPages = this.pagerService.getPager(this.noOfPages, this.currentPage);
  }

}
