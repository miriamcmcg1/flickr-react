import axios from 'axios'

export const fetchSearchImages = async function(city, limit) {
    let url = `https://api.flickr.com/services/rest?safe_search=1&per_page=${limit}&format=json&nojsoncallback=1&api_key=c87626e6505304450a217c8a6a4e20cd&method=flickr.photos.search&tags=${city}&extras=tags`

    const response = await axios.get(url);
    if (response.status === 200) {
      let images = response.data.photos.photo.map(img => {
        return {
          url: `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`,
          title: img.title,
          owner: img.owner,
          tags: img.tags.split(' '),
          id: img.id,
          farm: img.farm,
          secret: img.secret,
          server:img.server
        }
      })
      return images
    } else {
      return []
    }
  }