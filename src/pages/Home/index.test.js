import { MemoryRouter } from 'react-router-dom'
import Home from './'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context/index'

describe('testing home', () => {
  it('testing title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', {
      level: 2,
      text: "Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents"
    })).toBeTruthy()
  })
})
