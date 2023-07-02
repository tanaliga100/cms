import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useOutletContext } from "react-router-dom";
import { LoadingWrapper } from "../../components/wrapper/Wrapper";

const CustomersPage = () => {
  // retrieve the context
  const ctx = useOutletContext<any>();
  const theme = useTheme();

  // const columns = [
  //   { field: "_id", headerName: "ID", flex: 1 },
  //   { field: "name", headerName: "Name", flex: 1 },
  //   { field: "email", headerName: "Email", flex: 1 },
  //   { field: "phone", headerName: "Phone Number", flex: 1 },
  // ];
  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", flex: 0.4 },
    {
      field: "name",
      headerName: "Name",
      flex: 0.2,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      flex: 0.5,
    },
    {
      field: "city",
      headerName: "City",
      type: "string",
      flex: 0.3,
    },
    {
      field: "country",
      headerName: "Country",
      type: "string",
      flex: 0.2,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      type: "string",
      flex: 0.4,
    },
    {
      field: "role",
      headerName: "Role",
      type: "string",
      flex: 0.2,
    },

    {
      field: "phoneNumber",
      headerName: "Phone Number",
      type: "number",
      renderCell: (params) => {
        const value = params.value.toString();
        return value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
      flex: 0.3,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <Box
      sx={{
        height: 500,
        maxWidth: "100vw",
        mt: "20px",
        padding: "0 1rem",
        // background: theme.palette.background.default,
      }}
    >
      {ctx?.data?.customers ? (
        <DataGrid
          columns={columns}
          rows={ctx ? ctx.data.customers : []}
          loading={ctx.isLoading || !ctx}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 7,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          sx={{
            border: "none",
            color: theme.palette.primary.contrastText,
          }}
        />
      ) : (
        <LoadingWrapper isLoading={ctx.isLoading} text="loading" />
      )}
    </Box>
  );
};

export default CustomersPage;
