import { lazy, Suspense } from 'react';

import {HashRouter, Route, Routes} from 'react-router-dom';
 
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/singleComicPage/SingleComicPage'));
const SingleCharacterPage = lazy(() => import('../pages/singleCharacterPage/SingleCharacterPage'));

const App = () => {

    return (
        <HashRouter>
            <div className="app">
                <AppHeader/>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path={"/"} element={<MainPage/>}/>
                        <Route exact path={"/comics"} element={<ComicsPage/>}/>
                        <Route exact path={"/comics/:comicId"} element={<SingleComicPage/>}/>
                        <Route exact path={"/characters/:charId"} element={<SingleCharacterPage/>}/>
                    </Routes>
                </Suspense>
            </div>
        </HashRouter>
    )
}


export default App;