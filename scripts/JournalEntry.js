

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h3>${entry.concept} ${entry.date}</h3>
            <p>${entry.mood.label}</p>
            <p>${entry.entry}</p>
            <button id="deleteEntry--${entry.id}">Delete</button>
        </section>
    `
}
