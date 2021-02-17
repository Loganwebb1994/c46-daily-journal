export const JournalEntryComponent = (entry, mood) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>- ${entry.date}</p>
            <p>${entry.concept}</p>
            <p>${mood.label}</p>
            <p>${entry.entry}</p>
        </section>
    `
}