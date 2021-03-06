import Navbar from './navbar'
import Footer from './footer'

export default function Layout (props) {
  return (
    <>
      <style global jsx>{`
            html, body {
              margin: 0;
            }
            @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
            div {
              font-family: 'Monserrat', sans-serif;
            }
        `}
      </style>
      <style jsx>{`
          @media only screen 
          and (max-device-width : 736px) {
          }
          @media only screen 
          and (min-device-width : 736px) {
            .mainContent{
              padding: 0 10% 0 10%;
            }
          }
        `}
      </style>
      <Navbar />
      <div className='mainContent'>
          {props.children}
        <Footer />
      </div>
    </>
  )
}