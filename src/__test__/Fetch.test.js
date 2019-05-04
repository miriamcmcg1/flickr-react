import mockAxios from "axios"
import {fetchSearchImages, getUrl} from "../actions/fetch"

jest.mock('axios');

let result = {
    url: getUrl({
        farm: 66,
        server: "65535",
        id: "47721490912",
        secret: "7ceb3410ed"
    }),
      title: "The wonderful Jennifer from my Cuba trip.",
      owner: "162993122@N05",
      tags: ["cubanmodel","lingerie","cuba","fashion","havana","beauty","cubanphotosession","cubanphotos","photgraphedincuba", "sexy","cubanmodels","glamour","woman","modelocubana","cubanphotoshooting","yvrphotographer","photooftheday","cubanportrait","implied", "jenniferpaezmartinez",],
      id: "47721490912",
      farm: 66,
      secret: "7ceb3410ed",
      server: "65535"
}



let data = {
    "photos": {
        "page": 1,
        "pages": 334605,
        "perpage": 2,
        "total": "669210",
        "photo": [
            {
            "id": "47721490912",
            "owner": "162993122@N05",
            "secret": "7ceb3410ed",
            "server": "65535",
            "farm": 66,
            "title": "The wonderful Jennifer from my Cuba trip.",
            "ispublic": 1,
            "isfriend": 0,
            "isfamily": 0,
            "tags": "cubanmodel lingerie cuba fashion havana beauty cubanphotosession cubanphotos photgraphedincuba sexy cubanmodels glamour woman modelocubana cubanphotoshooting yvrphotographer photooftheday cubanportrait implied jenniferpaezmartinez"
            }]
    },
    "stat": "ok"
    }

it("search data from flickr", async () => {
  const params = {
      city: 'Cuba',
      limit: 1
  }
  
  mockAxios.get.mockResolvedValue({data: data, "status": 200});
  const images = await fetchSearchImages(params.city, params.limit);

  expect(images).toEqual([result]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(`https://api.flickr.com/services/rest?safe_search=1&per_page=1&format=json&nojsoncallback=1&api_key=c87626e6505304450a217c8a6a4e20cd&method=flickr.photos.search&tags=Cuba&extras=tags`);
});