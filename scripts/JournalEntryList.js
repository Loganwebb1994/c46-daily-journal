import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector("#entryLog")

export const EntryList = () => {
    // Use the journal entry data from the data provider component
    const entries = getEntries()
    .then(render(entries))
}

