import { Box, useTheme } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useOutletContext } from "react-router-dom";
import { FlexRowWrapper } from "../../components/wrapper/Wrapper";

const TransactionsPage = () => {
  // GET THE CONTEXT and log
  const { data, msg, counts } = useOutletContext<any>();
  console.log("TRANS", data);
  const theme = useTheme();
  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", flex: 0.4 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 0.2,
      renderCell: (params) => `$ ${Number(params.value).toFixed(2)}`,
    },
    {
      field: "products",
      headerName: "# of Products",
      type: "string",
      flex: 0.2,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "createdAt",
      headerName: "Date Created",
      flex: 0.5,
    },
    {
      field: "userId",
      headerName: "User_Id",
      type: "string",
      flex: 0.5,
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        maxWidth: "100vw",
        mt: "20px",
        padding: "0 1rem",
      }}
    >
      <DataGrid
        columns={columns}
        rows={data ? (data as any)?.transactions : []}
        getRowId={(row) => row._id}
        paginationMode="server"
        sortingMode="server"
        rowCount={data && data?.counts}
        slots={{
          toolbar: CustomToolbar,
        }}
        sx={{
          border: "none",
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.background.default,
        }}
      />
    </Box>
  );
};

export default TransactionsPage;

export const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <FlexRowWrapper width="100%">
        <FlexRowWrapper>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexRowWrapper>
      </FlexRowWrapper>
    </GridToolbarContainer>
  );
};
