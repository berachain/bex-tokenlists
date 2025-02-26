import { Network, OverwritesForList } from '../../types'

export const overwrites: OverwritesForList = {
  [Network.OogaBooga]: {
    '0x6969696969696969696969696969696969696969': {
      extensions: {
        coingeckoId: 'berachain-bera',
        pythPriceId:
          '0x962088abcfdbdb6e30db2e340c8cf887d9efb311b1f2f17b155a63dbb6d40265', // WBERA/USD,
      },
    },
    '0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce': {
      extensions: {
        pythPriceId:
          '0xf67b033925d73d43ba4401e00308d9b0f26ab4fbd1250e8b5407b9eaade7e1f4', // HONEY/USD,
      },
    },
    '0x549943e04f40284185054145c6E4e9568C1D3241': {
      extensions: {
        coingeckoId: 'usd-coin',
        pythPriceId:
          '0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a', // USDC/USD
      },
    },
    '0x779Ded0c9e1022225f8E0630b35a9b54bE713736': {
      extensions: {
        coingeckoId: 'tether',
        pythPriceId:
          '0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b', // USDT/USD
      },
    },
    '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590': {
      extensions: {
        coingeckoId: 'weth',
        pythPriceId:
          '0x9d4294bbcd1174d6f2003ec365831e64cc31d9f6f15a2b85399db8d5000960f6', // WETH/USD
      },
    },
    '0x0555e30da8f98308edb960aa94c0db47230d2b9c': {
      extensions: {
        coingeckoId: 'bitcoin',
        pythPriceId:
          '0xc9d8b075a5c69303365ae23633d4e085199bf5c520a3b90fed1322a0342ffc33', // WBTC/USD
      },
    },
    '0x688e72142674041f8f6Af4c808a4045cA1D6aC82': {
      extensions: {
        coingeckoId: 'paypal-usd',
        pythPriceId:
          '0xc1da1b73d7f01e7ddd54b3766cf7fcd644395ad14f70aa706ec5384c59e76692', // PYUSD/USD
      },
    },
    '0x541FD749419CA806a8bc7da8ac23D346f2dF8B77': {
      extensions: {
        coingeckoId: 'solv-btc',
      },
    },
    '0xCC0966D8418d412c599A6421b760a847eB169A8c': {
      extensions: {
        coingeckoId: 'solv-protocol-solvbtc-bbn',
      },
    },
    // TODO: Add SBTC once it's on Coingecko or Pyth
    // '0x93F4d0ab6a8B4271f4a28Db399b5E30612D21116': {
    //   extensions: {
    //     coingeckoId: 'sbtc',
    //   },
    // },
    '0xEc901DA9c68E90798BbBb74c11406A32A70652C3': {
      extensions: {
        coingeckoId: 'stakestone-ether',
        pythPriceId:
          '0x4dcc2fb96fb89a802ef9712f6bd2246d3607cf95ca5540cb24490d37003f8c46', // STONE/USD
      },
    },
    // TODO: Add beraETH once it's on Coingecko or Pyth, using WETH/USD price for now
    '0x6fc6545d5cDE268D5C7f1e476D444F39c995120d': {
      extensions: {
        coingeckoId: 'berachain-staked-eth',
        pythPriceId:
          '0x9d4294bbcd1174d6f2003ec365831e64cc31d9f6f15a2b85399db8d5000960f6', // WETH/USD,
      },
    },
    '0xff12470a969Dd362EB6595FFB44C82c959Fe9ACc': {
      extensions: {
        coingeckoId: 'usda-2',
        pythPriceId:
          '0x3a1050a3c03354c94ed44acf808327f05b7f9d610f38644684f5ce4796cce27b', // USDA/USD,
      },
    },
    '0x2840F9d9f96321435Ab0f977E7FDBf32EA8b304f': {
      extensions: {
        coingeckoId: 'susda',
      },
    },
    // TODO: Add RUSD once it's on Coingecko or Pyth
    // '0x09D4214C03D01F49544C0448DBE3A27f768F2b34': {
    //   extensions: {
    //     coingeckoId: 'rusd',
    //   },
    // },
    '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34': {
      extensions: {
        coingeckoId: 'ethena-usde',
        pythPriceId:
          '0x6ec879b1e9963de5ee97e9c8710b742d6228252a5e2ca12d4ae81d7fe5ee8c5d', // USDe/USD,
      },
    },
    '0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2': {
      extensions: {
        coingeckoId: 'ethena-staked-usde',
        pythPriceId:
          '0xca3ba9a619a4b3755c10ac7d5e760275aa95e9823d38a84fedd416856cdba37c', // sUSDe/USD,
      },
    },
    '0x7DCC39B4d1C53CB31e1aBc0e358b43987FEF80f7': {
      extensions: {
        coingeckoId: 'wrapped-eeth',
        pythPriceId:
          '0x9ee4e7c60b940440a261eb54b6d8149c23b580ed7da3139f7f08f4ea29dad395', // weETH/USD,
      },
    },
    '0xf6718b2701D4a6498eF77D7c152b2137Ab28b8A3': {
      extensions: {
        coingeckoId: 'lorenzo-stbtc',
      },
    },
    // TODO: Add waBTC once it's on Coingecko or Pyth
    // '0x09DEF5aBc67e967d54E8233A4b5EBBc1B3fbE34b': {
    //   extensions: {
    //     coingeckoId: 'wabtc',
    //   },
    // },
    // TODO: Add PumpBTC.bera once it's on Coingecko or Pyth
    // '0x1fCca65fb6Ae3b2758b9b2B394CB227eAE404e1E': {
    //   extensions: {
    //     coingeckoId: 'pumpbtc-bera',
    //   },
    // },
    '0xC3827A4BC8224ee2D116637023b124CED6db6e90': {
      extensions: {
        coingeckoId: 'universal-btc',
      },
    },
    '0xecAc9C5F704e954931349Da37F60E39f515c11c1': {
      extensions: {
        coingeckoId: 'lombard-staked-btc',
        pythPriceId:
          '0x8f257aab6e7698bb92b15511915e593d6f8eae914452f781874754b03d0c612b', // LBTC/USD,
      },
    },
    '0xbAC93A69c62a1518136FF840B788Ba715cbDfE2B': {
      extensions: {
        coingeckoId: 'ignition-fbtc',
      },
    },
    // TODO: Add CIAN yield layer tokens once they are on Coingecko or Pyth
    // '0x9B2316cfe980515de7430F1c4E831B89a5921137': {
    //   extensions: {
    //     coingeckoId: 'ylrs-eth',
    //   },
    // },
    // '0xdCB3D91555385DaE23e6B966b5626aa7A75Be940': {
    //   extensions: {
    //     coingeckoId: 'ylpump-btc-bera',
    //   },
    // },
    // '0xE946Dd7d03F6F5C440F68c84808Ca88d26475FC5': {
    //   extensions: {
    //     coingeckoId: 'ylbtc-lst',
    //   },
    // },
    // '0x907883da917ca9750ad202ff6395C4C6aB14e60E': {
    //   extensions: {
    //     coingeckoId: 'yluni-btc',
    //   },
    // },
    // '0xa958090601E21A82e9873042652e35891D945a8C': {
    //   extensions: {
    //     coingeckoId: 'ylst-eth',
    //   },
    // },
    '0x5B82028cfc477C4E7ddA7FF33d59A23FA7Be002a': {
      extensions: {
        coingeckoId: 'magic-internet-money',
        pythPriceId:
          '0x7aa41f6ee464616f3cbc469fddfd7e63d8db319b7bd585cc95b24c29c9172916', // MIM/USD,
      },
    },
    '0x850CDF416668210ED0c36bfFF5d21921C7adA3b8': {
      extensions: {
        coingeckoId: 'restaked-swell-eth',
        pythPriceId:
          '0x17e349391a4d8362706ec4126c2fa42047601cb71c1063e38ca305fab9b0ec4d', // rswETH/USD,
      },
    },
    '0x4186BFC76E2E237523CBC30FD220FE055156b41F': {
      extensions: {
        coingeckoId: 'kelp-dao-restaked-eth',
        pythPriceId:
          '0x0caec284d34d836ca325cf7b3256c078c597bc052fbd3c0283d52b581d68d71f', // rsETH/USD,
      },
    },
    '0x09D9420332bff75522a45FcFf4855F82a0a3ff50': {
      extensions: {
        coingeckoId: 'dinero-2',
      },
    },
  },
}
