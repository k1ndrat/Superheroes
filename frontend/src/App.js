// import FormHero from "./components/FormHero";
import HeroPage from "./components/HeroPage";
import PostPage from "./components/PostPage";
import SuperHeroesList from "./features/superheroes/SuperHeroesList";
import EditPage from "./components/EditPage";
import Layout from "./components/Layout";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<SuperHeroesList />} />
                <Route path="/post">
                    <Route index element={<PostPage />} />
                    <Route path=":_id" element={<HeroPage />} />
                </Route>

                <Route path="/edit/:_id" element={<EditPage />} />
            </Route>
        </Routes>
    );
}
export default App;
