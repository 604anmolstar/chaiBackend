require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData ={
  "login": "604anmolstar",
  "id": 143702172,
  "node_id": "U_kgDOCJC4nA",
  "avatar_url": "https://avatars.githubusercontent.com/u/143702172?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/604anmolstar",
  "html_url": "https://github.com/604anmolstar",
  "followers_url": "https://api.github.com/users/604anmolstar/followers",
  "following_url": "https://api.github.com/users/604anmolstar/following{/other_user}",
  "gists_url": "https://api.github.com/users/604anmolstar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/604anmolstar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/604anmolstar/subscriptions",
  "organizations_url": "https://api.github.com/users/604anmolstar/orgs",
  "repos_url": "https://api.github.com/users/604anmolstar/repos",
  "events_url": "https://api.github.com/users/604anmolstar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/604anmolstar/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-08-31T09:02:50Z",
  "updated_at": "2023-12-25T08:11:51Z"
}

app.get('/', (req, res) => {
  res.send('Hello World! on only slash page ')
})
app.get('/twitter', (req, res) => {
    res.send('<h1>Eh twiiter ala page aw 604anmolstar</h1>')
  })
  app.get('/youtube', (req, res) => {
    res.send('<h1>learnanmol</h1>')
  })
  app.get("/login",(req,res)=>{
    res.send("<h1>you have been logined succussfully</h1>")
  })
  app.get("/github",(req,res)=>{
    res.json(githubData)
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})