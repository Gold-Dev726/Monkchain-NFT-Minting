import sample from 'lodash/sample';

if (!process.env.REACT_APP_NODE_1 || !process.env.REACT_APP_NODE_2 || !process.env.REACT_APP_NODE_3) {
  throw Error('One base RPC URL is undefined');
}

// Array of available nodes to connect to
// export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]
export const nodes = [process.env.REACT_APP_BSC_TESTNET];

const getNodeUrl = () => {
  return sample(nodes);
};

export default getNodeUrl;
