import { ethers } from "ethers";
import DwarCharacterAbi from "contracts/DwarCharacterAbi.json";
import DwarTokenAbi from "contracts/DwarTokenAbi.json";
import ERC20Abi from "contracts/ERC20Abi.json";
import { DwarCharacterAddress, BusdAddress } from "contracts/address.js";
import { simpleRpcProvider } from "utils/providers";

const getContract = (abi, address, signer) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getDwarCharacterContract = (signer) => {
  return getContract(DwarCharacterAbi, DwarCharacterAddress, signer);
};

export const getERC20Contract = (signer) => {
  return getContract(ERC20Abi, BusdAddress, signer);
};
