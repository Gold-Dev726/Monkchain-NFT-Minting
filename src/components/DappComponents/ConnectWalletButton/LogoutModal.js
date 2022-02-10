import { useState } from "react";
import {
  Button,
  Box,
  Stack,
  Typography,
  Hidden,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import {
  connectors,
  connectorLocalStorageKey,
  walletLocalStorageKey,
} from "./config";
import { ConnectorNames } from "utils/web3React";
import { ethers } from "ethers";

// export function BusdBalance() {
//   const { account } = useEthers();
//   const busdBalanceBigNumber = useTokenBalance(BusdAddress, account);
//   const busdBalance =
//     busdBalanceBigNumber && ethers.utils.formatUnits(busdBalanceBigNumber, 18);
//   return busdBalance;
// }

export default function ConnectModal({ logout, open, onClose }) {
  const { account } = useWeb3React();

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Account Details
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 1 }}>
        <Stack spacing={2} justifyContent="center" sx={{ maxWidth: 360 }}>
          <Typography>
            Address : {`${account?.slice(0, 8)}...${account?.slice(-8)}`}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              logout();
              onClose();
            }}
          >
            Disconnect
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
