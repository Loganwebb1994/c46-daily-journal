import { getEntries, useJournalEntries,deleteEntry } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".container--left")
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
        <h2 class="newTitle">My Entries</h2>
        ${entriesHTMLRepresentation}
        </div>
        `
    })
    
}


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        deleteEntry(id).then(EntryList)
        

}})