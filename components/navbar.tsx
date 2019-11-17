
export default function Navbar (props) {
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
              Past trials
            </li>
            <li>
              How it Works
            </li>
            <li>
              Login / Sign up
            </li>
            <li>
              Search
            </li>
          </ul>
      </div>
    </nav>
  )
}