import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const projects = [
      {
        name: "Prophet",
        description:
        "I developed a stock price forecasting app in Python using Streamlit and Plotly, integrating the Yahoo Finance API to fetch historical stock data for companies like Palantir and Bloomberg.",
        stack: ["Python", "Streamlit", "Plotly"],
        link: "https://github.com/Dasharn/StockPricePredictor",
        image: "ndss.png",
        largeImage: "liberty-lg.png",
      },
      {
        name: "SilverArrow"  ,
        description:
        "Built a Python cryptocurrency trading bot utilizing the Binance API and Pandas for data processing, incorporating LSTM neural networks via the Keras API to enhance trading strategies.",
        stack: ["Python", "Keras", "Sckit"],
        link: "https://github.com/Dasharn/SilverArrow",
        image: "ndss.png",
        largeImage: "ndss-lg.png",
      },
      {
        name: "WiChat",
        description:
        "Developed a real-time chat application in Python using Flask and Socket.IO, implementing a Client-Server architecture with WebSocket communication for instant messaging.",
        stack: ["Python, Flask, HTML, CSS"],
        link: "https://github.com/Dasharn/WiChat",
        image: "cognizer.png",
      },
      {
        name: "PathSense",
        description:
        "Developed a Pygame-based pathfinding visualizer tool with A*, Dijkstra's, BFS, and Greedy algorithms, featuring an interactive grid GUI with mouse-driven obstacle placement and keyboard shortcuts for algorithm selection and grid reset.",
        stack: ["Javascript", "NodeJS", "Adonis", "Chrome Extension API"],
        link: "https://cognizer.kavin.me/",
        image: "cognizer.png",
      },
      {
        name: "AI Connect 4",
        description:
        "Created a Python desktop Connect 4 application with a Tkinter GUI, featuring an AI player using the minimax algorithm with alpha-beta pruning, while adhering to object-oriented programming principles for enhanced functionality and reusability.",
        stack: ["Python", "Tkinter"],
        link: "https://github.com/Dasharn/AIConnect4",
        image: "sudocrypt.png",
      },
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}