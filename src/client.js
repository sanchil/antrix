import App from './approuter';
import AppGrid from './appgrid';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { hydrate } from 'react-dom';


function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppGrid>
          <App />
        </AppGrid>
      </ThemeProvider>
    </BrowserRouter>
  );
}




hydrate(
 <Main />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
