let links = {};

export default function handler(req, res) {

  // إنشاء رابط
  if (req.method === "POST") {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "No URL" });
    }

    const code = Math.random().toString(36).substring(7);

    links[code] = url;

    return res.status(200).json({
      short: "https://rasmati-links.vercel.app/" + code
    });
  }

  // التحويل
  if (req.method === "GET") {
    const code = req.query.code;

    if (links[code]) {
      return res.redirect(links[code]);
    } else {
      return res.status(404).send("Not found");
    }
  }
}
