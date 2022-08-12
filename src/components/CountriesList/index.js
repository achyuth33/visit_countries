import {
  ListItem,
  CountryName,
  VisitedText,
  VisitedButton,
} from './styledComponents'

const CountriesList = props => {
  const {countryDetails, onClickVisitButton} = props
  const {id, name, isVisited} = countryDetails
  const text = isVisited ? 'Visited' : 'Visit'

  const onClickButton = () => {
    onClickVisitButton(id)
  }

  return (
    <ListItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>{text}</VisitedText>
      ) : (
        <VisitedButton
          type="button"
          bgColor={isVisited}
          color={isVisited}
          onClick={onClickButton}
        >
          {text}
        </VisitedButton>
      )}
    </ListItem>
  )
}

export default CountriesList
