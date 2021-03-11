import { Component, OnInit } from '@angular/core';
import { Screen582190Service } from './screen582190.service';

@Component({
  selector: 'app-screen582190',
  templateUrl: './screen582190.component.html',
  styleUrls: ['./screen582190.component.scss'],
})

export class Screen582190Component implements OnInit {
    columnDefs: any = [];
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private screen582190Service: Screen582190Service,
    ) { }

    ngOnInit() {
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}