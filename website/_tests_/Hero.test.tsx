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
    const subheading = screen.getByText((content) =>
      content.startsWith("You're on a mission to build exceptional tech teams")
    )    
    expect(subheading).toBeInTheDocument()
  })

  it('renders a call-to-action button', () => {
    render(<Hero />)
    const button = screen.getByRole('button', { name: /go now/i })
    expect(button).toBeInTheDocument()
  })

  it('renders a hero image', () => {
    render(<Hero />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })
})
