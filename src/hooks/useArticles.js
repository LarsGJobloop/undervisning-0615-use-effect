import { useState, useEffect } from "react"
import { getAllArticlesAsync } from "../data/articlesHandler"

export function useArticles() {
  const [articles, setArticles] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)
  
  useEffect(
    () => {
      fetchArticles()
    },
    []
  )

  // Async await syntaxt
  async function fetchArticles() {
    const data = await getAllArticlesAsync()

    setArticles(data)
  }

  return {
    articles,
    isLoading,
    error,
  }
}