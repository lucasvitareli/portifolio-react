import { ThemeProvider } from 'styled-components';
import About from './containers/About';
import Projects from './containers/Projects';
import Sidebar from './containers/Sidebar';
import EstiloGlobal, { Container } from './Styles';
import ThemeLight from './themes/light';
import ThemeDark from './themes/dark';
import { useState } from 'react';

function App() {
  const [activeDark, setActiveDark] = useState(false);

  function changeTheme() {
    setActiveDark(!activeDark);
  }

  return (
    <ThemeProvider theme={activeDark ? ThemeDark : ThemeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
        </Container>
      </ThemeProvider>

      );
}

      export default App;