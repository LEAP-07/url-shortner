const { v4: uuidv4 } = require('uuid');
const Url = require('../models/Url');

// Short URL Generator
module.exports.convert = async (req, res) => {
    const { origUrl } = req.body;
    const base = process.env.BASE;
  
    const urlId = uuidv4();
    
    if (origUrl) {
        let url = await Url.findOne({ origUrl });
        if (url) {
          res.json(url);
        } else {
          const shortUrl = `${base}/${urlId}`;
          console.log(shortUrl);
          url = new Url({
            origUrl,
            shortUrl,
            urlId,
            date: new Date().getTime(),
          });
          await url.save();
          res.json(url);
        }
        res.status(500).json('Server Error');
    } else {
      res.status(400).json('Invalid Original Url');
    }
  };
