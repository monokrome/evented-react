## evented-react

To handle code with side-effects outside of your components, yo!

## Example:

You can emit events from components like this!

```javascript
import EventSource from 'evented-react'

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

...but only if you wrapped it in something like this:

```javascript
import EventProvider from 'evented-react'
import TheThing from './your-components/TheThing'

// You should probably put this somewhere more organized! <3
const eventMap = {
  'authentication:authenticate': console.log,
}

<EventProvider eventMap={eventMap}>
  <TheThing />
</EventProvider>
```

## TODO:

[ ]: Actual documentation
[ ]: Build it somehow
[ ]: Create practical example
[x]: Eat ice cream
