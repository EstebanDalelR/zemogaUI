import { NextPage } from 'next';
import Layout from '../components/layout'
import { useState } from "react"
import Link from 'next/link';
const Signup: NextPage = () => {
  let [name, setName] = useState("")
  let [password, setPassword] = useState("")
  let [age, setAge] = useState("")
  let [marital, setMarital] = useState("Single")
  let [hasSent, setSent] = useState(false)

  async function sendUser() {
    let data = {
      "Username": name,
      "Password": password,
      "Marital": marital,
      "Age": age
    }
    let resp = await fetch(
      "/api/signup",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
    console.log(resp)
    setSent(true)
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    sendUser()
  }
  return (
    <Layout>
      <style jsx>{`
          form > * {
            margin: 1em;
          }
        `}
      </style>
      {!hasSent
        ? (<>
          <form onSubmit={(e) => handleSubmit(e)}>
            <h3>Create User</h3>
            <div>
              <label htmlFor="name">Username:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password (at least 4 chars):</label>
              <input
                type="password"
                id="password"
                value={password}
                required
                minLength={4}
                onChange={(ev) => setPassword(ev.target.value)}
                name="password"
              />
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                value={age}
                min={10}
                onChange={(ev) => setAge(ev.target.value)}
                name="age"
              />
            </div>
            <div>
              <label htmlFor="marital">Marital status:</label>
              <select
                name="marital"
                value={marital}
                onChange={(ev) => setMarital(ev.target.value)}
                id="marital"
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
            <div>
              <label htmlFor="submit">Create:</label>
              <input type="submit" id="submit" name="submit" />
            </div>
          </form>
          <div>
            <Link href="/login">
              <a>
                Would you rather login?
          </a>
            </Link>
          </div>
        </>)
        : (<div>
          <Link href="/">
            <a>
              <p>
                Account Created, you may now navigate home
                </p>
              <p>
                {name}
              </p>
              <p>
                {password}
              </p>
              <p>
                {age}
              </p>
              <p>
                {marital}
              </p>
            </a>
          </Link>
        </div>)
      }

    </Layout>
  );
}

export default Signup;
