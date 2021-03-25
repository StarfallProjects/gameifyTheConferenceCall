const { createClient } = supabase
supabase = createClient("https://nubzowhjmtpqanaaanfv.supabase.co", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIzMzA5NywiZXhwIjoxOTMwODA5MDk3fQ.SmwcEgVk3ZTQEVntPT67se3GKio3OCGwLnUh_ZdY6qU');

function getGameData() {
  return {
    init() {
      getData('test')
      .then((response) => {
        // Log the raw data response for reference
        console.log('raw data:',response);
        
        // Set component values
        this.title = response.data[0].gamename;
        
        // Update page title
        document.title = this.title;
      });
    },
    title: 'Loading...'
  }
}

async function getData(tableName) {
    return await supabase
    .from(tableName)
    .select('*')
}

// async function getData(url = '',) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//       'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIzMzA5NywiZXhwIjoxOTMwODA5MDk3fQ.SmwcEgVk3ZTQEVntPT67se3GKio3OCGwLnUh_ZdY6qU',
//       'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIzMzA5NywiZXhwIjoxOTMwODA5MDk3fQ.SmwcEgVk3ZTQEVntPT67se3GKio3OCGwLnUh_ZdY6qU'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     //body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }
