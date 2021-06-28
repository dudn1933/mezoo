import styled from "styled-components"
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../../util/GlobalProvider';

const LatestNews = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { currentScreenSize, newsBar } = globalState;

    useEffect(() => {
        const clickCheck = (event) => {
            const target = event.target.closest('.newsBox');
            if(!target) globalDispatch({type: 'newsView', payload: {show: false}})
        };

        window.addEventListener('click', clickCheck);
        return () => window.removeEventListener('click', clickCheck);
    },[]);

    const news = () => {
        const title = 'News';
        return [...title].map((String,i) => {
            return <StyledSideTitle key={i}>{String}</StyledSideTitle>
        })
    }

    const onClickEvent = () => {
        globalDispatch({type: 'newsView', payload: {view: !newsBar.view}});
    }

    return (
        <StyledLatestNews>
            <StyledNewsToggle className="newsBox" onClick={onClickEvent} showNews={newsBar.view} screenSize={currentScreenSize}>
                {news()}
            </StyledNewsToggle>
            <StyledNewsBox className="newsBox" showNews={newsBar.view} screenSize={currentScreenSize}>
                <StyledTitle>Latest News</StyledTitle>
                <div>최신 뉴스</div>
            </StyledNewsBox>
        </StyledLatestNews>
    )
}

export default LatestNews

const StyledLatestNews = styled.div`
    position: absolute;
    z-index: 2;
    bottom:30%;
    width:100%;
    height:40vh;
    background-color: transparent;
`;

const StyledNewsToggle = styled.div`
    position: absolute;
    z-index: 4;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(1,4fr);
    align-items: center;
    width:30px;
    height:12vh;
    left:${({showNews, screenSize}) => showNews ? `${screenSize-30}px` : '0%'};
    background-color: #cf227e;
    text-align: center;
    color: white;
    border-radius: 0 10px 10px 0;
    transition: all 0.5s ease-in-out;
`;

const StyledNewsBox = styled.div`
    position: absolute;
    z-index: 3;
    text-align: center;
    background-color: white;
    width:${({screenSize}) => `${screenSize-30}px`};
    left:${({showNews,screenSize}) => showNews ? '0%' : `-${screenSize-30}px`};
    height:40vh;
    transition: all 0.5s ease-in-out;
`;

const StyledSideTitle = styled.div`


`;

const StyledTitle = styled.div`
    font-size: 30px;
    font-style: normal;
    line-height: 1.2;
    text-transform: none;
`;

