import { Commit } from "vuex";
import { ResultPropType } from "./types";

export default {
  setResultData: ({ commit }: { commit: Commit }, result: ResultPropType): void => {
    commit('SET_RESULT_DATA', result)
  }
}