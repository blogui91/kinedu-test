
/*
  This method will help us to get the values contained in src/config/api.js or any file in config folder
  I must say it took it borrowed from Laravel config() helper
*/

import { config } from 'helpers'

// This class contains the basic services of one model (CRUD), Following DRY
import Service from 'services'

class ActivityPlan extends Service {
  constructor () {
    super({
      baseUrl: config('api.url'), // Check what is the value in src/config/api.js
      endpoint: 'activity_plans',
      parentEndpoint: 'babies' // As activity plans is a nested endpoint we should specify its parent
    })
  }

  current ({ parentId }) {
    const url = this.buildUrl({parentId}) + '/current'
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .then(response => {
          resolve(response.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export const ActivityPlanService = new ActivityPlan()

export default ActivityPlan
