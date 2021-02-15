import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector("#entryLog")

export const EntryList = () => {
    // Use the journal entry data from the data provider component
    const entries = getEntries()
    .then(render(entries))
}

const render = (entriesArray) => {
    contentTarget.innerHTML = 
        `<h3>Entry #${entriesArray.id}</h3>
            ${entriesArray.map(entry =>{
                return`
                    <section id="entry--${entry.id}" class="journalEntry">
                        <p>- ${entry.date}</p>
                        <p>${entry.concept}</p>
                        <p>${entry.mood}</p>
                        <p>${entry.entry}</p>
                    </section>`}).join("")}
