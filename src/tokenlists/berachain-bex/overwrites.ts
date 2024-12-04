import { Network, OverwritesForList } from '../../types'

export const overwrites: OverwritesForList = {
  [Network.Cartio]: {
    '0x015fd589F4f1A33ce4487E12714e1B15129c9329': {
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0x164A2dE1bc5dc56F329909F7c97Bae929CaE557B': {
      extensions: {
        coingeckoId: 'tether',
      },
    },
    '0x2d93FbcE4CffC15DD385A80B3f4CC1D4E76C38b3': {
      extensions: {
        coingeckoId: 'weth',
      },
    },
  },
}
