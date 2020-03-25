const instagram = require("user-instagram");
const NightStalker = require("night-stalker");
(async () => {
  const balanar = await NightStalker.loadBrowser();
  balanar.setUserName("_trickypr");
  
  balanar.getPosts(30)
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      // Error will trigger if the account link provided is false.
      console.error(data);
    });
  
})()
