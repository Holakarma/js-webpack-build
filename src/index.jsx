import {createRoot} from "react-dom/client";
import 'app/styles/index.scss'
import App from "app/App";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found')
}

createRoot(root).render(<App/>)