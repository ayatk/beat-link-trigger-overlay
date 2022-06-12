import styled from 'styled-components'

const Container = styled.div`
  display: inline-grid;
  grid-gap: 16px;
  grid-template-columns: auto 1fr;
`

const InfoContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`

const Title = styled.div`
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
`

const Artist = styled.div`
  display: inline-block;
  font-size: 16px;
  color: #999;
`

export interface Props {
  title: string
  artist: string
}

const Track = ({ title, artist }: Props): JSX.Element => (
  <Container>
    <InfoContainer>
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
    </InfoContainer>
  </Container>
)
export default Track
