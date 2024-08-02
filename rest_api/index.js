import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const yourUsername = "paulfidelis";
const yourPassword = "paulfidelis";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// Adding the bearer token
const yourBearerToken = "d05e2fe1-45e4-4186-8a65-54d75001a4eb";
const config = {
 
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "waiting for data..." });
});

app.post("/get-secret", async (req, res) => { // Changed from GET to POST for body data
  const searchId = req.body.id;

  try {
    const result = await axios.get(`${API_URL}/secrets/${searchId}`, config);
    res.render("index.ejs", {
      content: JSON.stringify(result.data)
    });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  try {
    const result = await axios.post(`${API_URL}/secrets`, req.body, config);
    res.render("index.ejs", {
      content: JSON.stringify(result.data)
    });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.put(`${API_URL}/secrets/${searchId}`, req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.patch(`${API_URL}/secrets/${searchId}`, req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", {
      content: JSON.stringify(error.response.data)
    });
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.delete(`${API_URL}/secrets/${searchId}`, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
