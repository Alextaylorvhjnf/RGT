import { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('horizon-favorites')) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('horizon-favorites', JSON.stringify(favorites))
  }, [favorites])

  const isFavorite = (id) => favorites.includes(id)

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
