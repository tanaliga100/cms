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
import TransactionsLayout from "./layout/TransactionsLayout";
import { RootState } from "./main";
import DashboardPage from "./pages/DashboardPage";
import ProductDetailsPage from "./pages/products/ProductDetailsPage";
import ProductsPage from "./pages/products/ProductsPage";
import StatsPage from "./pages/products/StatsPage";
import { themeSettings } from "./theme";
import ProductsView from "./views/ProductsView";
import StatsView from "./views/StatsView";
function App() {
  const mode = useSelector((state: RootState) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* <Route path="/products" element={<ProductsPage />} /> */}
            {/* // SIMULATION */}
            <Route path="/products" element={<ProductsLayout />}>
              <Route index element={<ProductsPage />} />
              <Route path="stats" element={<StatsPage />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>
            <Route path="/customers" element={<CustomersLayout />}>
              <Route index element={<h1>OverView </h1>} />
            </Route>
            <Route path="/transactions" element={<TransactionsLayout />}>
              <Route index element={<h1>Overview</h1>} />
            </Route>
            <Route path="/geography" element={<GeoLayout />}>
              <Route index element={<h1>Overview</h1>} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
