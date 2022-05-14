import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar(){

    return(
        <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h3>
                <a href='/'>DSFilmes</a>
            </h3>
            <a href="https://github.com/andrephellipe" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/andrephellipe</p>
                </div>
            </a>
        </div>
    </nav>
</header>
    );

}

export default Navbar;