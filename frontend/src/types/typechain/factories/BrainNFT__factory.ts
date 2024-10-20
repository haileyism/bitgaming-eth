/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BrainNFT, BrainNFTInterface } from "../BrainNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bitToken_",
        type: "address",
      },
      {
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "BRONZE_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GOLD_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NFT_AMOUNT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SILVER_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bitToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftIndex",
        type: "uint256",
      },
    ],
    name: "claimNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getOwnershipCount",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620034eb380380620034eb833981810160405281019062000037919062000272565b6040518060400160405280600981526020017f427261696e204e465400000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f424e4654000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb92919062000139565b508060019080519060200190620000d492919062000139565b50505080600a9080519060200190620000ef92919062000139565b5081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506200048a565b828054620001479062000395565b90600052602060002090601f0160209004810192826200016b5760008555620001b7565b82601f106200018657805160ff1916838001178555620001b7565b82800160010185558215620001b7579182015b82811115620001b657825182559160200191906001019062000199565b5b509050620001c69190620001ca565b5090565b5b80821115620001e5576000816000905550600101620001cb565b5090565b600062000200620001fa84620002f5565b620002cc565b9050828152602081018484840111156200021957600080fd5b620002268482856200035f565b509392505050565b6000815190506200023f8162000470565b92915050565b600082601f8301126200025757600080fd5b815162000269848260208601620001e9565b91505092915050565b600080604083850312156200028657600080fd5b600062000296858286016200022e565b925050602083015167ffffffffffffffff811115620002b457600080fd5b620002c28582860162000245565b9150509250929050565b6000620002d8620002eb565b9050620002e68282620003cb565b919050565b6000604051905090565b600067ffffffffffffffff82111562000313576200031262000430565b5b6200031e826200045f565b9050602081019050919050565b600062000338826200033f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156200037f57808201518184015260208101905062000362565b838111156200038f576000848401525b50505050565b60006002820490506001821680620003ae57607f821691505b60208210811415620003c557620003c462000401565b5b50919050565b620003d6826200045f565b810181811067ffffffffffffffff82111715620003f857620003f762000430565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200047b816200032b565b81146200048757600080fd5b50565b613051806200049a6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80638da5cb5b116100b8578063c87b56dd1161007c578063c87b56dd14610363578063d84e9f9214610393578063e4e0bc46146103b1578063e985e9c5146103e1578063f18785a814610411578063fe5c873a1461042f57610142565b80638da5cb5b146102d157806395d89b41146102ef578063a22cb4651461030d578063b88d4fde14610329578063c1a0db301461034557610142565b806342842e0e1161010a57806342842e0e146101fd57806355f804b31461021957806356973974146102355780636352211e1461025357806369a2f0261461028357806370a08231146102a157610142565b806301ffc9a71461014757806306fdde0314610177578063081812fc14610195578063095ea7b3146101c557806323b872dd146101e1575b600080fd5b610161600480360381019061015c9190611fb4565b61044b565b60405161016e9190612517565b60405180910390f35b61017f61052d565b60405161018c9190612532565b60405180910390f35b6101af60048036038101906101aa9190612047565b6105bf565b6040516101bc9190612465565b60405180910390f35b6101df60048036038101906101da9190611f78565b610644565b005b6101fb60048036038101906101f69190611e72565b61075c565b005b61021760048036038101906102129190611e72565b6107bc565b005b610233600480360381019061022e9190612006565b6107dc565b005b61023d610886565b60405161024a9190612794565b60405180910390f35b61026d60048036038101906102689190612047565b610893565b60405161027a9190612465565b60405180910390f35b61028b610945565b6040516102989190612794565b60405180910390f35b6102bb60048036038101906102b69190611de4565b610952565b6040516102c89190612794565b60405180910390f35b6102d9610a0a565b6040516102e69190612465565b60405180910390f35b6102f7610a30565b6040516103049190612532565b60405180910390f35b61032760048036038101906103229190611f3c565b610ac2565b005b610343600480360381019061033e9190611ec1565b610ad8565b005b61034d610b3a565b60405161035a9190612794565b60405180910390f35b61037d60048036038101906103789190612047565b610b47565b60405161038a9190612532565b60405180910390f35b61039b610b4e565b6040516103a89190612465565b60405180910390f35b6103cb60048036038101906103c69190611de4565b610b74565b6040516103d891906124f5565b60405180910390f35b6103fb60048036038101906103f69190611e36565b610ca9565b6040516104089190612517565b60405180910390f35b610419610d3d565b6040516104269190612794565b60405180910390f35b61044960048036038101906104449190612047565b610d42565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061051657507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610526575061052582611103565b5b9050919050565b60606000805461053c906129e7565b80601f0160208091040260200160405190810160405280929190818152602001828054610568906129e7565b80156105b55780601f1061058a576101008083540402835291602001916105b5565b820191906000526020600020905b81548152906001019060200180831161059857829003601f168201915b5050505050905090565b60006105ca8261116d565b610609576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610600906126f4565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061064f82610893565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b790612714565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106df6111d9565b73ffffffffffffffffffffffffffffffffffffffff16148061070e575061070d816107086111d9565b610ca9565b5b61074d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074490612654565b60405180910390fd5b61075783836111e1565b505050565b61076d6107676111d9565b8261129a565b6107ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a390612734565b60405180910390fd5b6107b7838383611378565b505050565b6107d783838360405180602001604052806000815250610ad8565b505050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461086c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610863906125d4565b60405180910390fd5b80600a9080519060200190610882929190611bde565b5050565b685150ae84a8cdf0000081565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561093c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093390612694565b60405180910390fd5b80915050919050565b681043561a882930000081565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ba90612674565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060018054610a3f906129e7565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6b906129e7565b8015610ab85780601f10610a8d57610100808354040283529160200191610ab8565b820191906000526020600020905b815481529060010190602001808311610a9b57829003601f168201915b5050505050905090565b610ad4610acd6111d9565b83836115df565b5050565b610ae9610ae36111d9565b8361129a565b610b28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1f90612734565b60405180910390fd5b610b348484848461174c565b50505050565b682b5e3af16b1880000081565b6060919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606000600967ffffffffffffffff811115610bb9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610be75781602001602082028036833780820191505090505b50905060005b6009811015610c9f57600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002054828281518110610c80577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250508080610c9790612a4a565b915050610bed565b5080915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600981565b3073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166327810b6e6040518163ffffffff1660e01b815260040160206040518083038186803b158015610dc157600080fd5b505afa158015610dd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df99190611e0d565b73ffffffffffffffffffffffffffffffffffffffff1614610e4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4690612754565b60405180910390fd5b60098110610e92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8990612774565b60405180910390fd5b6000681043561a882930000090506006821115610eba57685150ae84a8cdf000009050610ed1565b6001821115610ed057682b5e3af16b1880000090505b5b80600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401610f2d9190612465565b60206040518083038186803b158015610f4557600080fd5b505afa158015610f59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7d9190612070565b1015610fbe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb590612594565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630d1118ce33836040518363ffffffff1660e01b815260040161101b9291906124cc565b600060405180830381600087803b15801561103557600080fd5b505af1158015611049573d6000803e3d6000fd5b505050506000611059600b6117a8565b90506110848184604051602001611070919061244a565b6040516020818303038152906040526117b6565b61108e338261182a565b611098600b611a04565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060008154809291906110f990612a4a565b9190505550505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661125483610893565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006112a58261116d565b6112e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112db90612634565b60405180910390fd5b60006112ef83610893565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061133157506113308185610ca9565b5b8061136f57508373ffffffffffffffffffffffffffffffffffffffff16611357846105bf565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661139882610893565b73ffffffffffffffffffffffffffffffffffffffff16146113ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e590612574565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561145e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611455906125f4565b60405180910390fd5b611469838383611a1a565b6114746000826111e1565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114c491906128fd565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461151b91906128a7565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46115da838383611a1f565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561164e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164590612614565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161173f9190612517565b60405180910390a3505050565b611757848484611378565b61176384848484611a24565b6117a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179990612554565b60405180910390fd5b50505050565b600081600001549050919050565b6117bf8261116d565b6117fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f5906126b4565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190611825929190611bde565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561189a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611891906126d4565b60405180910390fd5b6118a38161116d565b156118e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118da906125b4565b60405180910390fd5b6118ef60008383611a1a565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461193f91906128a7565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611a0060008383611a1f565b5050565b6001816000016000828254019250508190555050565b505050565b505050565b6000611a458473ffffffffffffffffffffffffffffffffffffffff16611bbb565b15611bae578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611a6e6111d9565b8786866040518563ffffffff1660e01b8152600401611a909493929190612480565b602060405180830381600087803b158015611aaa57600080fd5b505af1925050508015611adb57506040513d601f19601f82011682018060405250810190611ad89190611fdd565b60015b611b5e573d8060008114611b0b576040519150601f19603f3d011682016040523d82523d6000602084013e611b10565b606091505b50600081511415611b56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b4d90612554565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611bb3565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b828054611bea906129e7565b90600052602060002090601f016020900481019282611c0c5760008555611c53565b82601f10611c2557805160ff1916838001178555611c53565b82800160010185558215611c53579182015b82811115611c52578251825591602001919060010190611c37565b5b509050611c609190611c64565b5090565b5b80821115611c7d576000816000905550600101611c65565b5090565b6000611c94611c8f846127d4565b6127af565b905082815260208101848484011115611cac57600080fd5b611cb78482856129a5565b509392505050565b6000611cd2611ccd84612805565b6127af565b905082815260208101848484011115611cea57600080fd5b611cf58482856129a5565b509392505050565b600081359050611d0c81612fbf565b92915050565b600081519050611d2181612fbf565b92915050565b600081359050611d3681612fd6565b92915050565b600081359050611d4b81612fed565b92915050565b600081519050611d6081612fed565b92915050565b600082601f830112611d7757600080fd5b8135611d87848260208601611c81565b91505092915050565b600082601f830112611da157600080fd5b8135611db1848260208601611cbf565b91505092915050565b600081359050611dc981613004565b92915050565b600081519050611dde81613004565b92915050565b600060208284031215611df657600080fd5b6000611e0484828501611cfd565b91505092915050565b600060208284031215611e1f57600080fd5b6000611e2d84828501611d12565b91505092915050565b60008060408385031215611e4957600080fd5b6000611e5785828601611cfd565b9250506020611e6885828601611cfd565b9150509250929050565b600080600060608486031215611e8757600080fd5b6000611e9586828701611cfd565b9350506020611ea686828701611cfd565b9250506040611eb786828701611dba565b9150509250925092565b60008060008060808587031215611ed757600080fd5b6000611ee587828801611cfd565b9450506020611ef687828801611cfd565b9350506040611f0787828801611dba565b925050606085013567ffffffffffffffff811115611f2457600080fd5b611f3087828801611d66565b91505092959194509250565b60008060408385031215611f4f57600080fd5b6000611f5d85828601611cfd565b9250506020611f6e85828601611d27565b9150509250929050565b60008060408385031215611f8b57600080fd5b6000611f9985828601611cfd565b9250506020611faa85828601611dba565b9150509250929050565b600060208284031215611fc657600080fd5b6000611fd484828501611d3c565b91505092915050565b600060208284031215611fef57600080fd5b6000611ffd84828501611d51565b91505092915050565b60006020828403121561201857600080fd5b600082013567ffffffffffffffff81111561203257600080fd5b61203e84828501611d90565b91505092915050565b60006020828403121561205957600080fd5b600061206784828501611dba565b91505092915050565b60006020828403121561208257600080fd5b600061209084828501611dcf565b91505092915050565b60006120a58383612415565b60208301905092915050565b6120ba81612931565b82525050565b60006120cb82612846565b6120d58185612874565b93506120e083612836565b8060005b838110156121115781516120f88882612099565b975061210383612867565b9250506001810190506120e4565b5085935050505092915050565b61212781612943565b82525050565b600061213882612851565b6121428185612885565b93506121528185602086016129b4565b61215b81612b2a565b840191505092915050565b60006121718261285c565b61217b8185612896565b935061218b8185602086016129b4565b61219481612b2a565b840191505092915050565b60006121ac603283612896565b91506121b782612b3b565b604082019050919050565b60006121cf602583612896565b91506121da82612b8a565b604082019050919050565b60006121f2601283612896565b91506121fd82612bd9565b602082019050919050565b6000612215601c83612896565b915061222082612c02565b602082019050919050565b6000612238600a83612896565b915061224382612c2b565b602082019050919050565b600061225b602483612896565b915061226682612c54565b604082019050919050565b600061227e601983612896565b915061228982612ca3565b602082019050919050565b60006122a1602c83612896565b91506122ac82612ccc565b604082019050919050565b60006122c4603883612896565b91506122cf82612d1b565b604082019050919050565b60006122e7602a83612896565b91506122f282612d6a565b604082019050919050565b600061230a602983612896565b915061231582612db9565b604082019050919050565b600061232d602e83612896565b915061233882612e08565b604082019050919050565b6000612350602083612896565b915061235b82612e57565b602082019050919050565b6000612373602c83612896565b915061237e82612e80565b604082019050919050565b6000612396602183612896565b91506123a182612ecf565b604082019050919050565b60006123b9603183612896565b91506123c482612f1e565b604082019050919050565b60006123dc600983612896565b91506123e782612f6d565b602082019050919050565b60006123ff601183612896565b915061240a82612f96565b602082019050919050565b61241e8161299b565b82525050565b61242d8161299b565b82525050565b61244461243f8261299b565b612a93565b82525050565b60006124568284612433565b60208201915081905092915050565b600060208201905061247a60008301846120b1565b92915050565b600060808201905061249560008301876120b1565b6124a260208301866120b1565b6124af6040830185612424565b81810360608301526124c1818461212d565b905095945050505050565b60006040820190506124e160008301856120b1565b6124ee6020830184612424565b9392505050565b6000602082019050818103600083015261250f81846120c0565b905092915050565b600060208201905061252c600083018461211e565b92915050565b6000602082019050818103600083015261254c8184612166565b905092915050565b6000602082019050818103600083015261256d8161219f565b9050919050565b6000602082019050818103600083015261258d816121c2565b9050919050565b600060208201905081810360008301526125ad816121e5565b9050919050565b600060208201905081810360008301526125cd81612208565b9050919050565b600060208201905081810360008301526125ed8161222b565b9050919050565b6000602082019050818103600083015261260d8161224e565b9050919050565b6000602082019050818103600083015261262d81612271565b9050919050565b6000602082019050818103600083015261264d81612294565b9050919050565b6000602082019050818103600083015261266d816122b7565b9050919050565b6000602082019050818103600083015261268d816122da565b9050919050565b600060208201905081810360008301526126ad816122fd565b9050919050565b600060208201905081810360008301526126cd81612320565b9050919050565b600060208201905081810360008301526126ed81612343565b9050919050565b6000602082019050818103600083015261270d81612366565b9050919050565b6000602082019050818103600083015261272d81612389565b9050919050565b6000602082019050818103600083015261274d816123ac565b9050919050565b6000602082019050818103600083015261276d816123cf565b9050919050565b6000602082019050818103600083015261278d816123f2565b9050919050565b60006020820190506127a96000830184612424565b92915050565b60006127b96127ca565b90506127c58282612a19565b919050565b6000604051905090565b600067ffffffffffffffff8211156127ef576127ee612afb565b5b6127f882612b2a565b9050602081019050919050565b600067ffffffffffffffff8211156128205761281f612afb565b5b61282982612b2a565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006128b28261299b565b91506128bd8361299b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156128f2576128f1612a9d565b5b828201905092915050565b60006129088261299b565b91506129138361299b565b92508282101561292657612925612a9d565b5b828203905092915050565b600061293c8261297b565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156129d25780820151818401526020810190506129b7565b838111156129e1576000848401525b50505050565b600060028204905060018216806129ff57607f821691505b60208210811415612a1357612a12612acc565b5b50919050565b612a2282612b2a565b810181811067ffffffffffffffff82111715612a4157612a40612afb565b5b80604052505050565b6000612a558261299b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612a8857612a87612a9d565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f494e53554646494349454e545f46554e44530000000000000000000000000000600082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4f574e45525f4f4e4c5900000000000000000000000000000000000000000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f4e4f5f4143434553530000000000000000000000000000000000000000000000600082015250565b7f494e56414c49445f4e46545f494e444558000000000000000000000000000000600082015250565b612fc881612931565b8114612fd357600080fd5b50565b612fdf81612943565b8114612fea57600080fd5b50565b612ff68161294f565b811461300157600080fd5b50565b61300d8161299b565b811461301857600080fd5b5056fea264697066735822122020fd509bdcea13e86915e2e26e1c8f8ab9948fb78d11d6d73d8f80db7031de4564736f6c63430008030033";

export class BrainNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    bitToken_: string,
    baseURI_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BrainNFT> {
    return super.deploy(
      bitToken_,
      baseURI_,
      overrides || {}
    ) as Promise<BrainNFT>;
  }
  getDeployTransaction(
    bitToken_: string,
    baseURI_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(bitToken_, baseURI_, overrides || {});
  }
  attach(address: string): BrainNFT {
    return super.attach(address) as BrainNFT;
  }
  connect(signer: Signer): BrainNFT__factory {
    return super.connect(signer) as BrainNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BrainNFTInterface {
    return new utils.Interface(_abi) as BrainNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BrainNFT {
    return new Contract(address, _abi, signerOrProvider) as BrainNFT;
  }
}
