const { Router } = require("express");

const router = Router();
const axios = require("axios");

router.get("/random", async (req, res) => {
  try {
    const response = await axios.get("https://yesno.wtf/api");
    const { answer } = response.data;
    if (answer === "yes") {
      res.render("random", {
        result: true,
      });
    } else if (answer === "no") {
      res.render("random", {
        result: false,
      });
    } else if (answer === "maybe") {
      res.render("random", {
        result: 500,
      });
    }
  } catch (error) {
    logger.error(error);
  }
});

module.exports = router;
