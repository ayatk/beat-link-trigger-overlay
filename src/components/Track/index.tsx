import { SlideLeft } from '../../keyframe'
import { useMachine } from '@xstate/react'
import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { createMachine, State } from 'xstate'

export interface Props {
  playing: boolean
  title: string
  artist: string
  imageUrl: string
}

type TransitionContext = unknown

type TransitionState = State<TransitionContext, TransitionEvent, TransitionTypestate>

type TransitionEvent = { type: 'NEXT' } | { type: 'END' } | { type: 'PLAY' } | { type: 'STOP' }

type TransitionTypestate =
  | {
      value: 'hide'
      context: TransitionContext
    }
  | {
      value: 'slideIn'
      context: TransitionContext
    }
  | {
      value: 'visible'
      context: TransitionContext
    }
  | {
      value: 'slideOut'
      context: TransitionContext
    }

const transitionMachine = createMachine<TransitionContext, TransitionEvent, TransitionTypestate>({
  id: 'transition',
  initial: 'hide',
  states: {
    hide: {
      on: {
        NEXT: { target: 'slideIn' },
      },
    },
    slideIn: {
      on: {
        NEXT: { target: 'visible' },
      },
    },
    visible: {
      on: {
        NEXT: { target: 'slideOut' },
      },
    },
    slideOut: {
      on: {
        END: { target: 'hide' },
        NEXT: { target: 'slideIn' },
      },
    },
  },
})

const Track = ({ playing = false, title, artist, imageUrl }: Props): JSX.Element => {
  const [state, send] = useMachine(transitionMachine)

  const onAnimationEnd = () => {
    state.matches('slideOut') && !playing ? send('END') : send('NEXT')
  }

  useEffect(() => {
    if (playing) {
      send('NEXT')
    } else {
      if (state.matches('visible')) {
        send('NEXT')
      }
    }
  }, [playing])

  return (
    <Container>
      <Hidden>
        <StyledCoverJacket state={state} src={imageUrl} onAnimationEnd={onAnimationEnd} />
      </Hidden>
      <InfoContainer>
        <Hidden>
          <Title state={state}>{title}</Title>
        </Hidden>
        <Hidden>
          <Artist state={state}>{artist}</Artist>
        </Hidden>
      </InfoContainer>
    </Container>
  )
}

const SlideIn = css`
  animation: ${SlideLeft(true)} 0.7s ease-out 1s backwards;
`
const SlideOut = css`
  animation: ${SlideLeft(false)} 0.7s ease-in 0.8s backwards;
`

const Container = styled.div`
  display: inline-grid;
  grid-gap: 16px;
  grid-template-columns: auto 1fr;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div<{ state: TransitionState }>`
  display: inline-block;
  font-size: 24px;
  font-weight: bold;

  ${({ state }) => {
    switch (state.value) {
      case 'hide':
        return css`
          visibility: hidden;
        `
      case 'slideIn':
        return SlideIn
      case 'slideOut':
        return SlideOut
      case 'visible':
        return css`
          visibility: visible;
        `
    }
  }}
`

const Artist = styled.div<{ state: TransitionState }>`
  display: inline-block;
  font-size: 16px;
  color: #999;

  ${({ state }) => {
    switch (state.value) {
      case 'hide':
        return css`
          visibility: hidden;
        `
      case 'slideIn':
        return SlideIn
      case 'slideOut':
        return SlideOut
      case 'visible':
        return css`
          visibility: visible;
        `
    }
  }}
`

const StyledCoverJacket = styled.img<{ state: TransitionState }>`
  width: 80px;
  height: 80px;
  border-radius: 4px;

  ${({ state }) => {
    switch (state.value) {
      case 'hide':
        return css`
          visibility: hidden;
        `
      case 'slideIn':
        return SlideIn
      case 'slideOut':
        return SlideOut
      case 'visible':
        return css`
          visibility: visible;
        `
    }
  }}
`

const Hidden = styled.div`
  overflow: hidden;
`

export default Track
