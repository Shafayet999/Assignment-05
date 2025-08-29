ans of question 1...
getElementById returns 1 element by id 
getElementsByClassName returns a live HTMLCollection of all elements with that class
querySelector returns the first match 
querySelectorAll returns a static NodeList of all matches 

ans of question 2...
document.createElement("tag")

ans of question 3...
when an event starts at the target element and then “bubbles up” through its parent elements until we stop by propagation stop property.

ans of question 4...
Event delegation attaches one event listener on a parent instead of many on children, then check event.target to handle specific child actions.
Useful because it saves memory, works for dynamically added elements, and keeps code cleaner.

ans of question 5...
preventDefault() stops the default browser action (e.g. link navigation, form submit).
stopPropagation() stops the event from bubbling up to parent elements.
