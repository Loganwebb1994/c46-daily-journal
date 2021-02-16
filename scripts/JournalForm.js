const contentTarget = document.querySelector(".journalEntry")
const eventHub = document.querySelector(".container")
import {saveJournalEntry} from "./JournalDataProvider.js"

export const JournalForm = () =>{
    contentTarget.innerHTML = `
    <fieldset class="journalPage">
        <label for="journalDate">Date of Entry</label>
        <input class="journal__date" type="date" name="journalDate" id=""journal__date"">
        <label for="conceptsCovered">Concepts Covered</label>
        <input class="journal__concept" type="text" name="conceptsCovered" id="journal__concept">
        <label for="journalEntry">Journal Entry</label>
        <textarea class="journal__entry" name="journalEntry" id="journal__entry" cols="30" rows="10"></textarea>
        <label for="moodSelector">Today's Mood</label>
        <select class="journal__mood" name="moodSelector" id="journal__mood">
            <option value="happy">happy</option>
            <option value="neutral">neutral</option>
            <option value="sad">sad</option>
        </select>
    </fieldset>
    <input class="submitEntryButton" type="submit" value="SubmitEntry">
    `
}
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.value === "SubmitEntry"){
        debugger
        const date = document.getElementsById("journal__date").value
        const concept = document.getElementsById("journal__concept").value
        const entry = document.getElementsById("journal__entry").value
        const mood = document.getElementsById("journal__mood").value

        const newEntry = {
            date: date,
            concept: concept,
            entry: entry,
            mood: mood
        }
        saveJournalEntry(newEntry)
    }
})