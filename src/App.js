import AppRoutes from './routes';
import AppStoreProvider from './redux';
import AppThemeProvider from './mui_theme';


const App = () => {
    return (
        <div className="Canva-layout">
            <AppStoreProvider>
                <AppThemeProvider>
                    <AppRoutes />
                </AppThemeProvider>
            </AppStoreProvider>
        </div>
    );
}


export default App;
