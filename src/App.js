import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Auth from './component/auth/auth.component';
// import Home from './component/home/home.component';
// import Navbar from './component/navbar/navbar.component';
// import Notes from './component/notes/notes.component';

import HomeRattan from './component/home-rattan/home-rattan.component';
import NavbarRattan from './component/navbar-rattan/navbar-rattan.component';
import ProductsRattan from './component/products-rattan/products-rattan.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavbarRattan />}>
        <Route path="/" element={<HomeRattan />} />
      </Route>
      <Route path="/products" element={<ProductsRattan />} />
    </Routes>
  );
}

export default App;
