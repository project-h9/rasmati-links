export default function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "No URL" });
    }

    const short = Math.random().toString(36).substring(7);

    res.status(200).json({
      short: "https://rasmati-links.vercel.app/" + short
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
