import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './pages/Header/index';
import Main from './pages/Main/index';
import Vagas from './pages/Vagas/index';
import Sobre from './pages/Sobre/index';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/sobre"} element={<Sobre/>}/>
              <Route path={'/vagas'} element={<Vagas/>}/>
            </Routes>

        </BrowserRouter>


    );
}