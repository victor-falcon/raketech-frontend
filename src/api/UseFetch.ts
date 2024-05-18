import {reactive} from "vue"

export type UseFetchRequest<T, K> = {
  path: string,
  processResponse: (result: K) => Array<T>,
}

export type UseFetchResult<T> = {
  isLoading: boolean,
  isError: boolean,
  error: null | string,
  data: Array<T>,
}

export function useFetch<T, K>({path, processResponse}: UseFetchRequest<T, K>): UseFetchResult<T> {
  const data: UseFetchResult<T> = reactive({
    isLoading: true,
    isError: false,
    error: null,
    data: [],
  })

  fetch(`${import.meta.env.VITE_API_BASE_PATH}/${path}`)
    .then(res => res.json())
    .then(result => {
      Object.assign(data, {
        isLoading: false,
        data: processResponse(result)
      })
    })
    .catch(err => {
      Object.assign(data, {
        isLoading: false,
        isError: true,
        error: err.toString()
      })
    })

  return data
}
