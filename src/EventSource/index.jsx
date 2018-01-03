import Promise from 'bluebird'
import React from 'react'

import EventProvider from 'components/EventProvider'

function eventDispatchFunctionName(eventName) {
  const lastIndex = eventName.lastIndexOf(':')
  if (lastIndex === -1) return eventName
  return eventName.slice(lastIndex+1)
}

function eventDispatchFactory(Component, events) {
  function DispatcherComponent(props, context) {
    const eventEmitters = {}

    for (const index in events) {
      const eventName = events[index]
      const handlerName = eventDispatchFunctionName(eventName)
      const emitter = context[EventProvider.name]

      eventEmitters[handlerName] = (...args) =>
        new Promise((resolve, reject) =>
          resolve(emitter.emit(eventName, ...args)))
    }

    const wrappedProps = {...props, emit: eventEmitters}
    return <Component {...wrappedProps} />
  }

  DispatcherComponent.contextTypes = EventProvider.childContextTypes

  return DispatcherComponent
}

export default (...events) => Component => eventDispatchFactory(Component, events)
