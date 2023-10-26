import errorIllustration from '../../assets/404-illustation.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorContainer = styled.div`
  background-color: ${colors.backgroundLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ErrorText = styled.p`
  font-size: bold;
  padding-top: 60px;
  padding-bottom: 60px;
`

function Error() {
  return(
    <ErrorContainer>
      <ErrorText>Oups...</ErrorText>
      <img src={errorIllustration} alt="illustration erreur 404" />
      <ErrorText>Il semblerait qu'il y ait un problème</ErrorText>
    </ErrorContainer>
  )
}

export default Error
