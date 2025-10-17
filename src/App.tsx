import './App.css';
import jspreadsheet from 'jspreadsheet';
import formula from '@jspreadsheet/formula-pro';
import { useEffect, useMemo } from 'react';
import tableSettings from './tableData.json';
import { Table } from './Table';
import 'jsuites/dist/jsuites.css';

export const App = () => {

  useEffect(() => {
    jspreadsheet.setLicense('NzExYzdlODE1MDQyNzAzMmFkMGU5MDhkNWFiMTRmZWE2ZTkxMjEzZDc3Y2FmOGJhOTYzOGViOTc0ZDNmMWU1MTk0MTg4ZmY4OTdhOTZlM2ZiNzZlMTYxZDM3N2ZlYjcyZTIyZGU2OTc4OTZlYzU5ZTQ1ZGQ1NDc2ODYxNGFlNTEsZXlKamJHbGxiblJKWkNJNklpSXNJbTVoYldVaU9pSktjM0J5WldGa2MyaGxaWFFpTENKa1lYUmxJam94TnpZd05qZzNORE00TENKa2IyMWhhVzRpT2xzaWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0ltTnZaR1Z6WVc1a1ltOTRMbWx2SWl3aWFuTm9aV3hzTG01bGRDSXNJbU56WWk1aGNIQWlMQ0p6ZEdGamEySnNhWFI2TG1sdklpd2lkMlZpWTI5dWRHRnBibVZ5TG1sdklpd2liRzlqWVd4b2IzTjBJbDBzSW5Cc1lXNGlPaUl6TkNJc0luTmpiM0JsSWpwYkluWTNJaXdpZGpnaUxDSjJPU0lzSW5ZeE1DSXNJbll4TVNJc0ltTm9ZWEowY3lJc0ltWnZjbTF6SWl3aVptOXliWFZzWVNJc0luQmhjbk5sY2lJc0luSmxibVJsY2lJc0ltTnZiVzFsYm5Seklpd2lhVzF3YjNKMFpYSWlMQ0ppWVhJaUxDSjJZV3hwWkdGMGFXOXVjeUlzSW5ObFlYSmphQ0lzSW5CeWFXNTBJaXdpYzJobFpYUnpJaXdpWTJ4cFpXNTBJaXdpYzJWeWRtVnlJaXdpYzJoaGNHVnpJaXdpWm05eWJXRjBJbDBzSW1SbGJXOGlPblJ5ZFdWOQ==');
    jspreadsheet.setExtensions({ formula });
  }, []);
  

  const tables = useMemo(() => (tableSettings as Array<{ [key: string]: unknown }>)
    .map((data, index) => <Table key={index} tableSettings={data} />),
    [tableSettings]
  );

  return (
    <div>
      <div style={{ width: '80vw', height: '80vh' }}>
        <div style={{ width: '100%', height: '100%' }} >
          {tables}
        </div>
      </div>
    </div>
  );
}
