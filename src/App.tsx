import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import HomePage from "./HomePage.tsx";
function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path={"/"} element={<HomePage/>}/>
                </Routes>
            </Router>


        </>
)
}

export default App
