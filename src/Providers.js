// scroll bar
import 'simplebar/src/simplebar.css';

import { HelmetProvider } from 'react-helmet-async';
import { Web3ReactProvider } from '@web3-react/core';
import { SnackbarProvider } from 'notistack';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// contexts
import { SettingsProvider } from './contexts/SettingsContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
//
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { store, persistor } from 'redux/store';
import { getLibrary } from 'utils/web3React';
import LoadingScreen from 'components/LoadingScreen';
import Grow from '@mui/material/Grow';
// ----------------------------------------------------------------------

const Providers = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        TransitionComponent={Grow}
      >
        <HelmetProvider>
          <ReduxProvider store={store}>
            {/* <PersistGate loading={<LoadingScreen />} persistor={persistor}> */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              {/* <SettingsProvider>
                  <CollapseDrawerProvider> */}
              {children}
              {/* </CollapseDrawerProvider>
                </SettingsProvider> */}
            </LocalizationProvider>
            {/* </PersistGate> */}
          </ReduxProvider>
        </HelmetProvider>
      </SnackbarProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
