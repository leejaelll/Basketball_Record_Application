// 액션 타입
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const DECREASE_SCORE = 'DECREASE_SCORE';
export const INCREASE_REBOUND = 'INCREASE_REBOUND';
export const DECREASE_REBOUND = 'DECREASE_REBOUND';
export const INCREASE_ASSIST = 'INCREASE_ASSIST';
export const DECREASE_ASSIST = 'DECREASE_ASSIST';
export const INCREASE_STEAL = 'INCREASE_STEAL';
export const DECREASE_STEAL = 'DECREASE_STEAL';
export const ADD_TO_TODAY_PLAYERS = 'ADD_TO_TODAY_PLAYERS';

/* ------------------------ 액션 함수 만들기(Action Creator) ----------------------- */
// export const increaseScore = (playerId) => {
//   return {
//     type: INCREASE_SCORE,
//     payload: playerId,
//   };
// };

export const addToTodayPlayers = (player, teamName) => {
  return {
    type: ADD_TO_TODAY_PLAYERS,
    payload: {
      ...player,
      score: 0,
      rebound: 0,
      assist: 0,
      steal: 0,
      teamName,
    },
  };
};
// export const decreaseScore = () => {
//   return {
//     type: DECREASE_SCORE,
//   };
// };

// 초기상태선언
export const initialState = {
  players: [
    { id: 1, name: '이재린' },
    { id: 2, name: '김요한' },
    { id: 3, name: '장효준' },
    { id: 4, name: '이상현' },
    { id: 5, name: '권용훈' },
    { id: 6, name: '권혁진' },
    { id: 7, name: '김지용' },
    { id: 8, name: '이석진' },
    { id: 9, name: '이주현' },
    { id: 10, name: '정상열' },
    { id: 11, name: '김예봉' },
    { id: 12, name: '지윤호' },
    { id: 13, name: '이지훈' },
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

    // // payload로 idx를 받아야함
    // const idx = state.players.findIndex(
    //   (el) => el.id === action.payload.playerId,
    // );
    // return {
    //   ...state,
    //   players: [
    //     ...state.players.slice(0, idx),
    //     action.payload,
    //     ...state.players.slice(idx + 1),
    //   ],
    // };

    default:
      return state;
  }
}
