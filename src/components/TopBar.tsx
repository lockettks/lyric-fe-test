import styled from 'styled-components'
import {FiBell, FiMessageCircle, FiSearch, FiSettings} from 'react-icons/fi'

const genrePreviewItems = ['All', 'Country', 'Rock', 'Pop']

export const TopBar = () => (
  <TopBarContainer>
    <BrandMark src="/sources/lyric_lg_rgb_mnt_wht.png" alt="Lyric Music" />

    <GenrePreview aria-label="Genre filters preview">
      {genrePreviewItems.map((item, index) => (
        <GenrePill key={item} $active={index === 0} aria-disabled="true">
          {item}
        </GenrePill>
      ))}
    </GenrePreview>

    <SearchPreview aria-label="Search preview" aria-disabled="true">
      <FiSearch />
    </SearchPreview>

    <HeaderIcons aria-label="Header actions preview">
      <IconButton type="button" aria-label="Notifications" disabled>
        <FiBell />
      </IconButton>
      <IconButton type="button" aria-label="Settings" disabled>
        <FiSettings />
      </IconButton>
      <IconButton type="button" aria-label="Messages" disabled>
        <FiMessageCircle />
      </IconButton>
    </HeaderIcons>
  </TopBarContainer>
)

const TopBarContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 18px;
  max-width: 1280px;
  min-height: 68px;
  margin: 0 auto 22px;
  padding: 14px 22px;
  border-radius: 8px;
  background: #101112;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }

  @media (max-width: 520px) {
    gap: 12px;
    padding: 14px;
  }
`

const BrandMark = styled.img`
  width: 108px;
  height: auto;
  flex: 0 0 auto;
`

const GenrePreview = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;

  @media (max-width: 520px) {
    order: 3;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 2px;
  }
`

const GenrePill = styled.span<{$active?: boolean}>`
  min-width: 72px;
  padding: 8px 18px;
  border-radius: 999px;
  background: ${({$active}) => ($active ? '#008b7b' : '#1b1c1d')};
  color: ${({$active}) => ($active ? '#eefdf9' : '#c1c5c4')};
  font-size: 14px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
`

const SearchPreview = styled.div`
  display: flex;
  align-items: center;
  width: min(170px, 18vw);
  min-width: 120px;
  height: 32px;
  margin-left: auto;
  padding: 0 12px;
  border-radius: 999px;
  background: #1a1b1b;
  color: #656b69;

  svg {
    width: 17px;
    height: 17px;
  }

  @media (max-width: 900px) {
    margin-left: 0;
    flex: 1 1 180px;
  }

  @media (max-width: 520px) {
    flex-basis: calc(100% - 118px);
    min-width: 0;
  }
`

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex: 0 0 auto;
`

const IconButton = styled.button`
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 0;
  padding: 0;
  background: transparent;
  color: #f0f3f2;
  cursor: default;

  svg {
    width: 23px;
    height: 23px;
  }

  &:disabled {
    opacity: 1;
  }
`
