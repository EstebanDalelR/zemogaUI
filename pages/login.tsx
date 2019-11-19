import { NextPage } from 'next';
import Layout from '../components/layout'
import { useState } from "react"
import Link from 'next/link';
const Login: NextPage = () => {
  let [name, setName] = useState("")
  let [password, setPassword] = useState("")
  let [hasFetched, setFetched] = useState(false)
  let [userStatus, setUsetStatus] = useState("")
  async function sendUser() {
    let data = {
      "username": name
    }
    let resp = await fetch(
      "/api/login",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
    const myJson = await resp.json();
    return myJson
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    sendUser()
      .then(userpass => {
        setFetched(true)
        if (userpass.user.length > 0) {
          if (userpass.user[0].password === password) {
            setUsetStatus("logged")
          } else {
            setUsetStatus("wrongPass")
          }
        } else {
          setUsetStatus("notFound")
        }
      })
  }
  let handleLogin = () => {
    let ui = <></>
    switch (userStatus) {
      case "logged":
        ui = <div>
          <Link href="/">
            <a>
              <p>
                Logged in, you may now vote in the home
                      </p>
              <p>
                {name}
              </p>
            </a>
          </Link>
        </div>
        break;
      case "wrongPass":
        ui = <div>
          <p style={{ color: "red" }}>Wrong password</p>
          <button onClick={()=>setFetched(false)}>Try again</button>
        </div>
        break;
      case "notFound":
        ui = <div>
          <p style={{ color: "red" }}>User not Found</p>
          <button onClick={()=>setFetched(false)}>Try again</button>
        </div>
        break;
      default:
        break;
    }
    console.log(userStatus)
    console.log(hasFetched)
    console.log(ui)
    return ui
  }
  return (
    <Layout>
      <style jsx>{`
          form > * {
            margin: 1em;
          }
        `}
      </style>
      {hasFetched
        ? <>{handleLogin()}</>
        : <>
          <form onSubmit={(e) => handleSubmit(e)}>
            <h3>Login</h3>
            <div>
              <label htmlFor="name">Username:</label>
              <input
                type="text"
                id="name"
                required
                name="name"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                required
                value={password}
                minLength={4}
                onChange={(ev) => setPassword(ev.target.value)}
                name="password"
              />
            </div>
            <div>
              <label htmlFor="submit">Login:</label>
              <input type="submit" id="submit" name="submit" />
            </div>
          </form>
          <div>
            <Link href="/signup">
              <a>
                Would you rather create an account?
          </a>
            </Link>
          </div>
        </>
      }

    </Layout>
  );
}

export default Login;
