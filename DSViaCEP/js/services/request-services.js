import RequestException from "./exceptions/request-exception.js";

export async function getJson(url) { // Faz a requisição
    try {
        const response = await fetch(url); // Recebe a resposta
        const jsonBody = await response.json(); // Transforma em Json
        return jsonBody;
    }
    catch (e) { // Se der erro devolve a exceção personalizada
        throw new RequestException("Erro ao realizar requisição"); 
    }
}