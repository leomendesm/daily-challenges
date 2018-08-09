const axios = require('axios'),
    jsonfile = require('jsonfile')
    url = 'https://api.behance.net/v2/projects?q=webdevelopment&client_id=igwO71ewFFJ8OJ0ihlWsgsY0Ycca3NxC',
    file = '/data.json',
    path = process.cwd()
axios.get(url)
.then(res => { 
    console.log(res.data.projects[0].covers.original)
    const content = {img: res.data.projects[0].covers.original, url: res.data.projects[0].url}
    jsonfile.writeFile(path+file, content, function (err) {
        console.error(err)
      })
})