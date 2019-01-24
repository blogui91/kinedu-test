import { http } from 'src/plugins/axios'

class Service {

  constructor ({ endpoint, baseUrl, parentEndpoint }) {
    this.http = http
    this.endpoint = endpoint
    this.parentEndpoint = parentEndpoint || null
    this.baseUrl = baseUrl
  }

  buildUrl ({ parentId, id }) {
    if (this.parentEndpoint && !parentId) {
      throw new Error('This service need at least a parent id');
    }
    return this.baseUrl + (this.parentEndpoint ? `${this.parentEndpoint}/${parentId}/` : '') + `${this.endpoint}` + (id ? `/${id}` : '')
  }

  create (payload, parentId = null) {
    const url = this.buildUrl({ parentId })
    return this.http.post(url, payload)
  }

  get (params = {}, parentId = null) {
    const url = this.buildUrl({ parentId })
    return this.http.get(url, {
      params
    })
  }

  find (id , params = {}, parentId = null) {
    const url = this.buildUrl({ parentId, id })
    return this.http.get(url, {
      params
    })
  }

  update (id, payload, parentId) {
    const url = this.buildUrl({ parentId, id })
    return this.http.put(url, payload, {
      params
    })
  }

  delete (id, parentId) {
    const url = this.buildUrl({ parentId, id })
    return this.http.delete(url)
  }

}

export default Service
