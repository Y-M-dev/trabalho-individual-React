import {Routers} from "./rotas/Router.jsx";
import GlobalStyle from "./GlobalStyle.jsx";
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/700.css';
import '@fontsource/saira/400.css';
import '@fontsource/saira/700.css';
function App() {

    return (
        <>
            <GlobalStyle/>
            <Routers/>
        </>
    )
}

export default App
