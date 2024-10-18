import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Spinner } from './components/Spinner/Spinner';
import MainLayout from './layouts/MainLayout';
import Main from './pages/Main/Main';
import { DataNotFound } from './pages/NotFound/NotFound';

const CartPage = lazy(() => import('./pages/Cart/Cart'));
const TeaPage = lazy(() => import('./pages/TeaPage/TeaPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Main />} />
          <Route
            path="cart"
            element={
              <Suspense fallback={<Spinner />}>
                <CartPage />
              </Suspense>
            }
          />
          <Route
            path="tea/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <TeaPage />
              </Suspense>
            }
          />
          <Route path="*" element={<DataNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
