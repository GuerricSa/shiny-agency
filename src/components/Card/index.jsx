import propTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useState } from 'react'
import { useTheme } from '../../utils/hooks/index'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
const CardLabel = styled.span`
color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
font-size: 22px;
  height: 20%;
  padding-top: 15px;
  padding-left: 10px;
`

const FreelanceInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  &:first-child {
    margin-bottom: 30px;
  }
`

const CardImage = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin-bottom: 50px;
`

const CardTitle = styled.div`
color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
font-size: 22px;
font-weight: normal;
align-self: center;
height: 25px;
display: flex;
align-items: center;

`

function Card({ label, title, picture }) {
  const { theme } = useTheme()
  let [isFavorite, setIsFavorite] = useState(false)

  return(
    <CardWrapper theme={theme} onClick={() => {
      setIsFavorite(!isFavorite)
      console.log('click', isFavorite)
    }}>
      <CardLabel theme={theme}>{label}</CardLabel>
      <FreelanceInfos>
        <CardImage src={picture} alt="freelance"/>
        <CardTitle theme={theme}>{isFavorite ? `⭐️${title}⭐️` : title}</CardTitle>
      </FreelanceInfos>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  picture: propTypes.string.isRequired
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
