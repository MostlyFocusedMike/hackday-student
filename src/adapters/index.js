const urlGet = require('../dummy-db/courses-id.json')
// const url = "http://localhost:3000"
const urlPost = "http://localhost:3000/assets" // this one uses json server
const urlPatch = "http://localhost:3000/assets"

export class CourseAdapter {
  static getOne(courseId) {
    return Promise.resolve(urlGet)
    // return fetch(`${url}/courses/${courseId}`).then(r=>r.json())
  }
}

export class AssetAdapter {
  static create(asset) {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(asset)
    }
    return fetch(urlPost, options)
      .then(r => r.json())
  }

static update(asset) {
    let options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(asset)
    };
    return fetch(`${urlPatch}/${asset.id}`, options)
      .then((response) => response.json())
}

}
