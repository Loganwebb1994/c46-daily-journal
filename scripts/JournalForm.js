import {saveJournalEntry} from "./JournalDataProvider.js"
import {getMoods, useMoods} from "./MoodProvider.js"
const contentTarget = document.querySelector(".journalEntry")
const eventHub = document.querySelector(".container")

export const JournalForm = () =>{
    getMoods()
    .then(() =>
    { let moodsArray = useMoods()
    render(moodsArray)})
}

const render = (allMoods) =>{
    contentTarget.innerHTML = `
    <form>   
        <fieldset class="journalPage">
            <label for="journalDate">Date of Entry</label>
            <input class="journal__date" type="date" name="journalDate" id="journal__date">
            <label for="conceptsCovered">Concepts Covered</label>
            <input class="journal__concept" type="text" name="conceptsCovered" id="journal__concept">
            <label for="journalEntry">Journal Entry</label>
            <textarea class="journal__entry" name="journalEntry" id="journal__entry" cols="30" rows="10"></textarea>
            <label for="moodSelector">Today's Mood</label>
            <select class="journal__mood" name="moodSelector" id="journal__mood">
            ${
                allMoods.map(
                    (mood) => {
                        return `<option value="${ mood.id }">${ mood.label }</option>`
                    }
                ).join("")
            }
            </select>
            </fieldset>
            <button class="submitEntryButton" type="submit" id="SubmitEntry">Save Entry</button>
    </form>
    `
}

eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "SubmitEntry"){
        clickEvent.preventDefault()
        console.log("submit button clicked")
        const date = document.getElementById("journal__date").value
        const concept = document.getElementById("journal__concept").value
        const entry = document.getElementById("journal__entry").value
        const mood = document.getElementById("journal__mood").value
        const newEntry = {
            date: date,
            concept: concept,
            entry: entry,
            moodId: parseInt(mood)
        }
        saveJournalEntry(newEntry)
    }
})
