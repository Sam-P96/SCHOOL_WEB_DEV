const dates = ["2024-1-10", "2025-2-20", "2026-3-20"]
const fdates = dates.map(formatDates)

function formatDates(element){
    const parts = element.split("-");
    return`${parts[2]}/${parts[1]}/${parts[0]}`
}

console.log(fdates)