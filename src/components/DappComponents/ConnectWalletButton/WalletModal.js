import { Button, Box, Stack, Typography, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { connectors, connectorLocalStorageKey, walletLocalStorageKey } from './config';
import { ConnectorNames } from 'utils/web3React';

export default function ConnectModal({ login, open, onClose }) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle sx={{ m: 0, p: 2, ml: 2 }}>
        Connect Wallet
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 1 }}>
        <Stack direction="row" justifyContent="center" flexWrap="wrap" sx={{ maxWidth: 320 }}>
          {connectors.map((wallet) => (
            <Box key={wallet.title}>
              <Button
                onClick={() => {
                  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

                  // Since iOS does not support Trust Wallet we fall back to WalletConnect
                  if (wallet.title === 'Trust Wallet' && isIOS) {
                    login(ConnectorNames.WalletConnect);
                  } else {
                    login(wallet.connectorId);
                  }

                  localStorage.setItem(walletLocalStorageKey, wallet.title);
                  localStorage.setItem(connectorLocalStorageKey, wallet.connectorId);
                  onClose();
                }}
              >
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                  sx={{
                    width: 128,
                    height: 128,
                    border: '1px solid #e5e5e550',
                    boxShadow: (theme) => theme.customShadows.z12,
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 1,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.4)'
                    }
                  }}
                >
                  <Box component="img" src={wallet.icon} sx={{ width: 40 }} />
                  <Typography color="text.primary">{wallet.title}</Typography>
                </Stack>
              </Button>
            </Box>
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
