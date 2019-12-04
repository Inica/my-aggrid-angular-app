import { Component } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-status-renderer',
  templateUrl: './status-renderer.component.html',
  styleUrls: ['./status-renderer.component.scss']
})
export class StatusRendererComponent implements ICellRendererAngularComp {

  public params: any;
  private value: boolean;

  get Value(): boolean {
    return this.value;
  }

  set Value(val) {
    this.value = val;
  }

  agInit(params: any): void {
    this.params = params;
    this.value = params.value;
  }

  refresh(): boolean {
    return false;
  }

}
