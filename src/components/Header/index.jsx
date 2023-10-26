import { Link } from "react-router-dom"
import logoDark from '../../assets/dark-logo.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledNav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
`

const StyledLogo = styled.img`
  height: 100%;
`

const StyledRightSide = styled.div`
  display: flex;

`

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`


function Header() {
  return(
    <StyledNav>
      <StyledLogo src={logoDark} alt="dark-logo.png" />
      <StyledRightSide>
        <StyledLink to='/'> Accueil </StyledLink>
        <StyledLink to='/freelances'> Profils </StyledLink>
        <StyledLink to='/survey/1' $isFullLink> Faire le test </StyledLink>
      </StyledRightSide>
    </StyledNav>
  )
}

export default Header;
