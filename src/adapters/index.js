const urlGet = require('../dummy-db/courses-id.json')
const url = "https://desolate-scrubland-80473.herokuapp.com"
const urlPost = "http://localhost:3000/assets" // this one uses json server
const urlPatch = "http://localhost:3000/assets"

export class CourseAdapter {
  static getOne(courseId) {
    // return Promise.resolve(urlGet)
    return fetch(`${url}/courses/${courseId}`).then(r=>r.json())
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
    return fetch(`${url}/assets`, options)
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
    console.log('options:', options);
    return fetch(`${url}/assets/${asset.id}`, options)
      .then((response) => response.json())
}

}
