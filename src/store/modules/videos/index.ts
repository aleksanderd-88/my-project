import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import { StateProps } from './types'
import { ResultPropType } from './types'

export default {
  namespaced: true,
  state: (): StateProps => ({
    result: {} as ResultPropType
  }),
  mutations,
  actions,
  getters
}