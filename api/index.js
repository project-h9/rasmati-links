export default function handler(req, res) {
  const links = {
    "7lyuh": "https://google.com",
    "6m0ol": "https://youtube.com"
  };

  const code = req.query.code || "";

  if (links[code]) {
    res.writeHead(302, { Location: links[code] });
    res.end();
  } else {
    res.status(404).send("Not Found");
  }
}
