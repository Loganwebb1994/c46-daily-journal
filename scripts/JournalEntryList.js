import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("journalStateChanged", event => {
    console.log("The listener to refresh the page after a save works")
    getEntries()
    .then(EntryList)
})

export const EntryList = () => {
    contentTarget.innerHTML = ""
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

