const express = require('express');
const Mercury = require('./dist/mercury');

const app = express();

app.get('/', (req, res) => {
  const { url } = req.query;
  if (!url || url === undefined) {
    res.status(200).end('');
    return;
  }
  let timeoutID;
  Mercury.parse(url)
    .then(function(result) {
      res
        .status(200)
        .send(result)
        .end();
      clearTimeout(timeoutID);
    })
    .catch(
      (timeoutID = setTimeout(function() {
        res.status(200).end('');
      }, 20000))
    );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
