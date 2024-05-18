import {Countries, Country} from "./Country.ts"
import {useFetch, UseFetchResult} from "../UseFetch.ts"

export type ApiCountriesResponse = {
  data: Countries,
  metadata: {
    total: number
  }
}

export function useFetchCountries(): UseFetchResult<Country> {
  return useFetch<Country, ApiCountriesResponse>({
    path: 'countries',
    processResponse: (result) => {
      return result.data
    },
  })
}
