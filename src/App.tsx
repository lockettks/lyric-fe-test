import {useMemo, useState} from 'react'
import {FiSidebar} from 'react-icons/fi'
import styled, {createGlobalStyle} from 'styled-components'
import {BandsList} from './components/BandsList'
import {InfoPanel} from './components/InfoPanel'
import {TopBar} from './components/TopBar'
import {useBands} from './hooks/useBands'

const ALL_GENRES = 'all'

export const App = () => {
  const {bands, loading, error} = useBands()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES)
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(true)

  const genres = useMemo(
    () => Array.from(new Set(bands.map(({genre}) => genre))).sort(),
    [bands],
  )

  const filteredBands = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return bands.filter((band) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        band.bandName.toLowerCase().includes(normalizedQuery)
      const matchesGenre =
        selectedGenre === ALL_GENRES || band.genre === selectedGenre

      return matchesSearch && matchesGenre
    })
  }, [bands, searchQuery, selectedGenre])

  return (
    <>
      <GlobalStyle />
      <AppShell>
        <TopBar
          genres={genres}
          searchQuery={searchQuery}
          selectedGenre={selectedGenre}
          onSearchChange={setSearchQuery}
          onGenreChange={setSelectedGenre}
        />

        <MainLayout $panelOpen={isInfoPanelOpen}>
          <BandSection>
            {!isInfoPanelOpen && (
              <RestorePanelRow>
                <RestorePanelButton
                  type="button"
                  onClick={() => setIsInfoPanelOpen(true)}
                >
                  <FiSidebar />
                  Show info panel
                </RestorePanelButton>
              </RestorePanelRow>
            )}

            <BandsList bands={filteredBands} loading={loading} error={error} />
          </BandSection>

          {isInfoPanelOpen && (
            <InfoPanel onClose={() => setIsInfoPanelOpen(false)} />
          )}
        </MainLayout>
      </AppShell>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    background: #181818;
    color: #f4f7f5;
    font-family:
      Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", sans-serif;
  }

  button,
  input {
    font: inherit;
  }
`

const AppShell = styled.div`
  min-height: 100vh;
  padding: 24px;
  background: #181818;

  @media (max-width: 720px) {
    padding: 14px;
  }
`

const MainLayout = styled.main<{$panelOpen: boolean}>`
  display: grid;
  grid-template-columns: ${({$panelOpen}) =>
    $panelOpen ? 'minmax(0, 1fr) minmax(260px, 280px)' : 'minmax(0, 1fr)'};
  gap: 26px;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

const BandSection = styled.section`
  min-width: 0;
`

const RestorePanelRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`

const RestorePanelButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  border: 0;
  padding: 0 14px;
  border-radius: 999px;
  background: #1a1b1b;
  color: #d6d6d6;
  font-size: 14px;
  cursor: pointer;

  svg {
    width: 17px;
    height: 17px;
  }

  &:hover {
    background: #242424;
    color: #f0f3f2;
  }

  &:focus-visible {
    outline: 2px solid #e7fffb;
    outline-offset: 2px;
  }
`
