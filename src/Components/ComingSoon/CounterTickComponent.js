import React from 'react'
import { CounterTick } from './style'

const CounterTickComponent = ({ title, time }) => {
  return (
    <CounterTick>
      <div className="title">{title}</div>
      <div className="tick">{time}</div>
    </CounterTick>
  )
}

export default CounterTickComponent
