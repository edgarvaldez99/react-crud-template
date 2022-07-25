import React from 'react';
import { CircularProgress } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import AlertError from '../../mui/AlertError';
import Table from '../../mui/Table';
import TableContainer from '../../shared/TableContainer';
import usePostListState from '../hooks/post-list';
import { Post } from '../interface/post';
import EditButton from '../../mui/EditButton';
import DeleteButton from '../../mui/DeleteButton';

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
    width: 150,
  },
  {
    field: 'body',
    headerName: 'Body',
    flex: 1,
  },
  {
    field: 'action',
    headerName: 'Acciones',
    sortable: false,
    filterable: false,
    width: 100,
    renderCell: (params: GridRenderCellParams<Post, Post>) => (
      <>
        <EditButton to={`${params.row.id}`} />
        <DeleteButton />
      </>
    ),
  },
];

export default function PostTable() {
  const { loading, data, error } = usePostListState();
  return (
    <TableContainer>
      {loading && <CircularProgress />}
      {data.length > 0 && <Table rows={data} columns={columns} />}
      {error && <AlertError>No se pudo obtener la lista de Posts</AlertError>}
    </TableContainer>
  );
}
