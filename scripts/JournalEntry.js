

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>- ${entry.date}</p>
            <p>${entry.concept}</p>
            <p>${entry.mood.label}</p>
            <p>${entry.entry}</p>
            <button id="deleteEntry--${entry.id}">Delete</button>
        </section>
    `
}
