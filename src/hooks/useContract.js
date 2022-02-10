import { useMemo } from "react";
import ERC20Abi from "contracts/abi/ERC20Abi.json";
import { getContract } from "utils";
import useActiveWeb3React from "./useActiveWeb3React";
// returns null on errors
function useContract(address, ABI, withSignerIfPossible = true) {
  const { library, account } = useActiveWeb3React();
  // const { library, account } = useEthers();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}

export function useTokenContract(tokenAddress, withSignerIfPossible = true) {
  return useContract(tokenAddress, ERC20Abi, withSignerIfPossible);
}

// export function useStakeContract(withSignerIfPossible = true) {
//   return useContract(StakeAddress, StakeAbi, withSignerIfPossible);
// }
