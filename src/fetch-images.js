const { searchImages } = require('pixabay-api')
var AUTH_KEY = '8825240-c7cbb4a0c138d3f87d226a813';
searchImages(AUTH_KEY, 'fish').then((res) => {
  let imgs = res.hits.map(hit => {
    return hit.largeImageURL
  })
  console.log(imgs)
})

