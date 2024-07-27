import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "paulfidelis";
const yourPassword = "paulfidelis";
const yourAPIKey = "c0449877-ab9d-4977-8c10-36b4c8da8d69";
const yourBearerToken = "d05e2fe1-45e4-4186-8a65-54d75001a4eb";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {

 

  try{

    const result = await axios.get(API_URL + "random" )
    res.render("index.ejs", { content: JSON.stringify(result.data) })


  } catch(error){
    res.status(404).send(error.message)

  }
 
});

app.get("/basicAuth", async (req, res) => {


  try{
    const result = await axios.get(API_URL + "all?page=2", {
      auth:{
        username: yourUsername,
        password: yourPassword,
      }
    })
    res.render("index.ejs", { content: JSON.stringify(result.data) })
  } catch(error){
    res.status(404).send(error.message);

  }
 
});

app.get("/apiKey", async (req, res) => {


  try{
    const result = await axios.get(API_URL +  "filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    })
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch(error){
    res.status(404).send(error.message);
  }

});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", async (req, res) => {

  try{
    const result = await axios.get(API_URL +  "secrets/3", config)
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch(error){
    res.status(404).send(error.message);
  }
 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
