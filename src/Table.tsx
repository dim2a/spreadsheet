import jspreadsheet from "jspreadsheet";
import { useEffect, useRef } from "react";

const INIT_WORKSHEET_CONFIG: jspreadsheet.Worksheet = {
  search: false,
  columnDrag: false,
  columnSorting: false,
  defaultColWidth: 100,
  rowResize: true,
  defaultColAlign: 'left',
  allowInsertRow: true,
  allowManualInsertRow: false,
  allowManualInsertColumn: false,
  allowInsertColumn: true,
  allowDeleteRow: true,
  allowDeleteColumn: true,
  allowRenameColumn: false,
  tableHeight: 600,
  tableWidth: 1200,
  filters: false,
  tableOverflow: true,
  // virtualizationY: false,
};

export const Table = ({ tableSettings }: { tableSettings: { [key: string]: unknown } }) => {
  const jssRef = useRef<
    (HTMLDivElement & { spreadsheet: jspreadsheet.spreadsheetInstance }) | null
  >(null);


  useEffect(() => {
    if (jssRef.current?.spreadsheet) {
      jspreadsheet.destroy(jssRef.current);      
    }
        
      if (!jssRef.current) {
        console.error('Container element not found');
        return;
      }

      if (tableSettings) {        
        try {
          jspreadsheet(jssRef.current, {
            about: 'calculation',
            worksheets: [{
              ...INIT_WORKSHEET_CONFIG,
              ...tableSettings,
            }],
          });
          
          console.log('Spreadsheet initialized successfully');
        } catch (error) {
          console.error('Error initializing spreadsheet:', error);
        }
      }      

  }, [tableSettings]);

  return (
    <div className="table">
      <div ref={jssRef} className="table-container"></div>
    </div>
  );
};