import response from './articles.json'

/**
 * @returns a list of all availble articles
 */
export function getAllArticles() {
  console.log("Fetching all articles")

  return response.articles
}

/**
 * Mock fetch request
 * @returns a list of all availble articles
 */
export async function getAllArticlesAsync() {
  console.log("Fetching all articles: Async")

  await sleepFor(200)
  return [...response.articles]
}












// ==== Bonus Tasks ====
// TODO: figure out how to implement
export function getArticle(id) {}

export function getArticlesWith(tag) {}

export function getArticlesPage(number) {}


// Utility

function sleepFor(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}