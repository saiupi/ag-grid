import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() ColumnDefs: any;  
  @Input() RowData: any;  
  @Input() IsColumnsToFit: boolean;  
  
  gridApi: any;  
  gridColumnApi: any;  
  
  BindData(params) {  
    this.gridApi = params.api;  
    this.gridColumnApi = params.columnApi;  
    params.api.setRowData(this.RowData);  
    if (this.IsColumnsToFit) {  
      this.gridApi.sizeColumnsToFit();  
    }  
  } 
  onBtnExportDataAsCsv() {
    var params = this.RowData;
    this.gridApi.exportDataAsCsv(params);
  }

  // onBtnExportDataAsExcel() {
  //   var params = this.RowData;
  //   this.gridApi.exportDataAsExcel(params);
  // } 

}
