import { ThemeProvider } from 'styled-components';
import Global from './assets/styles/global';
import theme from './assets/styles/theme';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />

      <Global />
    </ThemeProvider>
  );
}

export default App;
