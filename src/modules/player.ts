// 액션 타입
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const DECREASE_SCORE = 'DECREASE_SCORE';
export const INCREASE_REBOUND = 'INCREASE_REBOUND';
export const DECREASE_REBOUND = 'DECREASE_REBOUND';
export const INCREASE_ASSIST = 'INCREASE_ASSIST';
export const DECREASE_ASSIST = 'DECREASE_ASSIST';
export const INCREASE_STEAL = 'INCREASE_STEAL';
export const DECREASE_STEAL = 'DECREASE_STEAL';
export const INCREASE_FOUL = 'INCREASE_FOUL';
export const DECREASE_FOUL = 'DECREASE_FOUL';
export const ADD_TO_TODAY_PLAYERS = 'ADD_TO_TODAY_PLAYERS';
export const INIT_TODAYPLAYERS = 'INIT_TODAYPLAYERS';
export const REMOVE_TODAYPLAYERS = 'REMOVE_TODAYPLAYERS';

/* ------------------------ 액션 함수 만들기(Action Creator) ----------------------- */
export const addToTodayPlayers = (player, teamName) => {
  return {
    type: ADD_TO_TODAY_PLAYERS,
    payload: {
      ...player,
      score: 0,
      rebound: 0,
      assist: 0,
      steal: 0,
      foul: 0,
      teamName,
    },
  };
};

export const increaseScore = (playerId) => {
  return {
    type: INCREASE_SCORE,
    payload: {
      playerId,
    },
  };
};
export const decreaseScore = (playerId) => {
  return {
    type: DECREASE_SCORE,
    payload: {
      playerId,
    },
  };
};
export const increaseRebound = (playerId) => {
  return {
    type: INCREASE_REBOUND,
    payload: {
      playerId,
    },
  };
};
export const decreaseRebound = (playerId) => {
  return {
    type: DECREASE_REBOUND,
    payload: {
      playerId,
    },
  };
};
export const increaseAssist = (playerId) => {
  return {
    type: INCREASE_ASSIST,
    payload: {
      playerId,
    },
  };
};
export const decreaseAssist = (playerId) => {
  return {
    type: DECREASE_ASSIST,
    payload: {
      playerId,
    },
  };
};
export const increaseSteal = (playerId) => {
  return {
    type: INCREASE_STEAL,
    payload: {
      playerId,
    },
  };
};
export const decreaseSteal = (playerId) => {
  return {
    type: DECREASE_STEAL,
    payload: {
      playerId,
    },
  };
};
export const increaseFoul = (playerId) => {
  return {
    type: INCREASE_FOUL,
    payload: {
      playerId,
    },
  };
};
export const decreaseFoul = (playerId) => {
  return {
    type: DECREASE_FOUL,
    payload: {
      playerId,
    },
  };
};
export const initTodayPlayers = () => {
  return {
    type: INIT_TODAYPLAYERS,
  };
};
export const removeTodayPlayers = (player) => {
  return {
    type: REMOVE_TODAYPLAYERS,
    payload: player,
  };
};

// 초기상태선언
export const initialState = {
  players: [
    { id: 1, name: '권용훈' },
    { id: 2, name: '권혁진' },
    { id: 3, name: '김경호' },
    { id: 4, name: '김예봉' },
    { id: 5, name: '김요한' },
    { id: 6, name: '김우현' },
    { id: 7, name: '류영동' },
    { id: 8, name: '유희준' },
    { id: 9, name: '이주현' },
    { id: 10, name: '장지홍' },
    { id: 11, name: '정상열' },
    { id: 12, name: '지윤호' },
    { id: 13, name: '강서린' },
    { id: 14, name: '김병철' },
    { id: 15, name: '김성수' },
    { id: 16, name: '김시태' },
    { id: 17, name: '김지용' },
    { id: 18, name: '박철현' },
    { id: 19, name: '이상현' },
    { id: 20, name: '이승호' },
    { id: 21, name: '이준혁' },
    { id: 22, name: '정동진' },
    { id: 23, name: '조범식' },
  ],
  todayPlayers: [],
};

// 리듀서 선언
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_TODAY_PLAYERS:
      return {
        ...state,
        todayPlayers: [...state.todayPlayers, action.payload],
      };
    case INCREASE_SCORE:
      const idxIncreaseScore = state.todayPlayers.findIndex(
        (el) => el.id === action.payload.playerId,
      );

      return {
        ...state,
        todayPlayers: state.todayPlayers.map((el, idx) =>
          idx === idxIncreaseScore ? { ...el, score: (el.score += 1) } : el,
        ),
      };
    case DECREASE_SCORE:
      const idxDecreaseScore = state.todayPlayers.findIndex(
        (el) => el.id === action.payload.playerId,
      );

      return {
        ...state,
        todayPlayers: state.todayPlayers.map((el, idx) =>
          idx === idxDecreaseScore ? { ...el, score: (el.score -= 1) } : el,
        ),
      };
    case INCREASE_REBOUND:
      const idxIncreaseRebound = state.todayPlayers.findIndex(
        (el) => el.id === action.payload.playerId,
      );

      return {
        ...state,
        todayPlayers: state.todayPlayers.map((el, idx) =>
          idx === idxIncreaseRebound
            ? { ...el, rebound: (el.rebound += 1) }
            : el,
        ),
      };
    case DECREASE_REBOUND:
      const idxDecreaseRebound = state.todayPlayers.findIndex(
        (el) => el.id === action.payload.playerId,
      );

      return {
        ...state,
        todayPlayers: state.todayPlayers.map((el, idx) =>
          idx === idxDecreaseRebound
            ? { ...el, rebound: (el.rebound -= 1) }
            : el,
        ),
      };
    case INCREASE_ASSIST:
      const idxIncreaseAssist = state.todayPlayers.findIndex(
        (el) => el.id === action.payload.playerId,
      );

      return {
        ...state,
        todayPlayers: state.todayPlayers.map((el, idx) =>
          idx === idxIncreaseAssist ? { ...el, assist: (el.assist += 1) } : el,
        ),
      };
    case DECREASE_ASSIST:
      const idxDecreaseAssist = state.todayPlayers.findIndex(
        (el) => el.id === action.payload.playerId,
      );

      return {
        ...state,
        todayPlayers: state.todayPlayers.map((el, idx) =>
          idx === idxDecreaseAssist ? { ...el, assist: (el.assist -= 1) } : el,
        ),
      };
    case INCREASE_STEAL:
      const idxIncreaseSteal = state.todayPlayers.findIndex(
        (el) => el.id === action.payload.playerId,
      );

      return {
        ...state,
        todayPlayers: state.todayPlayers.map((el, idx) =>
          idx === idxIncreaseSteal ? { ...el, steal: (el.steal += 1) } : el,
        ),
      };
    case DECREASE_STEAL:
      const idxDecreaseSteal = state.todayPlayers.findIndex(
        (el) => el.id === action.payload.playerId,
      );

      return {
        ...state,
        todayPlayers: state.todayPlayers.map((el, idx) =>
          idx === idxDecreaseSteal ? { ...el, steal: (el.steal -= 1) } : el,
        ),
      };
    case INCREASE_FOUL:
      const idxIncreaseFoul = state.todayPlayers.findIndex(
        (el) => el.id === action.payload.playerId,
      );

      return {
        ...state,
        todayPlayers: state.todayPlayers.map((el, idx) =>
          idx === idxIncreaseFoul ? { ...el, foul: (el.foul += 1) } : el,
        ),
      };
    case DECREASE_FOUL:
      const idxDecreaseFoul = state.todayPlayers.findIndex(
        (el) => el.id === action.payload.playerId,
      );

      return {
        ...state,
        todayPlayers: state.todayPlayers.map((el, idx) =>
          idx === idxDecreaseFoul ? { ...el, foul: (el.foul -= 1) } : el,
        ),
      };
    case INIT_TODAYPLAYERS:
      return { ...state, todayPlayers: [] };
    case REMOVE_TODAYPLAYERS:
      // action.payload는 선수 객체

      return {
        ...state,
        todayPlayers: state.todayPlayers.filter(
          (player) => player.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}
