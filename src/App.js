import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Login = lazy(() => import(/* webpackChunkName: 'Login' */ './apps/Login'));
const ShopStore = lazy(() => import(/* webpackChunkName: 'ShopStore' */ './apps/ShopStore'));

function App() {
  return (<BrowserRouter basename={process.env.PUBLIC_URL}>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<ShopStore />} />
      </Routes>
    </Suspense>
  </BrowserRouter>);
}

export default App;
