import express from "express";
import {PORT,BACKEND_URL} from "@repo/common/config"

const app = express();
console.log(BACKEND_URL)
app.get("/",(req,res)=>{
    res.json({
        message:'hello'
    })
})
app.post("/", (req, res) => {
  res.json({
    message: "hi there",
  });
});

app.listen(PORT);
