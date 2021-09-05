import styled from 'styled-components'

export interface Props {
  title: string
  artist: string
  imageUrl: string
}

const Track = ({ title, artist, imageUrl }: Props): JSX.Element => {
  return (
    <Container>
      <StyledCoverJacket src={imageUrl} />
      <InfoContainer>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </InfoContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: auto 1fr;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const Artist = styled.div`
  font-size: 16px;
  color: #999;
`

const StyledCoverJacket = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`

export default Track
