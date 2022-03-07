import {Head,NavLink} from './styles'
import  logo from '../img/logoHype.png';
import {Link} from 'react-router-dom';


export default function Index(){
    return(
        <>
        <Head>
            <img src={logo}/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Sobre">Sobre nós</NavLink>
            <NavLink to="/Vagas">Vagas</NavLink>
        </Head>
           </>
    )
}