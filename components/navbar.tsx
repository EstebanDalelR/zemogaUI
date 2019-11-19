import Link from 'next/link'

export default function Navbar(props) {
  let checkLogged = () => {
    let loggedUi = <></>
    if (typeof window !== 'undefined') {
      if (localStorage) {
        localStorage.getItem("userId")
          ? loggedUi =
          <button
            onClick={() => localStorage.removeItem("userId")}
          >
            Logout
        </button>
          : loggedUi = <>
            <style jsx>{`
          .login {
            color: white;
            text-decoration: none;
          }
         `}
            </style>
            <Link href={"login"}>
              <a className="login">
                Login / Sign up
        </a>
            </Link>
          </>
      }
    }

    return loggedUi
  }
  return (
    <nav>
      <style jsx>{`
          .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-image: linear-gradient(rgba(0, 0, 0, 0.4) , rgba(0, 0, 0, 0.2));
            color: white;
          }
          .navbar>* {
            width: 50%;
          }
          ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            min-width: 33%;
          }
          li {
            padding-inline: 1%;
            min-width: 25%;
            list-style-type: none;
          }
          a {
            color: white;
            text-decoration: none;
          }
          .pageTitle {
            padding: 2em;
          }
          @media only screen 
          and (max-device-width : 736px) {
          }
          @media only screen 
          and (min-device-width : 736px) {
          }
        `}
      </style>
      <div className='navbar'>
        <span className="pageTitle">
          Rule of Thumb
          </span>
        <ul>
          <li>
            <Link href={"pastTrials"}>
              <a>
                Past trials
              </a>
            </Link>
          </li>
          <li>
            <Link href={"howitwors"}>
              <a>
                How it Works
            </a>
            </Link>
          </li>
          <li>
            {checkLogged()}
          </li>
          <li>
            <Link href={"search"}>
              <a>
                Search
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}