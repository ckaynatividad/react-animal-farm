import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header', () => {
  render(<App />)
  const linkElement = screen.getByText(/zodiac/i)
  expect(linkElement).toBeInTheDocument()
})
