// First Submission
class EventEmitter1 {
  constructor() {
    this.events = {}
  }

  subscribe(event, cb) {
    this.events[event] = this.events[event] ?? []
    this.events[event].push(cb)

    return {
      unsubscribe: () => {
        this.events[event] = this.events[event].filter((f) => f !== cb)
        //To avoid memory leaks adding a cleanup condition
        if (this.events[event].length === 0) {
          delete this.events[event]
        }
      },
    }
  }

  emit(event, args = []) {
    if (!(event in this.events)) return []
    return this.events[event].map((f) => f(...args))
  }
}

// Second Submission -- > Better Implementation
class EventEmitter {
  constructor() {
    this.events = new Map() // Map to store event subscriptions
    this.subscriptionCount = 0 // Counter to keep track of subscriptions
  }

  // Method to subscribe to an event
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []) // Initialize array for the event if not exists
    }
    const subscriptionId = this.subscriptionCount++ // Unique subscription id
    this.events.get(eventName).push({ id: subscriptionId, callback })

    // Return an object with unsubscribe method
    return {
      unsubscribe: () => {
        const subscribers = this.events.get(eventName)
        const index = subscribers.findIndex((sub) => sub.id === subscriptionId)
        if (index !== -1) {
          subscribers.splice(index, 1) // Remove the subscription
          return undefined
        }
      },
    }
  }

  // Method to emit an event
  emit(eventName, args = []) {
    if (!this.events.has(eventName)) {
      return [] // No subscribers for this event
    }

    const subscribers = this.events.get(eventName)
    const results = subscribers.map((sub) => sub.callback(...args))
    return results
  }
}
