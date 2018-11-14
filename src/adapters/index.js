const urlGet = require('../dummy-db/courses-id.json')
// const url = "http://localhost:3000"
// const urlPost = "../dummy-db/courses-id.json"
// const urlPatch = "../dummy-db/courses-id.json"

export class CoursesAdapter {
  static getOne(courseId) {
    return Promise.resolve(urlGet)
    // return fetch(`${url}/courses/${courseId}`).then(r=>r.json())
  }
}

// export class AssetsAdapter {
//   static create(asset) {
//     let options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(asset)
//     }
//     return fetch(urlPost, options)
//       .then(r => r.json())
//   }
// }

// function update(id,asset) {
//     let options = {
//         method: 'PATCH',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(asset)
//     };
//     return fetch(urlPatch, options)
//         .then((response) => response.json())
// }