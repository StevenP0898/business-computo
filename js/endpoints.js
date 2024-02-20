const search = async (business) => {
    const url = `https://local-business-data.p.rapidapi.com/search?query=${business}&limit=10&language=en`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '94f8cb0af4msh8872af7221ac2a3p131468jsn3e22fb128e0e', //ProcessingInstruction.env.API_KEY,
		'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com' //ProcessingInstruction.env.API_HOST 
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result.data
	//console.log('@@ Result Search =>', result);
} catch (error) {
	console.error(error);
}
}

//clase de 02/02/24