import { useArticles } from '../../hooks/useArticles'

import style from './style.module.css'

export function ArticleFeed() {
  const { articles, error, isLoading } = useArticles()

  return (
    <section className={style["container"]}>
      <h2>Feed</h2>

      <ul>
        {
          isLoading || error
          ? <h3>Loading</h3>
          : articles.map(
            (article) => {
              return (
                <li key={article.slug}>
                  <h3>{article.title}</h3>
                </li>
              )
            }
          )
        }
      </ul>
    </section>
  )
}