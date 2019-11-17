
export default function Footer(props) {
  return (
    <>
      <style jsx>{`
          .footer {
            display: flex;
            align-items: center;
            justify-content: space-around;
            color: lightgrey;
            border-top: medium dotted darkgray;
          }
          .links {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .links > * {
            min-width: 33%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .social {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .social > * {
            display: flex;
            padding-right: 5%;
            align-items: center;
            justify-content: center;
          }
          @media only screen 
          and (max-device-width : 736px) {
          }
          @media only screen 
          and (min-device-width : 736px) {
          }
        `}
      </style>
      <div className='footer'>
        <div className="links">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact us</p>
        </div>
        <div className="social">
          <p>Follow us</p>
          <a href='https://www.instagram.com/estebandalelr/' target='_blank'>
            <div>
              <img width='40px' height='40px' src='/instagramicon.png' />
            </div>
          </a>
          <a href='https://www.facebook.com/estebandalelr' target='_blank'>
            <div>
              <img width='40px' height='40px' src='/facebookicon.png' />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}