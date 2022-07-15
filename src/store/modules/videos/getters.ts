import { StateProps } from "./types"

export default {
  getCurrentPage: (state: StateProps): number => {
    return Number(state.result.page || 1)
  }
}