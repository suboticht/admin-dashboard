import { Box, Paper } from '@mui/material'
import TitleHeader from '../../components/TitleHeader'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ManageData } from '../../data/data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'username', headerName: 'User name', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'phone', headerName: 'Phone', flex: 1 },
  { field: 'website', headerName: 'Website', flex: 1 },
];

const rows = ManageData
const paginationModel = { page: 0, pageSize: 9 };

const Manage = () => {
  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2
      }}
    >
      {/* Page name */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TitleHeader name="Team" text="Managing the Team Members" />
      </Box>
      <Paper sx={{ height: "100%", width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </Box>
  )
}

export default Manage