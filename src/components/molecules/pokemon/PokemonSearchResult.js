import { Pagination } from '../Pagination'
import { PokemonDetail } from './PokemonDetail'
import { PokemonList } from './PokemonList'


export const PokemonSearchResult = ({ data, page, setPage }) => {
  if (data?.count) {
    return (
      <>
        <PokemonList pokemonList={data.results} />
        <Pagination count={data.count} page={page} setPage={setPage} />
      </>
    )
  } else if (data?.name) {
    return <PokemonDetail pokemon={data} />
  }

  return null
}
