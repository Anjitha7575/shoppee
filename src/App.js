import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Login = lazy(() => import(/* webpackChunkName: 'Login' */ './apps/Login'));
const ShopStore = lazy(() => import(/* webpackChunkName: 'ShopStore' */ './apps/ShopStore'));

function App() {
  return (<div data-testid="shopee-app" >
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<ShopStore />} />
        <Route exact path="/shoppee" element={<ShopStore />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Suspense>
  </div>);
}

export default App;
