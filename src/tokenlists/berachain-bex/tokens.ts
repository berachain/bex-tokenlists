import { Network, TokensForList } from '../../types'
import cartio from './tokens/cartio'

export const tokens: TokensForList = {
  [Network.Cartio]: cartio,
}
