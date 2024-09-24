import { fetchData } from '../../apiRequest/callAPI';
export function displayQuotes(quotesPromise: Promise<{ quote: string; author: string }[]>) {
	quotesPromise
		.then((quotes) => {
			const container = document.getElementById('quotes-container');
			console.log(quotes);
			if (container) {
				container.innerHTML = '<h2>Quotes</h2>'; // Ensure to reset container HTML if needed

				quotes.forEach((quote) => {
					// Create a div for each quote
					const quoteElement = document.createElement('div');
					quoteElement.className = 'quote';

					// Add quote text
					const quoteTextBlock = document.createElement('div');
					quoteTextBlock.className = 'blockquote';
					const quoteText = document.createElement('p');
					quoteText.textContent = `${quote.quote}`;
					quoteTextBlock.appendChild(quoteText);
					quoteElement.appendChild(quoteTextBlock);

					// Add author
					const quoteAuthor = document.createElement('p');
					quoteAuthor.className = 'author';
					quoteAuthor.textContent = `- ${quote.author}`;
					quoteElement.appendChild(quoteAuthor);

					// Append to container
					container.appendChild(quoteElement);
				});
			} else {
				console.error('Container element not found');
			}
		})
		.catch((error) => {
			console.error('Error fetching quotes:', error);
		});
}

export async function useToken(token: string, quotesURL: string) {
	console.log(token, quotesURL);
	const myHeaders = new Headers({
		'content-type': 'application/json',
		Authorization: `Bearer ${token}`
	});
	const headerData = {
		method: 'GET',
		headers: myHeaders
	};

	const quotesPromise = fetchData(quotesURL, headerData);
	quotesPromise.then((data) => {
		console.log(data);
	});
	displayQuotes(quotesPromise);
}
