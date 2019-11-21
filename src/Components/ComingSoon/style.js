import Styled, { createGlobalStyle } from 'styled-components'
import BG from '../../assets/images/background.jpg'

const height = window.innerHeight

window.addEventListener('resize', () => {
  document.getElementById(
    'main-wrapper'
  ).style.cssText = `height: ${window.innerHeight}px`
})

export const GlobalStyle = createGlobalStyle`
  html, body {
        margin: 0;
        padding: 0; 
        font-family: 'Bebas Neue', cursive;
        font-family: 'Montserrat', sans-serif;
        background: url(${BG}) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        width: 100%;
        height: ${height}px;
  }

  .counterDiv {
    margin-top: 20px;
  }
  
  .is-loading {
    color: ${props => props.theme.isLoadingColor};
    font-size: 36px;
   }

  .is-complete {
    font-size: 60px;
    font-weight: bold;
    color: ${props => props.theme.primaryTextColor};
  } 

  .has-msg {
    margin-top: 12px !important;

    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 10px !important;
      text-align: center;
    } 
  }
  .top-div {
    @media screen and (min-width: 320px) and (max-width: 768px) {
      flex: 0 !important;
      padding-top: 80px;

      .cs-text {
        font-size: 20px;
        letter-spacing: 10px;
      }
    } 
  }

  .bottom-div {
    @media screen and (min-width: 320px) and (max-width: 768px) {
      flex: 1  !important;
      padding-bottom: 40px;
    } 

    @media (min-width: 1024px) {
      flex: 1  !important;
      padding-bottom: 40px;
    }

    @media (min-width: 1280px) {
      flex: 1  !important;
      padding-bottom: 40px;
    }

    @media (min-width: 1366px) {
      flex: 1  !important;
      padding-bottom: 40px;
    }

    @media (min-width: 1920px) {
      flex: 1  !important;
      padding-bottom: 100px;
    }

    @media (min-width: 2560px) {
      flex: 1  !important;
      padding-bottom: 100px;
    }
  }

  .notify-text {
    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 12px !important;
    }
  }
  
`

export const BGTransparent = Styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.main};
  opacity: .8;  

`

export const Wrapper = Styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: ${height}px;
`

export const Container = Styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;
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

  & p {
    font-family: Montserrat;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 4px;
    color: ${props => props.theme.primaryTextColor};
    text-transform: uppercase;
    margin: 50px 0px 0px 0px;
  }

  .input {
    background:  none;
    padding: 0;
    width: 397px;
    height: 60px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: none;
    border: solid 2px ${props => props.theme.primaryBorderColor};
    text-align: center;
    font-size: 14px;
    color: ${props => props.theme.primaryTextColor};
    outline: none;

    &::placeholder {
      color: ${props => props.theme.primaryTextColor};
       background: transparent;
       line-height: 61px;
    }

    @media screen and (min-width: 320px) and (max-width: 768px) {
      width: 267px;
      z-index: 1000;
    }
  }
`

export const Img = Styled.img`
  position: absolute;
  left: -10px;
  bottom: -10px;
  opacity: ${props => props.theme.logoOpacity};
 
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 300px;
    height: 77%;
    margin-left: -3.2em;
  }

  @media (min-width: 1024px) {
    width: 230px;
    height: 560px;
  }

  @media (min-width: 1280px) {
    width: 360px;
    height: 600px;
  }

  @media (min-width: 1366px) {
    width: 380px;
    height: 660px;
  }

  @media (min-width: 1920px) {
    width: 520px;
    height: 920px;
  }

  @media (min-width: 2560px) {
    width: 690px;
    height: 1135px;
  }
`

export const Title = Styled.div`
  font-family: Montserrat;
  font-size: 2.5em;
  font-weight: 500;
  letter-spacing: 17.5px;
  color: ${props => props.theme.primaryTextColor};
  text-transform: uppercase;

  @media (min-width: 1920px) {
    font-size: 3.7em;
  }

  @media (min-width: 1366px) {
      letter-spacing: .5em;
      margin-left: .4em;
    }
`

export const CounterTick = Styled.div`
  text-align: center;
  margin: 0px 35px;
  
  @media (min-width: 320px) and (max-width: 768px) {
    margin: 0 10px;
  }

  .title {
    font-family: 'Montserrat';
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${props => props.theme.primaryTextColor};

    @media (min-width: 1920px) {
      font-size: 1.1em;
    }

    @media (min-width: 320px) and (max-width: 768px) {
      font-size: 10px !important;
    }
  }

  .tick {
    font-family: 'Bebas Neue';
    font-size: 5em;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${props => props.theme.primaryTextColor};

    @media (min-width: 320px) and (max-width: 1023px) {
      font-size: 60px !important;
    }
    
    @media (min-width: 1920px) {
      font-size: 8em;
    }
  }
`

export const Button = Styled.button`
  background: ${props => props.theme.primaryTextColor};
  color: ${props => props.theme.primaryTextColor};
  width: 48px;
  height: 64px;  
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0;
  text-align: center;
  cursor: pointer;
  outline: none;

  & img {
    margin-top: 3px;
    transition: all .5s;

    &:hover {
      transform: scale(1.5);
    }
  }
`

export const ToggleBtn = Styled.button`
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 36px;
    background: transparent;
    border: none; 
    z-index: 3;
    cursor: pointer;
    outline: none;

    i {
      color: ${props => props.theme.primaryTextColor}
    }
`

export const Form = Styled.form`
  display: flex;
  margin-top: 10px;
`
