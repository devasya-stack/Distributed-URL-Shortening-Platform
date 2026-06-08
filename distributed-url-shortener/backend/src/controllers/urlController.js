const db = require("../config/db");
const generateShortCode = require("../service/shortener");

exports.createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const shortCode = generateShortCode();

    db.query(
      "INSERT INTO urls (original_url, short_code) VALUES (?, ?)",
      [originalUrl, shortCode],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        res.json({
          id: result.insertId,
          originalUrl,
          shortCode,
        });
      }
    );
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const { code } = req.params;

    db.query(
      "SELECT * FROM urls WHERE short_code = ?",
      [code],
      (err, results) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        if (results.length === 0) {
          return res.status(404).json({
            message: "URL Not Found",
          });
        }

        const url = results[0];

        res.redirect(url.original_url);
      }
    );
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};