export const MinterABI = [
  {
    inputs: [
      { internalType: 'address', name: '_controller', type: 'address' },
      { internalType: 'uint256', name: '_inflation', type: 'uint256' },
      {
        internalType: 'uint256',
        name: '_inflationChange',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_targetBondingRate',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'param',
        type: 'string',
      },
    ],
    name: 'ParameterUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'controller',
        type: 'address',
      },
    ],
    name: 'SetController',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentMintableTokens',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentInflation',
        type: 'uint256',
      },
    ],
    name: 'SetCurrentRewardTokens',
    type: 'event',
  },
  {
    inputs: [],
    name: 'controller',
    outputs: [
      { internalType: 'contract IController', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_fracNum', type: 'uint256' },
      { internalType: 'uint256', name: '_fracDenom', type: 'uint256' },
    ],
    name: 'createReward',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentMintableTokens',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentMintedTokens',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'depositETH',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getController',
    outputs: [
      { internalType: 'contract IController', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getGlobalTotalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inflation',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inflationChange',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IMinter',
        name: '_newMinter',
        type: 'address',
      },
    ],
    name: 'migrateToNewMinter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_controller', type: 'address' }],
    name: 'setController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'setCurrentRewardTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_inflationChange',
        type: 'uint256',
      },
    ],
    name: 'setInflationChange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_targetBondingRate',
        type: 'uint256',
      },
    ],
    name: 'setTargetBondingRate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'targetBondingRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
    name: 'trustedBurnTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_to', type: 'address' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
    ],
    name: 'trustedTransferTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address payable', name: '_to', type: 'address' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
    ],
    name: 'trustedWithdrawETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
