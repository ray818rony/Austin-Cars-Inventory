import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'firstName', headerName: 'First name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120,

  },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params: ValueGetterParams) =>
  //       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  //   },
];

const rows = [
  { id: 1, lastName: 'Shabo', firstName: 'Rony', age: 29 },
  { id: 2, lastName: 'Mousou', firstName: 'Tima', age: 57 },
  { id: 3, lastName: 'Shabo', firstName: 'Youssef', age: 45 },
  { id: 4, lastName: 'Shabo', firstName: 'Laila', age: 27 },
  { id: 5, lastName: 'Hamo', firstName: 'Lilan', age: 23 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 75 },
  { id: 7, lastName: 'Kayali', firstName: 'Yasser', age: 29 },
  { id: 8, lastName: 'Maamo', firstName: 'Hassan', age: 30 },
  { id: 9, lastName: 'Roxie', firstName: '', age: 65 },
];


export const DataTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2></h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
