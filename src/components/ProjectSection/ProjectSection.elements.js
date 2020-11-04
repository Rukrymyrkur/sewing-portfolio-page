import styled from 'styled-components';
import bcg from '../../images/bcg.png';
import bcg2 from '../../images/bcg2.png';

export const SectionContainer = styled.div`
    color: #fff;
    padding: 0 0 0 0; 
    margin: 50px 50px 50px 50px;

    @media screen and (max-width: 991px){
        padding-right: 0px;
        padding-left: 0px;
        margin: 0 0 0 0;
    }
    @media screen and (max-width: 425px){
        padding-right: 0px;
        padding-left: 0px;
        margin: 0 0 0 0;
    }

    /* scroll-padding-top: 600px;
    scroll-margin: 100px;
    scroll-snap-align: start; */
`;

export const ProjectContainer = styled.div`
    background-image: ${({ lightBg }) => (lightBg ? `url(${bcg})` : `url(${bcg2})`)};
    display: grid;
    max-width: 75vw;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: max-content;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 40px 20px 10px 20px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    
    @media screen and (max-width: 991px){
        padding: 10px 10px 10px 10px;
        margin: 20px 0 0 0;
        min-width: 100vw;
    }
    @media screen and (max-width: 425px){
        display: block;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
        padding-bottom: 65px;
    }
`;

export const TitleWrapper = styled.div`
    grid-column: 3/span 3;
    grid-row: 1/span 1;

    @media screen and (max-width: 425px){
        display: block;
        }
`;

export const SubHeading = styled.h2`
    color: ${({ lightSubHeading }) => (lightSubHeading ? '#fff' : '#000')};
    z-index: 11;
    display: table;
    font-size: 3em;
    height: 100%;
    transform: skewY(5deg);
    font-family: 'Staatliches', serif;
    letter-spacing: 10px;
    line-height: 3rem;
    text-align: right;
    margin-top: 5px;
    filter: drop-shadow(10px 10px 10px black);

    @media screen and (max-width: 991px){
        letter-spacing: 10px;
        font-size: 2em;
        line-height: 2.5rem;
    }
    @media screen and (max-width: 425px){

    }
`;

export const Heading = styled.h1`
    background-color: ${({ lightText }) => (lightText ? '#000' : '#fff')};
    color: ${({ lightText }) => (lightText ? '#fff' : '#000')};
    z-index: 10;
    display: table;
    font-size: 6em;
    text-align: right;
    line-height: 6rem;
    transform: skewY(5deg);
    font-family: 'Staatliches', serif;
    letter-spacing: 10px;
    align-self: flex-end;
    margin-left: 200px;
    padding: 20px 30px 20px 30px;
    filter: drop-shadow(10px 10px 10px black);
    
    @media screen and (max-width: 1350px){
        margin-left: 0px;
    }
    @media screen and (max-width: 425px){
        font-size: 4em;
        line-height: 4rem;
        padding: 0 0 0 0;
        text-align: center;
    }
`;

export const DescriptionWrapper = styled.div`
    z-index: 10;
    align-self: auto;
    white-space: pre-wrap;

    &.wrapper-top{
    grid-column: 4/span 2;
    grid-row: 3/span 2;
}
    &.wrapper-middle{
    grid-column: 1/span 2;
    grid-row: 5/span 2;
}
    &.wrapper-bottom{
    grid-column: 4/span 2;
    grid-row: 8/span 2;
  }

@media screen and (max-width: 991px){
    display: grid;
    }
@media screen and (max-width: 425px){
    display: grid;
    grid-column: 1;
    margin-top: -100px;
}
`;

export const Description = styled.p`
    margin: 20px 20px 20px 20px;
    padding: 15px 15px 15px 15px;
    margin-bottom: 35px;
    font-size: 1rem;
    line-height: 1.2rem;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#fff' : '#000')};
    font-family: 'Fauna One', serif;
    letter-spacing: 1px;

    &.description-right {
        background: rgba(161, 8, 34, 0.8);

        @media screen and (max-width: 425px){
        }
    }
    &.description-left {
        background: rgba(161, 8, 34, 0.8);

        @media screen and (max-width: 425px){
        }
    }

    &:first-letter{
    color: white;
    background-color: black;
    float: left;
    font-family: Georgia;
    font-size: 60px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
    padding-bottom: 4px;
    margin-right: 10px;
}
`;

export const ImgWrapper = styled.div`
    
    &.img-wrapper-main{
    grid-column: 1/span 5;
    grid-row: 1/span 4;
}
    &.img-wrapper-middle{
    grid-column: 2/span 4;
    grid-row: 5/span 2;
    align-self: flex-end;
}
    &.img-wrapper-bottom{
    grid-column: 1/span 4;
    grid-row: 8/span 2;
}
`;
export const Img = styled.img`

    &.img-main{
        width: 70%;
        height: 50%;
        min-width: 70%;
        min-height: 800px;
        object-fit: cover;
        object-position: left;
        
        @media screen and (max-width: 425px){
            width: 100%;
            padding: 20px;
            object-fit: fit;
            height: 50%;
            min-width: 90%;
            min-height: 600px;        
        }
}
    &.img-middle{
        width: 100%;
        min-height: 800px;
        object-fit: cover;
        object-position: center;

        @media screen and (max-width: 425px){
            width: 100%;
            padding: 20px;
            object-fit: fit;
            height: 50%;
            min-width: 90%;
            min-height: 600px;
        }
}
    &.img-bottom{
        width: 100%;
        height: 30%;
        min-width: 70%;
        min-height: 800px;
        object-fit: cover;
        object-position: left;

        @media screen and (max-width: 425px){
            width: 100%;
            padding: 20px;
            object-fit: fit;
            height: 50%;
            min-width: 90%;
            min-height: 600px;
        }
}
`;


