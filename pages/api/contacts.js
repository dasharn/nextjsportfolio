import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "github",
        username: "Dasharn",
        link: "https://github.com/Dasharn",
      },
      {
        medium: "email",
        username: "dasharndennis@gmail.com",
        link: "mailto:dasharndennis@gmail.com",
      },
      {
        medium: "linkedin",
        username: "Dasharn",
        link: "https://www.linkedin.com/in/dasharndennis/",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}