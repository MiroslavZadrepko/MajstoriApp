import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './App';

const app = document.getElementById('root');
const root = createRoot(app);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);