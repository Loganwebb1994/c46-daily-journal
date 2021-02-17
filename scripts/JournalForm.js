import {saveJournalEntry} from "./JournalDataProvider.js"
const contentTarget = document.querySelector(".journalEntry")
const eventHub = document.querySelector(".container")

export const JournalForm = () =>{
    contentTarget.innerHTML = `
    <form>   
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
    </form>
        `
}
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.value === "SubmitEntry"){
        const date = document.getElementById("journal__date").value
        const concept = document.getElementById("journal__concept").value
        const entry = document.getElementById("journal__entry").value
        const mood = document.getElementById("journal__mood").value
        console.log(date, "submit button clicked")
        const newEntry = {
            date: date,
            concept: concept,
            entry: entry,
            mood: mood
        }
        saveJournalEntry(newEntry)
    }
})