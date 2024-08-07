export async function fetchData(url: string, header: object) {
	const fetchApiData = await fetch(url, header);
	const responseApiData = await fetchApiData.json();
	return responseApiData;
}
