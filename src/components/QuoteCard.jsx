import useFetchQuote from "../hooks/useFetchQuote";
import "../styles/QuoteCard.css";

function QuoteCard() {
    const { quote, getRandomQuote } = useFetchQuote();

    if (!quote) return null;

    return (
        <section className="quote-card" aria-live="polite">
            <h2 className="quote-title">Quote of the Day</h2>
            <div className="quote-block">
                <blockquote className="quote-text">“{quote.content}”</blockquote>
                <footer className="quote-author"> - {quote.author}</footer>
            </div>
            <button className="quote-refresh-btn" onClick={getRandomQuote}>Get New Quote</button>
        </section>
    );
}

export default QuoteCard;