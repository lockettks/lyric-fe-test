import styled from 'styled-components'
import {FiActivity, FiX} from 'react-icons/fi'

interface InfoPanelProps {
  onClose: () => void
}

export const InfoPanel = ({onClose}: InfoPanelProps) => (
  <Panel>
    <InfoPanelHeader>
      <PanelTitle>Welcome to Lyric Music</PanelTitle>
      <CloseIcon type="button" aria-label="Close panel" onClick={onClose}>
        <FiX />
      </CloseIcon>
    </InfoPanelHeader>

    <PanelCopy>
      We&apos;re thrilled to have you join us on this musical journey. Lyric
      Music is your gateway to a fresh and immersive way to enjoy the bands and
      artists you love. Whether you&apos;re searching for your all-time favorite
      tracks, exploring curated playlists crafted to fit every mood, or
      discovering new songs that will soon become your go-to anthems, Lyric Music
      is here to elevate your listening experience.
    </PanelCopy>

    <PanelCopy>
      Imagine having the perfect soundtrack for every moment of your life, from
      energizing workouts to peaceful evenings under the stars. With an intuitive
      interface designed to make finding music effortless and enjoyable,
      you&apos;ll spend less time searching and more time grooving.
    </PanelCopy>

    <PanelCopy>
      At Lyric Music, we&apos;re passionate about creating a community where music
      lovers like you can explore, connect, and celebrate the power of sound.
    </PanelCopy>

    <ComingSoon>
      <FiActivity />
      <ComingSoonText>
        <strong>COMING SOON</strong>
        <span>Check out what&apos;s new for 2025 from the Lyric team.</span>
      </ComingSoonText>
    </ComingSoon>
  </Panel>
)

const Panel = styled.aside`
  align-self: start;
  min-height: calc(100vh - 112px);
  padding: 28px 24px 24px;
  border-radius: 8px;
  background: #111213;
  color: #a7adaa;

  @media (max-width: 980px) {
    min-height: 0;
  }
`

const InfoPanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 30px;
`

const PanelTitle = styled.h1`
  margin: 0;
  color: #008f80;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.2;
`

const CloseIcon = styled.button`
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 0;
  padding: 0;
  background: transparent;
  color: #c9cccb;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    color: #f0f3f2;
  }

  &:focus-visible {
    outline: 2px solid #e7fffb;
    outline-offset: 2px;
  }
`

const PanelCopy = styled.p`
  margin: 0 0 24px;
  font-size: 14px;
  line-height: 1.65;
`

const ComingSoon = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 30px;
  padding: 18px 16px;
  border-radius: 7px;
  background: #191a1a;

  svg {
    width: 58px;
    height: 58px;
    flex: 0 0 auto;
    color: #008f80;
  }
`

const ComingSoonText = styled.div`
  display: grid;
  gap: 4px;
  min-width: 0;

  strong {
    color: #008f80;
    font-size: 15px;
    line-height: 1.2;
  }

  span {
    color: #9ca3a0;
    font-size: 12px;
    line-height: 1.35;
  }
`
