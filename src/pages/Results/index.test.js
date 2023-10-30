import { formatJobList } from './'

describe('Function formatJobList in Results', () => {
  test('ceci est mon premier test', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  test('ne met pas de virgule sur le dernier élément', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})
