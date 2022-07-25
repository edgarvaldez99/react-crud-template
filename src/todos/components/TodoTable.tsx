import React from 'react';
import { CircularProgress } from '@mui/material';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AlertError from '../../mui/AlertError';
import Table from '../../mui/Table';
import useTodoListState from '../hooks/todo-list';
import { Todo } from '../interface/todo';
import TableContainer from '../../shared/TableContainer';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    type: 'number',
  },
  {
    field: 'userId',
    headerName: 'User Id',
    width: 150,
    type: 'number',
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 200,
  },
  {
    field: 'body',
    headerName: 'Body',
    flex: 1,
  },
  {
    field: 'accion',
    headerName: 'Acciones',
    sortable: false,
    width: 100,
    valueGetter: (params: GridValueGetterParams<any, Todo>) =>
      `${params.row.id || ''} ${params.row.title || ''}`,
  },
];

export default function TodoList() {
  const { loading, data, error } = useTodoListState();
  return (
    <TableContainer>
      {loading && <CircularProgress />}
      {data.length > 0 && <Table rows={data} columns={columns} />}
      {error && <AlertError>No se pudo obtener la lista de Todos</AlertError>}
    </TableContainer>
  );
}
