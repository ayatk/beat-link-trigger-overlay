import styled from '@emotion/styled'

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
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

const StyledCoverJacket = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`

export interface Props {
  title: string
  artist: string
  imageUrl: string
}

const Track = ({ title, artist, imageUrl }: Props): JSX.Element => (
  <Container>
    <StyledCoverJacket src={imageUrl} />
    <InfoContainer>
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
    </InfoContainer>
  </Container>
)
export default Track
