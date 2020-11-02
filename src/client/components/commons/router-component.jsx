import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import renderLoadingHelper from '../../helpers/render-loading-helper';
import Navigation from './navigation-component';
import PublicLayoutComponent from '../layouts/public-layout-component';
import PrivateLayoutComponent from '../layouts/private-layout-component';
const HomeView = lazy(() => import('../../views/home'))
const DashboardView = lazy(() => import('../../views/dashboard'))
const ProfileView = lazy(() => import('../../views/profile'))

const RouterComponent = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route exact path="/">
        <Suspense fallback={renderLoadingHelper()}>
          <PublicLayoutComponent childComponent={<HomeView />} />
        </Suspense>
      </Route>
      <Route exact path="/dashboard">
        <Suspense fallback={renderLoadingHelper()}>
          <PrivateLayoutComponent childComponent={<DashboardView />} />
        </Suspense>
      </Route>

      <Route exact path="/profile">
        <Suspense fallback={renderLoadingHelper()}>
          <PrivateLayoutComponent childComponent={<ProfileView />} />
        </Suspense>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterComponent;
