import React from 'react'
import './Main.css'

import { animals } from '../../data'

import Animal from '../Animal/Animal'

import background from '../../background.png'

export default function Main() {
  const styles = { backgroundImage: `url(${background})` }
  return (
    <main style={styles}>
      {animals.map((animal) => (
        <Animal key={animal.key} {...animal} />
      ))}
    </main>
  )
}
