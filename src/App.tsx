import { ThemeProvider } from 'styled-components';
import Global from './assets/styles/global';
import theme from './assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Global />
    </ThemeProvider>
  );
}

export default App;
