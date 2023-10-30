import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '@testing-library/react'

import Freelances from './'
import { ThemeProvider } from 'styled-components'

const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien Frontend',
    picture: ''
  },
  {
    name: 'Albus Dumbeldore',
    job: 'Magicien Fullstack',
    picture: ''
  }
]

const server = setupServer(
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    return res(ctx.json({freelancersList: freelancersMockedData}))
  })
)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe('test freelances page', () => {
  it('Should render withour crash', () => {
    render(
      <ThemeProvider>
        <Freelances />
      </ThemeProvider>
    )
    expect(screen.getByTestId('loader')).toBeTruthy()
  })
})
