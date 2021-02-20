

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="dateDisplay"> ${entry.date}</div>
            <h3 class="newEntry">${entry.concept}</h3>
            <p class="newEntry">Mood: ${entry.mood.label}</p>
            <p class="newEntry">${entry.entry}</p>
            <button class="deleteButton" id="deleteEntry--${entry.id}">Delete</button>
        </section>
    `
}
