// routes
import Router from 'routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
// import { switchNetwork } from "utils/wallet";
import useEagerConnect from "hooks/useEagerConnect";

// ----------------------------------------------------------------------

export default function App() {
  useEagerConnect();

  return (
    <ThemeConfig>
      {/* <ThemePrimaryColor>
        <GlobalStyles />
        <ProgressBarStyle /> */}
        {/* <Settings /> */}
        {/* <ScrollToTop /> */}
        <Router />
      {/* </ThemePrimaryColor> */}
    </ThemeConfig>
  );
}
