import {useRef} from 'react'
import styled from 'styled-components'
import {FiBell, FiMessageCircle, FiSearch, FiSettings, FiX} from 'react-icons/fi'

interface TopBarProps {
  genres: string[]
  searchQuery: string
  selectedGenre: string
  onSearchChange: (query: string) => void
  onGenreChange: (genre: string) => void
}

const capitalizeFirstLetter = (value: string) =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`

export const TopBar = ({
  genres,
  searchQuery,
  selectedGenre,
  onSearchChange,
  onGenreChange,
}: TopBarProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const clearSearch = () => {
    onSearchChange('')
    searchInputRef.current?.focus()
  }

  return (
    <TopBarContainer>
      <BrandMark
        src={`${import.meta.env.BASE_URL}sources/lyric_lg_rgb_mnt_wht.png`}
        alt="Lyric Music"
      />

      <GenreFilters aria-label="Genre filters">
        <GenrePill
          type="button"
          $active={selectedGenre === 'all'}
          onClick={() => onGenreChange('all')}
        >
          All
        </GenrePill>
        {genres.map((genre) => (
          <GenrePill
            key={genre}
            type="button"
            $active={selectedGenre === genre}
            onClick={() => onGenreChange(genre)}
          >
            {capitalizeFirstLetter(genre)}
          </GenrePill>
        ))}
      </GenreFilters>

      <SearchField>
        <FiSearch />
        <SearchInput
          ref={searchInputRef}
          type="search"
          value={searchQuery}
          placeholder="Search"
          aria-label="Search bands by name"
          onChange={({target}) => onSearchChange(target.value)}
        />
        {searchQuery.length > 0 && (
          <ClearSearchButton
            type="button"
            aria-label="Clear search"
            onClick={clearSearch}
          >
            <FiX />
          </ClearSearchButton>
        )}
      </SearchField>

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
}

const TopBarContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 18px;
  max-width: 1280px;
  min-height: 68px;
  margin: 0 auto 22px;
  padding: 14px 22px;
  border-radius: 8px;
  background: #0f0f0f;

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

const GenreFilters = styled.nav`
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

const GenrePill = styled.button<{$active?: boolean}>`
  min-width: 72px;
  padding: 8px 18px;
  border: 0;
  border-radius: 999px;
  background: ${({$active}) => ($active ? '#008f80' : '#1c1c1c')};
  color: ${({$active}) => ($active ? '#eefdf9' : '#c1c5c4')};
  font-size: 14px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #e7fffb;
    outline-offset: 2px;
  }
`

const SearchField = styled.div`
  display: flex;
  align-items: center;
  width: clamp(190px, 18vw, 260px);
  min-width: 170px;
  height: 24px;
  margin-left: 18px;
  padding: 0 10px;
  border-radius: 999px;
  background: #181818;
  color: #656b69;

  svg {
    flex: 0 0 auto;
    width: 15px;
    height: 15px;
  }

  @media (max-width: 900px) {
    margin-left: 0;
    flex: 1 1 260px;
  }

  @media (max-width: 520px) {
    flex-basis: calc(100% - 118px);
    min-width: 0;
  }
`

const SearchInput = styled.input`
  min-width: 0;
  width: 100%;
  border: 0;
  padding: 0 0 0 8px;
  background: transparent;
  color: #f0f3f2;
  font-size: 14px;
  outline: 0;

  &::placeholder {
    color: #656b69;
  }

  &::-webkit-search-cancel-button {
    appearance: none;
  }
`

const ClearSearchButton = styled.button`
  display: grid;
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  place-items: center;
  border: 0;
  padding: 0;
  border-radius: 999px;
  background: transparent;
  color: #a8afac;
  cursor: pointer;

  svg {
    width: 13px;
    height: 13px;
  }

  &:hover {
    color: #f0f3f2;
    background: #242424;
  }

  &:focus-visible {
    outline: 2px solid #e7fffb;
    outline-offset: 2px;
  }
`

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex: 0 0 auto;
  margin-left: auto;

  @media (max-width: 900px) {
    margin-left: 0;
  }
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
