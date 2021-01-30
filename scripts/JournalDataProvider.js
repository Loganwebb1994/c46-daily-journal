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
        .then(parsedEntries => {
            // What should happen when we finally have the array?
            entries = parsedEntries
            
        })
}
