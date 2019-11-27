import Styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import BG from '../../assets/images/background.jpg'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
        font-family: 'Bebas Neue', cursive;
        font-family: 'Montserrat', sans-serif;
        background: url(${BG}) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
  }

  .counterDiv {
    margin-top: 2rem;

    @media (max-width: 1024px) {
      margin: 0;
      flex: 2.5 !important;
    }
  }
  
  .is-loading {
    color: ${props => props.theme.isLoadingColor};
    font-size: 3.6rem;

    @media (min-width: 320px) and (max-width: 1023px) {
      font-size: 2rem;
    }
   }

  .is-complete {
    font-size: 6rem;
    font-weight: bold;
    color: ${props => props.theme.primaryTextColor};
  } 

  .has-msg {
    margin: 1rem 0 0 0;
    font-size: 1rem;
    text-align: center;

    @media (min-width: 320px) and (max-width: 1023px) {
      font-size: 12px;
      padding: 0rem 1rem .5rem;
    }
  }

  .notify-text {
    text-align: center;

    @media (min-width: 320px) and (max-width: 1023px) {
      font-size: 12px;
      letter-spacing: .1rem !important;
    }

  }

  .top-div {
    @media (max-width: 1024px) {
      flex: 0 !important;
      padding-top: 8%;
    } 
  }
`

export const BGTransparent = Styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.main};
  opacity: .8;
`

export const Wrapper = Styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100vh;

`

export const Container = Styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100vh;
`

export const Grid = Styled.div`
  display: flex;
  flex: ${props => props.flex || 1};
  flex-direction: ${props => props.direction || 'row'}; 
  justify-content: ${props => props.justify || ''};
  align-items: ${props => props.align || ''};
`

export const Box = Styled.div`
  display: flex;
  flex: ${props => props.flex || 1};
  justify-content: ${props => props.justify || ''};
  flex-direction: ${props => props.direction || ''};
  align-items: ${props => props.align || ''};
  
  margin: ${props => props.margin || ''};

  & p {
    font-family: Montserrat;
    font-weight: bold;
    letter-spacing: .4rem;
    color: ${props => props.theme.primaryTextColor};
    text-transform: uppercase;
    margin: 0;
  }

  .input {
    background:  none;
    padding: 0;
    width: 35rem;
    height: 6rem;
    -webkit-border-top-left-radius: .5rem;
    -webkit-border-bottom-left-radius: .5rem;
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
    border-right: 0 !important;
    -webkit-border-right: none;
    -moz-border-right: none;
    -o-border-right: none;
    border: solid .2rem ${props => props.theme.primaryBorderColor};
    text-align: center;
    font-size: 1.4rem;
    color: ${props => props.theme.primaryTextColor};
    outline: none;
    z-index: 20;

    &::placeholder {
      color: ${props => props.theme.primaryTextColor};
      background: transparent;
      line-height: 6.1rem;

      @media (min-width: 320px) and (max-width: 1023px) {
        font-size: 1rem;
      }
    }

   @media (min-width: 320px) and (max-width: 1023px) {
    width: 15rem;
    height: 3.5rem;
   } 

   @media (max-width: 320px) {
    width: 13rem;
    height: 3.5rem;
   } 
  }
`

export const Img = Styled.img`
  position: absolute;
  left: -1rem;
  bottom: -1rem;
  opacity: ${props => props.theme.logoOpacity};
  z-index: 0;
  width: 27.3%;
  height: 83%;

  @media (min-width: 320px) and (max-width: 460px) {
    left: -3.5rem;
    bottom: 2rem;
    width: 80%;
    height: 75%;
  }
`

export const Title = Styled.div`
  font-family: Montserrat;
  font-size: 3.7rem;
  font-weight: 500;
  letter-spacing: 1rem;
  color: ${props => props.theme.primaryTextColor};
  text-transform: uppercase;

  @media (min-width: 320px) and (max-width: 1023px) {
    font-size: 1rem;
    margin-top: 1rem;
    letter-spacing: .8rem;
  }
`

export const CounterTick = Styled.div`
  text-align: center;
  margin: 0px 3rem;
  
  @media (min-width: 320px) and (max-width: 1023px) {
    margin: .8rem;
  }

  .title {
    font-family: 'Montserrat';
    font-size: .9rem;
    font-weight: bold;
    letter-spacing: .2rem;
    color: ${props => props.theme.primaryTextColor};

    @media (min-width: 320px) and (max-width: 1023px) {
      font-size: .5rem;
    }
  }

  .tick {
    font-family: 'Bebas Neue';
    font-size: 5.5rem;
    font-weight: bold;
    letter-spacing: .2rem;
    color: ${props => props.theme.primaryTextColor};

    @media (min-width: 320px) and (max-width: 1023px) {
      font-size: 2rem;
    }
  }
`

export const Button = Styled.button`
  background: ${props => props.theme.primaryTextColor};
  color: ${props => props.theme.primaryTextColor};
  width: 4.8rem;
  height: 6.4rem;  
  border: none;
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
  padding: 0;
  text-align: center;
  cursor: pointer;
  outline: none;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  

  & img {
    transition: all .5s;

    &:hover {
      transform: scale(1.5);

      @media (min-width: 320px) and (max-width: 1023px) {
        transform: scale(1.3);
      } 
    }
  }

  @media (min-width: 320px) and (max-width: 1023px) {
    width: 2.4rem;
    height: 3.9rem;
   } 
`

export const ToggleBtn = Styled.button`
    position: absolute;
    right: 2rem;
    top: 2rem;
    font-size: 3rem;
    background: transparent;
    border: none; 
    z-index: 3;
    cursor: pointer;
    outline: none;

    @media (min-width: 320px) and (max-width: 1023px) {
        right: 1rem;
        top: 0;
    }

    i {
      color: ${props => props.theme.primaryTextColor};
      font-size: 3rem;

      @media (min-width: 320px) and (max-width: 1023px) {
        font-size: 1rem;
      }
    }  
`

export const Form = Styled.form`
  display: flex;
  margin-top: 1rem;

  @media (min-width: 320px) and (max-width: 1023px) {
    margin-top: 1rem;
  }
`
