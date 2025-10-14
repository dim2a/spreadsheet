import './App.css'
import jspreadsheet from 'jspreadsheet';
import formula from '@jspreadsheet/formula';
import { useEffect, useMemo, useRef } from 'react';
import tableSettings from './tableData.json';
// import tableSettings from '../calcData.json';
import { Table } from './Table';

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
};

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // License + community formula engine
    jspreadsheet.setLicense('YTM2MmYxNWZiOTBlMGM5NjU0MGJhMTFjMGNmNzNlODM5ZWVjODJjN2VmNTNkYzNiYTVmZWM4ZTYxYzc5YzUxZDQ0NzdkYWI4OGQyYTBlZDk3MmI4NWQxNGY4ZDc1YTlkM2U2ODc4NWVhZmNkOGQyYzJiZDExYWMzNGEzN2Y5NjYsZXlKamJHbGxiblJKWkNJNklpSXNJbTVoYldVaU9pSktjM0J5WldGa2MyaGxaWFFpTENKa1lYUmxJam94TnpZM01USTROREF3TENKa2IyMWhhVzRpT2xzaWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0ltTnZaR1Z6WVc1a1ltOTRMbWx2SWl3aWFuTm9aV3hzTG01bGRDSXNJbU56WWk1aGNIQWlMQ0ozWldJaUxDSnNiMk5oYkdodmMzUWlMQ0prWlhZdGMyTnZjR1Y0TG5CeWFXMWxiR1Z3YUdGdWRITXVaR1VpWFN3aWNHeGhiaUk2SWpNMElpd2ljMk52Y0dVaU9sc2lkamNpTENKMk9DSXNJblk1SWl3aWRqRXdJaXdpZGpFeElpd2lZMmhoY25Seklpd2labTl5YlhNaUxDSm1iM0p0ZFd4aElpd2ljR0Z5YzJWeUlpd2ljbVZ1WkdWeUlpd2lZMjl0YldWdWRITWlMQ0pwYlhCdmNuUmxjaUlzSW1KaGNpSXNJblpoYkdsa1lYUnBiMjV6SWl3aWMyVmhjbU5vSWl3aWNISnBiblFpTENKemFHVmxkSE1pTENKamJHbGxiblFpTENKelpYSjJaWElpTENKemFHRndaWE1pWFN3aVpHVnRieUk2ZEhKMVpYMD0=');
    jspreadsheet.setExtensions({ formula });
  }, []);

  const tables = useMemo(() => {
    return tableSettings.map((data, index) => <Table key={index} tableSettings={data} />)
    // return <Table tableSettings={tableSettings[0]} />
  }, [tableSettings]);

  return (
    <div>
      <div style={{ width: '80vw', height: '80vh' }}>
        <div ref={containerRef} style={{ width: '100%', height: '100%' }} >
          {tables}
        </div>
      </div>
      <span>hello</span>
    </div>
  )
}

export default App
