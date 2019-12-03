import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterParams, RowNode } from '@ag-grid-community/all-modules';
import { IFilterAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements IFilterAngularComp {

  private params: IFilterParams;
  private valueGetter: (rowNode: RowNode) => any;
  private searchText = '';

  get SearchText(): string {
    return this.searchText;
  }

  set SearchText(text: string) {
    this.searchText = text;
  }

  @ViewChild('input', { read: ViewContainerRef, static: false }) public input;

  agInit(params: IFilterParams): void {
    this.params = params;
    this.valueGetter = params.valueGetter;
  }

  /**
   * @description - Sets filter active icon based on input
   */
  isFilterActive(): boolean {
    return this.searchText !== null && this.searchText !== undefined && this.searchText !== '';
  }

  /**
   * @description - Checks and filter the data from grid.
   * @param params - Input params
   */
  doesFilterPass(params: IDoesFilterPassParams): boolean {
    return this.searchText.toLowerCase()
      .split(' ')
      .every((filterWord) => {
        return this.valueGetter(params.node).toString().toLowerCase().indexOf(filterWord) >= 0;
      });
  }

  /**
   * @description - Gets value from input text.
   */
  getModel(): object {
    return { value: this.searchText };
  }

  /**
   * @description - Sets input value.
   * @param model - Get value and set it to model
   */
  setModel(model: any): void {
    this.searchText = model ? model.value : '';
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(params: IAfterGuiAttachedParams): void { // Life cycle from IFilterAngularComp interface
    window.setTimeout(() => {
      this.input.element.nativeElement.focus();
    });
  }

  /**
   * @description - Triggers filter changed event.
   * @param newValue - New input.
   */
  onChange(newValue): void {
    if (this.searchText !== newValue) {
      this.searchText = newValue;
      this.params.filterChangedCallback();
    }
  }

}
