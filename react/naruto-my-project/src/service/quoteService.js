const getQuote = () => {

  const data =  fetch('http://localhost:5000/')
        // Tratamento do sucesso
        .then(response => response.json())

    return data
}

export default getQuote