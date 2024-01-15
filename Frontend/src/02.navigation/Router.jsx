import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../03.globals/01.Pages/HomePage";
import Login from "../03.globals/01.Pages/Login"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login/>}/>
            
            
            // redirection automatique si la page n'existe pas
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Router;
