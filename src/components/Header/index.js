import React from "react";


import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
// import image from '../../images/no_image.jpg'

import {Wrapper, Content, LogoImg, TMDBLogoImg} from "./Header.style";
import {Link} from "react-router-dom";

function Header(){
    return(
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt={'tmdb-logo'}/>
            </Content>
        </Wrapper>
    )
}


export default Header;
