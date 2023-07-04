import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useOutletContext } from "react-router-dom";

const TransactionsPage = () => {
  // GET THE CONTEXT and log
  const ctx = useOutletContext();
  console.log("TRANS", ctx);

  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", flex: 0.4 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 0.2,
    },
    {
      field: "products",
      headerName: "Products",
      type: "string",
      flex: 0.5,
    },
    {
      field: "userId",
      headerName: "User_Id",
      type: "string",
      flex: 0.5,
    },

    // {
    //   field: "phoneNumber",
    //   headerName: "Phone Number",
    //   type: "number",
    //   renderCell: (params) => {
    //     const value = params.value.toString();
    //     return value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
    //   },
    //   flex: 0.3,
    // },
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
        rows={ctx ? (ctx as any)?.transactions : []}
        getRowId={(row) => row._id}
      />
    </Box>
  );
};

export default TransactionsPage;
