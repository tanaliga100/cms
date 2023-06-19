import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsLayout from "./layout/ProductsLayout";
import RootLayout from "./layout/RootLayout";
import { RootState } from "./main";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
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
            <Route path="/products" element={<ProductsLayout />} />
            <Route index element={<h1>Products Page</h1>} />
            <Route path="/stats" element={<h1>Stats View</h1>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
