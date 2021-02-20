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
    <input class="journal__date" type="date" name="journalDate" id="journal__date">
    <h2 class="newTitle">New Journal Entry</h2>
    <form id="newEntryForm>   
        <fieldset>
            <label for="conceptsCovered">Title:</label>
            <input class="journal__concept" type="text" placeholder="
            Main Idea/Concepts Covered" id="journal__concept">
        </fieldset>
        <fieldset>        
            <label for="journalEntry">New Entry:</label>
            <textarea class="journal__entry" placeholder="Begin New Entry..." name="journalEntry" id="journal__entry" cols="30" rows="10"></textarea>
        </fieldset>        
        <fieldset>
            <label for="moodSelector">Today's Mood</label>
            <select class="journal__mood" name="moodSelector" id="journal__mood">
            ${allMoods.map((mood) => {return `<option value="${ mood.id }">${ mood.label }</option>`}).join("")}
            </select>
        </fieldset>
        <fieldset class="buttonLocation">         
            <button class="submitEntryButton" type="submit" id="SubmitEntry">Save Entry</button>
        </fieldset>        
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
