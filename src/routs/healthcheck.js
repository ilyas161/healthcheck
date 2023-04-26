const { Router } = require("express");

const router = Router();
const axios = require("axios");

router.get("/healthcheck", async (req, res) => {
  try {
    const response = await axios({
      method: "HEAD",
      url: "https://yesno.wtf/#api",
    });
    const { status } = response;
    if (status === 200) {
      res.render("healthcheck", {
        result: "you will can be connect with yesno's api",
      });
    } else if (status === 500) {
      res.render("healthcheck", {
        result: "you will can't be connect with yesno's api",
      });
    }
  } catch (err) {
    logger.error(err);
  }
});

module.exports = router;
