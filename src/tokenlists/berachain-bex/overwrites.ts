import { Network, OverwritesForList } from '../../types'

export const overwrites: OverwritesForList = {
  [Network.Cartio]: {
    '0x015fd589F4f1A33ce4487E12714e1B15129c9329': {
      extensions: {
        coingeckoId: 'usd-coin',
        pythPriceId:
          '0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a', // USDC/USD
      },
    },
    '0x164A2dE1bc5dc56F329909F7c97Bae929CaE557B': {
      extensions: {
        coingeckoId: 'tether',
        pythPriceId:
          '0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b', // USDT/USD
      },
    },
    '0x2d93FbcE4CffC15DD385A80B3f4CC1D4E76C38b3': {
      extensions: {
        coingeckoId: 'weth',
        pythPriceId:
          '0x9d4294bbcd1174d6f2003ec365831e64cc31d9f6f15a2b85399db8d5000960f6', // WETH/USD
      },
    },
    '0xFa5bf670A92AfF186E5176aA55690E0277010040': {
      extensions: {
        coingeckoId: 'bitcoin',
        pythPriceId:
          '0xc9d8b075a5c69303365ae23633d4e085199bf5c520a3b90fed1322a0342ffc33', // WBTC/USD
      },
    },
    '0x9c9C1f1c9794DA8A4EB432925becE646E1eF3AA8': {
      extensions: {
        coingeckoId: 'usds',
        pythPriceId:
          '0x77f0971af11cc8bac224917275c1bf55f2319ed5c654a1ca955c82fa2d297ea1', // USDs/USD
      },
    },
  },
}
