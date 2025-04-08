import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'

describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })

  it('renders a subheading', () => {
    render(<Hero />)

    const subheading = screen.getByRole('heading', { level: 2 }) // adjust level if needed

    expect(subheading).toBeInTheDocument()
  })

  it('renders a call-to-action button', () => {
    render(<Hero />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })

  it('renders a hero image', () => {
    render(<Hero />)

    const image = screen.getByRole('img') // assumes the image has alt text

    expect(image).toBeInTheDocument()
  })
})
