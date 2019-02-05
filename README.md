## evented-react

[![Greenkeeper badge](https://badges.greenkeeper.io/monokrome/evented-react.svg)](https://greenkeeper.io/)

To handle code with side-effects outside of your components, yo!

## Example:

You can emit events from components like this!

```javascript
import { EventSource } from 'evented-react'

@EventSource('authentication:authenticate')
export default class TheThing extends Component {
  render(props) {
    return (
      <button onClick={props.emit.authenticate()}>
        CLICK THE THING
      </button>
    )
  }
}

```

...but only if your root component (or any parent, really) provides `EventProvider`:

```javascript
import { EventProvider } from 'evented-react'
import TheThing from './your-components/TheThing'

// You should probably put this somewhere more organized! <3
const eventMap = {
  'authentication:authenticate': console.log,
}

ReactDOM.render((
  <EventProvider eventMap={eventMap}>
    <TheThing />
  </EventProvider>
), document.body.children[0])

```

## TODO:

- [ ] Actual documentation
- [ ] Build it somehow
- [ ] Create practical example
- [x] Eat ice cream
