import { ResultPropType, StateProps } from "./types";

export default {
  SET_RESULT_DATA: (state: StateProps, result: ResultPropType): void => {
    state.result = result
  }
}