import styled from 'styled-components'
import colors from '../../utils/style/colors'
import HomeIllustration from '../../assets/home-illustration.svg'
import { Link } from "react-router-dom"

const StyledContainer = styled.div`
  margin-top: 40px;
  background-color: ${colors.backgroundLight};
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const HalfContainer = styled.div`
  width: 40%;
`

const StyledHomeIllustration = styled.img`
  width: 100%;
  max-height: 75vh;
`

const StyledCTA = styled(Link)`
  padding: 10px 50px;
  color: #8186a0;
  text-decoration: none;
  color: white; border-radius: 30px; background-color: ${colors.primary};
`

const CatchPhrase = styled.h2`
  font-size: 2.4rem;
`
function App() {
  return (
    <StyledContainer>
      <HalfContainer>
        <CatchPhrase>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</CatchPhrase>
        <StyledCTA to='/survey/1'> Faire le test </StyledCTA>
      </HalfContainer>
      <HalfContainer>
        <StyledHomeIllustration src={HomeIllustration} alt="illustration bannière page d'accueil" />
      </HalfContainer>
    </StyledContainer>
  );
}

export default App;
