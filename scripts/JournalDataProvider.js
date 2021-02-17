const eventHub = document.querySelector(".container")
/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let entries = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(entries=> entries.json())  // Parse as JSON
        .then(taco => entries = taco)
}

const dispatchStateChangeEvent = () => {
    const entryStateChangeEvent = new CustomEvent("journalStateChanged")
    eventHub.dispatchEvent(entryStateChangeEvent)
}

export const saveJournalEntry = (newJournalEntry) => {
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
        .then(getEntries)  // <-- Get all journal entries
        .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}