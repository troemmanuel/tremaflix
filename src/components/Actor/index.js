import React from "react";
//Styles

import {Wrapper, Image} from "./Actor.style";

const Actor = ({name, charater, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb'/>
        <h3>{name}</h3>
        <p>{charater}</p>
    </Wrapper>
)

export default Actor;
