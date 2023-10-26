import Card from '../../components/Card/index'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useState, useEffect } from 'react'
import Loader from '../../utils/atoms'


const FreelancesContainer = styled.div`
  width: 60%;
  margin: auto;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const Title = styled.h1`
  margin-top: 60px;
  text-align: center
`

const SubTitle = styled.h3`
  color: ${colors.secondary};
  margin-top: 50px;
  margin-bottom: 100px;
  text-align: center;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const [freelancersList, setFreelancersList] = useState([])
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchFreelances() {
      setIsDataLoading(true)
      try {
        const response = await fetch('http://localhost:8000/freelances')
        const { freelancersList } = await response.json()
        setFreelancersList(freelancersList)
      }
      catch(err) {
        console.log(err)
        setError(true)
      }
      finally {
        setIsDataLoading(false)
      }
    }
    fetchFreelances()
  }, [])

  if (error) {
    return <span>Oups, il y a eu un problème</span>
  }

  return(
    <FreelancesContainer>
      <Title>Trouvez votre prestataire</Title>
      <SubTitle>Chez shiny nous réunissons les meilleurs profils pour vous.</SubTitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ): (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </FreelancesContainer>
  )
}

export default Freelances
