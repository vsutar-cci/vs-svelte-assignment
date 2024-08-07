import { isObjectNotEmpty } from '../utilityCode/utility';
import { type AddNewQuoteResponse } from '../constants/constant';
import { fetchData } from '../apiRequest/callAPI';
import { useToken } from '../quotesDisplayData/displayQuotes';
export function addNewQuote(quotesObj: object, token: string, url: string) {
	if (isObjectNotEmpty(quotesObj)) {
		storeNewQuote(quotesObj, token, url);
	}
}

async function storeNewQuote(postData: object, token: string, url: string) {
	console.log(postData, url);
	console.log(token);
	const headerData = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(postData),

		redirect: 'follow'
	};
	try {
		const quotesPromise = fetchData(url, headerData);
		const data: AddNewQuoteResponse = await quotesPromise;
		console.log('Response data:', data);
		useToken(token, url);
	} catch (error) {
		console.error('Error:', error);
		throw error; // Rethrow the error after logging it
	}
}
