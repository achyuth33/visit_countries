import styled from 'styled-components'

export const VisitedCountriesListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  margin: 5px;
  max-width: 350px;
  max-height: 300px;
`

export const CountriesImage = styled.img`
  height: 70%;
  width: 100%;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 20%;
  width: 100%;
`

export const Name = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  margin: 5px;
`

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  height: 35px;
  width: 100px;
  border-radius: 10px;
  border: 1px solid #94a3b8;
  margin: 5px;
  outline: none:
  cursor: pointer;
`
