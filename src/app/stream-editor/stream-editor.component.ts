import { Component } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-stream-editor',
  templateUrl: './stream-editor.component.html',
  styleUrls: ['./stream-editor.component.scss']
})
export class StreamEditorComponent implements ICellRendererAngularComp {

  private params: any;
  private selected: boolean;

  get Selected(): boolean {
    return this.selected;
  }

  set Selected(val) {
    this.selected = val;
  }

  agInit(params: any): void {
      this.params = params;
      this.setStream(params.value);
  }

  getValue(): any {
    return this.selected;
}

  refresh(params: any): boolean {
      this.params = params;
      this.setStream(params.value);
      return true;
  }

  private setStream(value) {
      this.selected = value;
  }

  onChange(value) {
    this.setStream(value);
    this.params.api.stopEditing();
  }

}
