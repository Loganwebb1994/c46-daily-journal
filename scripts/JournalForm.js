const contentTarget = document.querySelector(".journalEntry")

export const JournalForm = () =>{
    contentTarget.innerHTML = `
    <fieldset class="journalPage">
        <label for="journalDate">Date of Entry</label>
        <input class="journalItem" type="date" name="journalDate" id="journalDate">
        <label for="conceptsCovered">Concepts Covered</label>
        <input class="journalItem" type="text" name="conceptsCovered" id="conceptsCovered">
        <label for="journalEntry">Journal Entry</label>
        <textarea class="journalItem" name="journalEntry" id="journalEntry" cols="30" rows="10"></textarea>
        <label for="moodSelector">Today's Mood</label>
        <select class="journalItem" name="moodSelector" id="moods">
            <option value="happy">happy</option>
            <option value="neutral">neutral</option>
            <option value="sad">sad</option>
        </select>
    </fieldset>
    <input class="submitEntryButton" type="submit" value="Submit Entry">
    `
}