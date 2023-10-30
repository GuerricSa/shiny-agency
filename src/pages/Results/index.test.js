import { formatJobList } from './'
import { formatFetchParams } from './'

describe('Function formatJobList in Results', () => {
  it("met une virgule après un item qui n'est pas le dernier", () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  it('ne met pas de virgule sur le dernier élément', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('function formatFetchParams in Results', () => {
  it('ne met pas de & avant le premier parametre', () => {
    const expectedState = `a1=test`
    expect(formatFetchParams({1: "test"})).toEqual(expectedState)
  })
  it('met un & avant chaque paramètre sauf le 1er', () => {
    const expectedState = 'a1=test&a2=test2&a3=test3'
    expect(formatFetchParams({1: "test", 2: "test2", 3: "test3"})).toEqual(expectedState)
  })
})
