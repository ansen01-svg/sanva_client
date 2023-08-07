import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout';
import ProtectedRoute from './protected_route';
import Login from '../pages/login';
import { lazy } from 'react';
import AppThemeProvider from '../mui_theme';
import { useSelector } from 'react-redux';
import { darkPalette, lightPalette } from '../mui_theme';
import SuspendedComponent from '.././components/suspended_component';
import LoadingFallback from '.././components/loading_fallback';


const HomePage = lazy(() => import('../pages/home'))
const ProPage = lazy(() => import('../pages/pro'))
const ProjectsPage = lazy(() => import('../pages/projects'))
const TemplatesPage = lazy(() => import('../pages/templates'))
const Register = lazy(() => import('../pages/register'))
const Notfound = lazy(() => import('../pages/not_found'))

const AppRoutes = () => {
    const { mode } = useSelector(state => state.appReducer);

    const currentPalette = (mode === 'dark' ? darkPalette : lightPalette)

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={
                    <ProtectedRoute>
                        <AppThemeProvider palette={currentPalette}>
                            <Layout />
                        </AppThemeProvider>
                    </ProtectedRoute>
                }>
                    <Route index element={<SuspendedComponent fallback={<LoadingFallback />} component={<HomePage />} />} />
                    <Route path='projects' element={<SuspendedComponent fallback={<LoadingFallback />} component={<ProjectsPage />} />} />
                    <Route path='pro' element={<SuspendedComponent fallback={<LoadingFallback />} component={<ProPage />} />} />
                    <Route path='templates' element={<SuspendedComponent fallback={<LoadingFallback />} component={<TemplatesPage />} />} />
                </Route>
                <Route path='/register' element={<SuspendedComponent fallback={<LoadingFallback width='100vw' height='100vh' />} component={<Register />} />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<SuspendedComponent fallback={<LoadingFallback width='100vw' height='100vh' />} component={<Notfound />} />} />
            </Routes>
        </HashRouter>
    )
}


export default AppRoutes;