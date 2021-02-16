import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("journalStateChanged", event => {
    getEntries()
    .then(EntryList)
})

export const EntryList = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        const entries = useJournalEntries()
        let entriesHTMLRepresentation = ""
        for (const entry of entries){
            entriesHTMLRepresentation += JournalEntryComponent(entry)
        }
        contentTarget.innerHTML +=`
        <div class="entry__list">
        ${entriesHTMLRepresentation}
        </div>
        `
    })
    
}

