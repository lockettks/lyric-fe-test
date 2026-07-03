import styled, {createGlobalStyle} from 'styled-components'
import {BandsList} from './components/BandsList'
import {InfoPanel} from './components/InfoPanel'
import {TopBar} from './components/TopBar'

export const App = () => (
  <>
    <GlobalStyle />
    <AppShell>
      <TopBar />

      <MainLayout>
        <BandSection>
          <BandsList />
        </BandSection>

        <InfoPanel />
      </MainLayout>
    </AppShell>
  </>
)

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    background: #040505;
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
  background: #050606;

  @media (max-width: 720px) {
    padding: 14px;
  }
`

const MainLayout = styled.main`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 280px);
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
