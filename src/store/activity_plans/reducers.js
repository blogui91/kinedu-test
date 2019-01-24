import { MOVE_DAY, GET_CURRENT_ACTIVITIES, SET_CURRENT_DAY } from './constants';
import initialState from './state';
function activityPlans (state = initialState, action) {

  if (action.type === GET_CURRENT_ACTIVITIES) {
    return Object.assign({}, state, {
      list: action.payload,
      totalDays: action.payload.days ? action.payload.days.length : 0
    })
  }

  if (action.type === SET_CURRENT_DAY) {
    return Object.assign({}, state, {
      currentDay: action.payload
    })
  }

  if (action.type === MOVE_DAY) {
    const movement = action.payload
    const currentDay = state.currentDay
    const totalDays = state.totalDays
    const inTheLastDayAndPressNext = currentDay === totalDays && movement === 'next'
    const inTheFirstStepAndPressPrevious = currentDay === 1 && movement === 'prev'

    if (inTheLastDayAndPressNext || inTheFirstStepAndPressPrevious) {
      return Object.assign({}, state, {
        currentDay: 1
      })
    } else if (movement === 'next') {
      return Object.assign({}, state, {
        currentDay: state.currentDay + 1
      })
    } else if (movement === 'prev') {
      return Object.assign({}, state, {
        currentDay: state.currentDay - 1
      })
    }
  }
  return state
}

export default activityPlans
