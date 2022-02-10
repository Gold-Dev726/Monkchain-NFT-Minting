import { useState } from "react";
import { Button } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import WalletModal from "./WalletModal";
import LogoutModal from "./LogoutModal";

export default function ConnectWalletButton({ sx }) {
  const { account } = useWeb3React();
  const [openLogin, setOpenLogin] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const { login, logout } = useAuth();

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenLogout = () => {
    setOpenLogout(true);
  };
  const handleCloseLogout = () => {
    setOpenLogout(false);
  };
  return (
    <>
      {account ? (
        <>
          <Button
            variant="contained"
            color="warning"
            onClick={handleOpenLogout}
            sx={{
              // background:
              //   "linear-gradient(96.02deg, #ed824e -12.08%, #ed2a2a 137.69%, #ed824e -12.08%)",
              // borderRadius: "4px",
              color: "white",
              maxWidth: 80,
              transition: "all 0.3s !important",
              // px: 2,
              // py: 1,
              ...sx,
              "&:hover": {
                backgroundPostion: "100%",
              },
            }}
          >
            {`${account.slice(0, 4)}...${account.slice(-3)}`}
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          color="warning"
          onClick={handleOpenLogin}
          sx={{
            // background:
            //   "linear-gradient(96.02deg, #ed824e -12.08%, #ed2a2a 137.69%)",
            // borderRadius: "4px",
            color: "white",
            maxWidth: 80,
            transition: "all 0.3s !important",
            // px: 2,
            // py: 1,
            ...sx,
            "&:hover": {
              backgroundPostionX: "-160px",
            },
          }}
        >
          Connect
        </Button>
      )}

      <WalletModal login={login} open={openLogin} onClose={handleCloseLogin} />
      <LogoutModal
        logout={logout}
        open={openLogout}
        onClose={handleCloseLogout}
      />
    </>
  );
}
