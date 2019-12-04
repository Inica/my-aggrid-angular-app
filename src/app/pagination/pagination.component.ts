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
  @Input() noOfPages = 0;
  private paginationPages = {};

  get PaginationPages() {
    return this.paginationPages;
  }

  get currentPage(): number {
    return this.gridApi ? this.gridApi.paginationGetCurrentPage() : 0;
  }

  get totalPages(): number {
    return this.noOfPages;
  }

  constructor(private pagerService: PagerService) { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'noOfPages') {
        this.paginationPages = this.noOfPages ? this.pagerService.getPager(this.noOfPages, 1) : {};
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
