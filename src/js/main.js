function getGameData() {
  return {
    init() {
      getData('https://nubzowhjmtpqanaaanfv.supabase.co/rest/v1/test?select=*')
      .then((data) => {
        console.log('raw data:',data);
        this.title = data[0].gamename;
      });
    },
    rawData: {},
    title: 'loading...'
  }
}

async function getData(url = '',) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIzMzA5NywiZXhwIjoxOTMwODA5MDk3fQ.SmwcEgVk3ZTQEVntPT67se3GKio3OCGwLnUh_ZdY6qU',
      'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIzMzA5NywiZXhwIjoxOTMwODA5MDk3fQ.SmwcEgVk3ZTQEVntPT67se3GKio3OCGwLnUh_ZdY6qU'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
