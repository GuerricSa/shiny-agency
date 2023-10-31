import Card from '../../components/Card/index'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/atoms'
import { useFetch, useTheme } from '../../utils/hooks/index'


const FreelancesContainer = styled.div`
  width: 60%;
  margin: auto;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center
`

const Title = styled.h1`
  margin-top: 60px;
  text-align: center;
  color: ${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')}
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
  const { data, isLoading, error } = useFetch('http://localhost:8000/freelances')
  const freelancersList = data?.freelancersList
  const { theme } = useTheme()

  if (error) {
    return <span>Oups, il y a eu un problème</span>
  }

  return(
    <FreelancesContainer>
      <Title
        theme={theme}
      >
        Trouvez votre prestataire</Title>
      <SubTitle>
        Chez shiny nous réunissons les meilleurs profils pour vous.
      </SubTitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid='loader'/>
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
