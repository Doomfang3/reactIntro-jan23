import { useEffect } from 'react'
import { createSearchParams, useParams, useSearchParams } from 'react-router-dom'

const RecipePage = () => {
  const { recipeId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    console.log(searchParams.get('hopper'))
    setTimeout(() => {
      setSearchParams(createSearchParams({ hopper: 'Hes alive' }))
    }, 2000)
  }, [searchParams])

  return (
    <div>
      <h1>Recipe Page of {recipeId}</h1>
      <p>{searchParams.get('hopper')}</p>
      <p>{searchParams.get('pizza')}</p>
    </div>
  )
}

export default RecipePage
