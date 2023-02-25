const loadQuotes = () => {
    fetch(`https://api.kanye.rest/`)
    .then(res => res.json())
    .then(data => displayQuotes(data))
}
const displayQuotes = (quotes) => {
    const quotesElement = document.getElementById('quotes');
    quotesElement.innerText = `"${quotes.quote}"`
}