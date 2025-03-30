
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaDeCadastro from "./paginas/PaginaDeCadastro";
import PaginaDeLogin from "./paginas/PaginaDeLogin";
import PaginaDoPortal from "./paginas/PaginaDoPortal";
import PrivateRoute from "./componentes/PrivateRoute";




function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaDeLogin />} />
        <Route path="/cadastro" element={<PaginaDeCadastro />} />
        <Route path="/portal" element={
          <PrivateRoute>
            <PaginaDoPortal/>
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
