const express = require("express");
const app = express();
const pool = require("./db");

const cors = require("cors");

//get data
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/question_one_shifts", async (req, res) => {
  try {
    const question_one_shifts = await pool.query(
      "SELECT * FROM question_one_shifts"
    );
    res.json(question_one_shifts.rows);
  } catch (error) {
    console.error(err.message);
  }
});

app.get("/facilities", async (req, res) => {
  try {
    const facilities = await pool.query("SELECT * FROM facilities");
    res.json(facilities.rows);
  } catch (error) {
    console.error(err.message);
  }
});

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await pool.query("SELECT * FROM jobs");
    res.json(jobs.rows);
  } catch (error) {
    console.error(err.message);
  }
});

app.get("/nurses", async (req, res) => {
  try {
    const nurses = await pool.query("SELECT * FROM nurses");
    res.json(nurses.rows);
  } catch (error) {
    console.error(err.message);
  }
});

app.get("/nurse_hired_jobs", async (req, res) => {
  try {
    const nurse_hired_jobs = await pool.query("SELECT * FROM nurse_hired_jobs");
    res.json(nurse_hired_jobs.rows);
  } catch (error) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server on 5000");
});
