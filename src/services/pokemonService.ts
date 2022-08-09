import Api from "@/api"
import type { AxiosResponse } from "axios"

export const getPokemon = async (name: string) => {
  try {
    const response: AxiosResponse = await Api.get(`pokemon/${name}`)
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

export const getPokemonList = async () => {
  try {
    const response: AxiosResponse = await Api.get(`pokemon?limit=905&offset=0`)
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}