import Card from '../../components/Card/index'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

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

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },
]

function Freelances() {
  return(
    <FreelancesContainer>
      <Title>Trouvez votre prestataire</Title>
      <SubTitle>Chez shiny nous réunissons les meilleurs profils pour vous.</SubTitle>
      <CardsContainer>
        {freelanceProfiles.map((freelance, index) => (
          <Card
            key={`${freelance.name}-${index}`}
            label={freelance.jobTitle}
            title={freelance.name}
          />
        ))}
      </CardsContainer>
    </FreelancesContainer>
  )
}

export default Freelances
