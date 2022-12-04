import { PAGINATION } from '../../src/constants/pagination'

describe('Search ', () => {
  it(`loads ${PAGINATION.PAGE_SIZE} elements when search input is empty`, () => {
    cy.visit('/')

    cy.get('[data-cy="pokemon-list"]').should('exist').
      children().
      should('have.length', PAGINATION.PAGE_SIZE)
  })

  it('returns existing pokemon', () => {
    const pokemon = 'pikachu'

    cy.get('[data-cy="search-bar"]').type(pokemon)
    cy.get('[data-cy="search-result"]').contains(pokemon)
  })
})
