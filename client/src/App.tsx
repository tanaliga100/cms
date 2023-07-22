import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomersLayout from "./layout/CustomersLayout";
import GeoLayout from "./layout/GeoLayout";
import ProductsLayout from "./layout/ProductsLayout";
import RootLayout from "./layout/RootLayout";
import SalesLayout from "./layout/SalesLayout";
import TransactionsLayout from "./layout/TransactionsLayout";
import { RootState } from "./main";
import CustomersPage from "./pages/customers/CustomersPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import GeoPage from "./pages/geo/GeoPage";
import ProductsPage from "./pages/products/ProductsPage";
import Breakdown from "./pages/sales/Breakdown";
import DailyPage from "./pages/sales/DailyPage";
import MonthlyPage from "./pages/sales/MonthlyPage";
import TransactionsPage from "./pages/transactions/TransactionsPage";
import { themeSettings } from "./theme";
function App() {
  const mode = useSelector((state: RootState) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<RootLayout />}>
            <Route
              index
              path="/"
              element={<Navigate to="dashboard" replace />}
            />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="products" element={<ProductsLayout />}>
              <Route path="/products" element={<ProductsPage />} />
            </Route>
            <Route path="/customers" element={<CustomersLayout />}>
              <Route index element={<CustomersPage />} />
            </Route>
            <Route path="/transactions" element={<TransactionsLayout />}>
              <Route index element={<TransactionsPage />} />
            </Route>
            <Route path="/geography" element={<GeoLayout />}>
              <Route index element={<GeoPage />} />
            </Route>

            <Route path="/sales" element={<SalesLayout />}>
              {/* <Route index element={<OverviewPage />} /> */}
              <Route path="daily" element={<DailyPage />} />
              <Route path="monthly" element={<MonthlyPage />} />
              <Route path="breakdown" element={<Breakdown />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
