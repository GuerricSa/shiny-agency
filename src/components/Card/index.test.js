import Card from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context/index'

describe('testing component Card', () => {
  it('testing picture and title', async () => {
    render(
      <ThemeProvider>
        <Card
          picture='../../assets/profile.png'
          title= 'title for test'
          label='label for test'
        />
      </ThemeProvider>
    )
    expect(screen.getByText(/title/i).textContent).toBe('title for test')
    expect(screen.getByRole('img').src).toBe('http://localhost/assets/profile.png')
  })
  it('should add ⭐️ when clicking on card', () => {
    render(
      <ThemeProvider>
        <Card
          picture='../../assets/profile.png'
          title= 'title for test'
          label='label for test'
        />
      </ThemeProvider>
    )
    const cardImageForCLick = screen.getByRole('img')
    expect(screen.getByText(/title/i).textContent).toBe('title for test')
    fireEvent.click(cardImageForCLick)
    expect(screen.getByText(/title/i).textContent).toBe('⭐️title for test⭐️')

  })
})
