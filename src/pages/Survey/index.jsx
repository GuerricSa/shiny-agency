import { useParams, Link } from 'react-router-dom'

function next(questionNumber) {
  const questionNumberInt = parseInt(questionNumber, 10)
  return (
    questionNumberInt +1
  )
}

function previous(questionNumber) {
  const questionNumberInt = parseInt(questionNumber, 10)
  return (
    questionNumberInt === 1 ? 1 : questionNumberInt - 1
  )
}

function Survey() {
  const { questionNumber } = useParams()

  return(
    <div>
      <h1>Questionnaire</h1>
      <h2>Question { questionNumber }</h2>
      <Link to={`/survey/${previous(questionNumber)}`}> précédent </Link>
      { questionNumber > 9 ? (
        <Link to='/results'> Résultats </Link>
      ) : (
        <Link to={`/survey/${next(questionNumber)}`}> suivant </Link>
      )}
    </div>
  )
}

export default Survey
