// When we're writing our custom hooks, we're *usually* building them atop React's built-in hooks.
import { useState } from 'react';

// This will be the name of the 'key' that we'll write session data to for which row is selected.
// Session storage operates like a key-value store (e.g. like a Python dictionary).
const STORAGE_KEY = 'selectedResource'

export function useSelectedResource() {
	// We'll be using this to set a stateful value and attach it to session storage.
	const [selectedResource, setSelectedResource] = useState(
		// We are going to return values based on what we see in session storage.
		// This logic accesses session storage to determine the default value for this state variable.
		() => {
			// 1. Try to retrieve the data at that key. sessionStorage is built-in to web/DOM;
			//    we don't need to import it.
			const stored = sessionStorage.getItem(STORAGE_KEY) // returns a value if it exists at the key, or null

			// 2. sessionStorage data is stored as JSON; let's parse it out into a JS object.
			if (stored) {
				try {
					return JSON.parse(stored)
				} catch {
					// in the event that whatever is sitting at that key isn't valid JSON,
					// return what we'd want to for a failure case; in this case null
					return null // I can always just write 'return' and it's the same; I'm just choosing to be explicit here.
				}
			}

			return null // if there's nothing there, return null.
		}
	)


	export function updateSelectedResource(resource) {
		// We'll be using this to write a resource to the session storage.
	}
}