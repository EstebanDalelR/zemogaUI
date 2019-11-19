import { NextPage } from 'next';
import Layout from '../components/layout'
import { useState } from "react"
import Link from 'next/link';
const Login: NextPage = () => {
  let [name, setName] = useState("")
  let [password, setPassword] = useState("")
  let [hasFetched, setFetched] = useState(false)

  let handleSubmit= (e) =>{
    e.preventDefault()
    let data ={ name, password }
    console.log(data)
  }
  return (
    <Layout>
      <style jsx>{`
          form > * {
            margin: 1em;
          }
        `}
      </style>
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
            onChange={(ev)=>setName(ev.target.value)}
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
            onChange={(ev)=>setPassword(ev.target.value)}
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
    </Layout>
  );
}

export default Login;
