
export default function Footer (props) {
  return (
    <>
      <style global jsx>{`
            html, body {
              margin: 0;
            }          
        `}
      </style>
      <style jsx>{`
          @media only screen 
          and (max-device-width : 736px) {
          }
          @media only screen 
          and (min-device-width : 736px) {
          }
        `}
      </style>
      <div className='mainContent'>
          Footer
      </div>
    </>
  )
}