import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'

function formatQueryParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstAnswer = index === 0
    const separator = isFirstAnswer ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber] ? 1 : 0}`
  }, '')
}

function Results() {
  const { answers } = useContext(SurveyContext)
  const queryParams = formatQueryParams(answers)
  console.log(queryParams)
  const { data, isLoading, error } = useFetch(`http://localhost8000/results?${queryParams}`)

  console.log(data)

  return (
    <div>Voici les résultats</div>
  )
}

export default Results
