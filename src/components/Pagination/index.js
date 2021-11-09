import {Wrapper, Content} from "./Pagination.style";
import {useState} from "react";

const Pagination = ({setPage}) => {

    const nextPage = () => {
        setPage(prev => prev + 1)
    }
    return (
        <Wrapper>
            <Content>
                <button onClick={nextPage}>Suivant</button>
            </Content>
        </Wrapper>
    )
}

export default Pagination;
