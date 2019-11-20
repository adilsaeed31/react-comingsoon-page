import React, { Fragment, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Countdown from 'react-countdown-now'
import Axios from 'axios'

import {
  GlobalStyle,
  Wrapper,
  Container,
  Grid,
  Img,
  Box,
  Title,
  BGTransparent,
  Button,
  ToggleBtn,
  Form,
} from './style'
import CounterTickComponent from './CounterTickComponent'

import Logo from '../../assets/images/logo.png'
import Check from '../../assets/images/check.png'

const theme = {
  main: '#d8b153',
  primaryTextColor: 'black',
  primaryBorderColor: 'black',
  logoOpacity: '.2',
  isLoadingColor: 'white',
}

const invertedTheme = {
  main: 'black',
  primaryTextColor: 'white',
  primaryBorderColor: 'white',
  logoOpacity: '1',
  isLoadingColor: 'black',
}

const ComingSoon = () => {
  const [mode, setMode] = useState(true)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasMsg, setHasMsg] = useState('')

  const handleSubmit = e => {
    setIsLoading(true)
    setHasMsg('')
    e.preventDefault()

    Axios.put(
      'https://api.sendgrid.com/v3/marketing/contacts',
      {
        contacts: [{ email }],
        list_ids: [],
      },
      {
        headers: {
          'access-control-allow-origin': '*',
        },
      }
    )
      .then(res => {
        console.log('res :', res)
        setIsLoading(false)
        setHasMsg('Received your notify request ... Thank you!')
      })
      .catch(err => {
        console.log('err :', err)
        setIsLoading(false)
        setHasMsg('Something went wrong please try again ... Thank you!')
      })
  }

  const Completed = () => <span className="is-complete">We are up now!</span>

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completed />
    }

    return (
      <Fragment>
        <CounterTickComponent title="Days" time={days} />
        <CounterTickComponent title="Hours" time={hours} />
        <CounterTickComponent title="Minutes" time={minutes} />
        <CounterTickComponent title="Seconds" time={seconds} />
      </Fragment>
    )
  }

  return (
    <ThemeProvider theme={mode ? theme : invertedTheme}>
      <Fragment>
        <GlobalStyle />
        <BGTransparent />
        <ToggleBtn
          onClick={e => {
            e.preventDefault()
            setMode(mode != true)
          }}
        >
          <i className="fa fa-adjust"></i>
        </ToggleBtn>
        <Wrapper id="main-wrapper">
          <Img src={Logo} />
          <Container>
            <Grid direction="column">
              <Box
                direction="column"
                justify="flex-end"
                align="center"
                flex="1.6"
              >
                <Title>Coming Soon</Title>
              </Box>
              <Box flex="1" justify="center" className="counterDiv">
                <Countdown
                  date={new Date('01/20/2020').getTime()}
                  renderer={renderer}
                />
              </Box>
              <Box direction="column" justify="flex-start" align="center">
                <p>Get Notified when it's ready</p>
                <Box flex="0">
                  <Form onSubmit={handleSubmit}>
                    <input
                      className="input"
                      placeholder="Enter your Email"
                      type="email"
                      required
                      onChange={e => setEmail(e.target.value)}
                    />
                    <Button disabled={isLoading}>
                      {isLoading ? (
                        <i className="is-loading fa fa-cog fa-spin"></i>
                      ) : (
                        <img
                          width="21"
                          height="21"
                          src={Check}
                          alt="Check Icon"
                        />
                      )}
                    </Button>
                  </Form>
                </Box>
                <p>{hasMsg}</p>
              </Box>
            </Grid>
          </Container>
        </Wrapper>
      </Fragment>
    </ThemeProvider>
  )
}

export default ComingSoon
