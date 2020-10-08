import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid-two',
  templateUrl: './ag-grid-two.component.html',
  styleUrls: ['./ag-grid-two.component.css']
})
export class AgGridTwoComponent implements OnInit {

  itle = 'my-app';

  columnDefs = [
      { field: 'make', sortable: true, filter: true },
      { field: 'model', sortable: true, filter: true },
      { field: 'price', sortable: true, filter: true }
  ];

  rowData: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
      this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');
  }

}
