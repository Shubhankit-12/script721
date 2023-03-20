/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MyToken,
  MyTokenInterface,
} from "../../../contracts/Token721.sol/MyToken";

const _abi = [
  {
    inputs: [],
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "totalSupply",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600781526020017f4d79546f6b656e000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d544b00000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000969291906200036f565b508060049080519060200190620000af9291906200036f565b505050620000d2620000c66200011560201b60201c565b6200011d60201b60201c565b6200010f33620000e7620001e360201b60201c565b600a620000f59190620005b9565b60646200010391906200060a565b620001ec60201b60201c565b620007de565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200025f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200025690620006cc565b60405180910390fd5b62000273600083836200036560201b60201c565b8060026000828254620002879190620006ee565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002de9190620006ee565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200034591906200075c565b60405180910390a362000361600083836200036a60201b60201c565b5050565b505050565b505050565b8280546200037d90620007a8565b90600052602060002090601f016020900481019282620003a15760008555620003ed565b82601f10620003bc57805160ff1916838001178555620003ed565b82800160010185558215620003ed579182015b82811115620003ec578251825591602001919060010190620003cf565b5b509050620003fc919062000400565b5090565b5b808211156200041b57600081600090555060010162000401565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620004ad578086048111156200048557620004846200041f565b5b6001851615620004955780820291505b8081029050620004a5856200044e565b945062000465565b94509492505050565b600082620004c857600190506200059b565b81620004d857600090506200059b565b8160018114620004f15760028114620004fc5762000532565b60019150506200059b565b60ff8411156200051157620005106200041f565b5b8360020a9150848211156200052b576200052a6200041f565b5b506200059b565b5060208310610133831016604e8410600b84101617156200056c5782820a9050838111156200056657620005656200041f565b5b6200059b565b6200057b84848460016200045b565b925090508184048111156200059557620005946200041f565b5b81810290505b9392505050565b6000819050919050565b600060ff82169050919050565b6000620005c682620005a2565b9150620005d383620005ac565b9250620006027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620004b6565b905092915050565b60006200061782620005a2565b91506200062483620005a2565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000660576200065f6200041f565b5b828202905092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620006b4601f836200066b565b9150620006c1826200067c565b602082019050919050565b60006020820190508181036000830152620006e781620006a5565b9050919050565b6000620006fb82620005a2565b91506200070883620005a2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000740576200073f6200041f565b5b828201905092915050565b6200075681620005a2565b82525050565b60006020820190506200077360008301846200074b565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620007c157607f821691505b60208210811415620007d857620007d762000779565b5b50919050565b611c0280620007ee6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102a6578063a457c2d7146102c4578063a9059cbb146102f4578063dd62ed3e14610324578063f2fde38b146103545761010b565b806370a0823114610232578063715018a61461026257806379cc67901461026c5780638da5cb5b146102885761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca57806340c10f19146101fa57806342966c68146102165761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610370565b60405161012591906111a3565b60405180910390f35b6101486004803603810190610143919061125e565b610402565b60405161015591906112b9565b60405180910390f35b610166610425565b60405161017391906112e3565b60405180910390f35b610196600480360381019061019191906112fe565b61042f565b6040516101a391906112b9565b60405180910390f35b6101b461045e565b6040516101c1919061136d565b60405180910390f35b6101e460048036038101906101df919061125e565b610467565b6040516101f191906112b9565b60405180910390f35b610214600480360381019061020f919061125e565b61049e565b005b610230600480360381019061022b9190611388565b6104b4565b005b61024c600480360381019061024791906113b5565b6104c8565b60405161025991906112e3565b60405180910390f35b61026a610510565b005b6102866004803603810190610281919061125e565b610524565b005b610290610544565b60405161029d91906113f1565b60405180910390f35b6102ae61056e565b6040516102bb91906111a3565b60405180910390f35b6102de60048036038101906102d9919061125e565b610600565b6040516102eb91906112b9565b60405180910390f35b61030e6004803603810190610309919061125e565b610677565b60405161031b91906112b9565b60405180910390f35b61033e6004803603810190610339919061140c565b61069a565b60405161034b91906112e3565b60405180910390f35b61036e600480360381019061036991906113b5565b610721565b005b60606003805461037f9061147b565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab9061147b565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050905090565b60008061040d6107a5565b905061041a8185856107ad565b600191505092915050565b6000600254905090565b60008061043a6107a5565b9050610447858285610978565b610452858585610a04565b60019150509392505050565b60006012905090565b6000806104726107a5565b9050610493818585610484858961069a565b61048e91906114dc565b6107ad565b600191505092915050565b6104a6610c85565b6104b08282610d03565b5050565b6104c56104bf6107a5565b82610e63565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610518610c85565b610522600061103a565b565b610536826105306107a5565b83610978565b6105408282610e63565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461057d9061147b565b80601f01602080910402602001604051908101604052809291908181526020018280546105a99061147b565b80156105f65780601f106105cb576101008083540402835291602001916105f6565b820191906000526020600020905b8154815290600101906020018083116105d957829003601f168201915b5050505050905090565b60008061060b6107a5565b90506000610619828661069a565b90508381101561065e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610655906115a4565b60405180910390fd5b61066b82868684036107ad565b60019250505092915050565b6000806106826107a5565b905061068f818585610a04565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610729610c85565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610799576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079090611636565b60405180910390fd5b6107a28161103a565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561081d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610814906116c8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561088d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108849061175a565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161096b91906112e3565b60405180910390a3505050565b6000610984848461069a565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109fe57818110156109f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e7906117c6565b60405180910390fd5b6109fd84848484036107ad565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6b90611858565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ae4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610adb906118ea565b60405180910390fd5b610aef838383611100565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6c9061197c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c0891906114dc565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c6c91906112e3565b60405180910390a3610c7f848484611105565b50505050565b610c8d6107a5565b73ffffffffffffffffffffffffffffffffffffffff16610cab610544565b73ffffffffffffffffffffffffffffffffffffffff1614610d01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf8906119e8565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6a90611a54565b60405180910390fd5b610d7f60008383611100565b8060026000828254610d9191906114dc565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610de691906114dc565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e4b91906112e3565b60405180910390a3610e5f60008383611105565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ed3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eca90611ae6565b60405180910390fd5b610edf82600083611100565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5c90611b78565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610fbc9190611b98565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161102191906112e3565b60405180910390a361103583600084611105565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611144578082015181840152602081019050611129565b83811115611153576000848401525b50505050565b6000601f19601f8301169050919050565b60006111758261110a565b61117f8185611115565b935061118f818560208601611126565b61119881611159565b840191505092915050565b600060208201905081810360008301526111bd818461116a565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111f5826111ca565b9050919050565b611205816111ea565b811461121057600080fd5b50565b600081359050611222816111fc565b92915050565b6000819050919050565b61123b81611228565b811461124657600080fd5b50565b60008135905061125881611232565b92915050565b60008060408385031215611275576112746111c5565b5b600061128385828601611213565b925050602061129485828601611249565b9150509250929050565b60008115159050919050565b6112b38161129e565b82525050565b60006020820190506112ce60008301846112aa565b92915050565b6112dd81611228565b82525050565b60006020820190506112f860008301846112d4565b92915050565b600080600060608486031215611317576113166111c5565b5b600061132586828701611213565b935050602061133686828701611213565b925050604061134786828701611249565b9150509250925092565b600060ff82169050919050565b61136781611351565b82525050565b6000602082019050611382600083018461135e565b92915050565b60006020828403121561139e5761139d6111c5565b5b60006113ac84828501611249565b91505092915050565b6000602082840312156113cb576113ca6111c5565b5b60006113d984828501611213565b91505092915050565b6113eb816111ea565b82525050565b600060208201905061140660008301846113e2565b92915050565b60008060408385031215611423576114226111c5565b5b600061143185828601611213565b925050602061144285828601611213565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061149357607f821691505b602082108114156114a7576114a661144c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006114e782611228565b91506114f283611228565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611527576115266114ad565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061158e602583611115565b915061159982611532565b604082019050919050565b600060208201905081810360008301526115bd81611581565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611620602683611115565b915061162b826115c4565b604082019050919050565b6000602082019050818103600083015261164f81611613565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006116b2602483611115565b91506116bd82611656565b604082019050919050565b600060208201905081810360008301526116e1816116a5565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611744602283611115565b915061174f826116e8565b604082019050919050565b6000602082019050818103600083015261177381611737565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006117b0601d83611115565b91506117bb8261177a565b602082019050919050565b600060208201905081810360008301526117df816117a3565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611842602583611115565b915061184d826117e6565b604082019050919050565b6000602082019050818103600083015261187181611835565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006118d4602383611115565b91506118df82611878565b604082019050919050565b60006020820190508181036000830152611903816118c7565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611966602683611115565b91506119718261190a565b604082019050919050565b6000602082019050818103600083015261199581611959565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006119d2602083611115565b91506119dd8261199c565b602082019050919050565b60006020820190508181036000830152611a01816119c5565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611a3e601f83611115565b9150611a4982611a08565b602082019050919050565b60006020820190508181036000830152611a6d81611a31565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ad0602183611115565b9150611adb82611a74565b604082019050919050565b60006020820190508181036000830152611aff81611ac3565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b62602283611115565b9150611b6d82611b06565b604082019050919050565b60006020820190508181036000830152611b9181611b55565b9050919050565b6000611ba382611228565b9150611bae83611228565b925082821015611bc157611bc06114ad565b5b82820390509291505056fea26469706673582212207256fda3ebc05632a631578928904316824f6f1442ae6df9bfb0a19f5ea8912264736f6c634300080a0033";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyToken> {
    return super.deploy(overrides || {}) as Promise<MyToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyToken {
    return super.attach(address) as MyToken;
  }
  override connect(signer: Signer): MyToken__factory {
    return super.connect(signer) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new utils.Interface(_abi) as MyTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyToken {
    return new Contract(address, _abi, signerOrProvider) as MyToken;
  }
}