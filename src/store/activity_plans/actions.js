import { ActivityPlanService } from 'services/ActivityPlan.service';
import { MOVE_DAY, GET_CURRENT_ACTIVITIES, SET_CURRENT_DAY } from './constants';

export function fetchActivities(payload) {
  return {
    type: GET_CURRENT_ACTIVITIES,
    payload,
  };
}

export function getCurrentActivities({ babyId }) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      ActivityPlanService.current({ parentId: babyId || 1 })
        .then((response) => {
          console.log(response.activity_plan);
          dispatch(fetchActivities(response.activity_plan));
          resolve(response)
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export function setCurrentDay(dayId) {
  return {
    type: SET_CURRENT_DAY,
    payload: dayId,
  };
}

export function moveDay(payload) {
  return {
    type: MOVE_DAY,
    payload,
  };
}
