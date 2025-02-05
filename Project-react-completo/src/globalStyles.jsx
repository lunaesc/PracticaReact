import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
    }
`;
export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 30px;

    @media screen and (max-width: 960px){
        padding:0 30px ;
    }
`;
export const MainHeading = styled.h1`
    font-size: clamp(2rem, 6vw, 4.5rem);
    margin-bottom: 2rem;
    color: ${({inverse}) => (inverse ? '$403ae3' : '#fff' )};
    width: 100%;
    letter-spacing: 4px;
    text-align: center;
   
`;

export const Heading = styled.h2`
    font-size: 1.3rem, 13vw, 3.1rem;
    margin: ${({margin}) => (margin ? margin : '')};
    margin-bottom: ${({mb}) => (mb ? mb : '')};
    margin-top: ${({mt}) => (mt ? mt : '')};
    color: ${({inverse}) => (inverse ? '$403ae3' : '#fff')};
    letter-spacing: 0.4rem;
    line-height: 2.06;
    text-align: center;
    width: ${({width}) => (width ? width : '100%')};
`;
export const TextWrapper = styled.span`
   color: ${({ color }) => (color ? color : '')};
    font-size: ${({ size}) => ( size ? size : '')};
 

`;
export const Section = styled.section``;
export const Row = styled.div`
    display: flex;
   
`;


export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({justify}) => ( justufy ? justify : '')};
    align-items: ${({align}) => (align ? align :  '')};
    gap: ${({ gap}) => (gap ? gap :  '')};
    padding: ${({ padding }) => ( padding ? padding : '')};
    margin: ${({ margin }) => ( margin ? margin : '')};
    position: ${({ position}) => ( position  ? position : '')};
    width: ${({width}) => ( width ? width : 'auto')};
    min-width: ${({  minWidth }) => ( minWidth  ? minWidth : 'auto')};
    max-width: ${({maxWidth}) => ( maxWidth ? maxWidth : 'auto')};
    height: ${({ height }) => ( height ? height : 'auto')};
    max-height: ${({maxHeight}) => ( maxHeight ? maxHeight  : 'auto')};
    min-height: ${({minHeight}) => ( minHeight ? minHeight : 'auto')};
`;

export const Button = styled.button`
    border-radius: 4px;
    background:none ;
    white-space: nowrap;
    padding: 10px 20px;
    font-size: 16px;
    color: black;
    outline: none;
    border: 2px solid #fff;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:before {
        background: #fff ;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        transition: all 0.6s ease;
        width: 100%;
        height: 0%;
        transform: translate(-50%, -50%) rotate(45deg);
 }
        &:hover:before {
            height: 500%;
        }

        &:hover {
            color: black;
        }
   
`;

export default GlobalStyle