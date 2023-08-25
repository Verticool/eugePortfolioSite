import AppHeader from "../appHeader/AppHeader";
import NavBar from '../navBar/NavBar';
import AppShowcase from "../appShowcase/AppShowcase";
import AppTech from "../appTech/AppTech";
import AppContact from "../appContact/AppContact";
import AppFooter from "../appFooter/AppFooter";

import { BrowserRouter as Router } from 'react-router-dom';
// import Spinner from '../spinner/Spinner';




const App = () => {
    return (
        <Router>
            <div className="app" id="modal-root">
                <div className="container">
                    <NavBar />
                    <AppHeader />
                    <AppShowcase />
                    <AppTech />
                    <AppContact />
                    <AppFooter />
                </div>
            </div>
        </Router>

    )
}

export default App;