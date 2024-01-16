import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../03.globals/01.Pages/HomePage";
import Login from "../03.globals/01.Pages/Login"
import RecipePageDetails from "../03.globals/01.Pages/RecipePageDetails";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/recipes/:id" element={<RecipePageDetails />} />
            
            
            // redirection automatique si la page n'existe pas
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Router;
