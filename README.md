# zemogaUI

A test to prove someone understands full stack web dev.

### Features

Based upon the test, I decided to do this as accesible as possible. [A11y](https://developer.mozilla.org/en-US/docs/Web/Accessibility) is often ignored by developers but this specific page is a great example of justice in motion, giving voice to the unheard. 

For this, I used POSH, and proper React with TS, running on Next and deployed with [Now](zeit.co). Primarily, anything clickable is a button, each section contains a title, and all semantic elements have a name. 

The system saves all votes to [airtable](https://airtable.com/), and fetches from there, this gives it little responsiveness but it might be solved with a cache, a CDN and optimistic rendering.

### Caveats
All data is passing as plaintext, even passwords.  
The exercise is incomplete.

### Improvements
#### Optimistic Rendering
Save to local storage and have a worker sync with the DB.
#### Security 
Salt the password, send email to check user
#### Metrics
No current user tracking
#### Suspense (experimental)
Use new React features for async calls
#### UI
Animations!
Better CSS and layout
#### Separation of Concerns
Currently, all the code lives in the index and is inherited, using the Context API and importing files would help the mantainability
#### User cookies
A cookie should be issued to the user to hold their login info, or a JWT on local storage