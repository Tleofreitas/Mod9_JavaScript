import * as requestService from './request-services.js';
import Address from '../models/address.js';

// Receber o CEP e retornar o objeto Address
export async function findByCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const result = await requestService.getJson(url);

    const address = new Address(result.cep, result.logradouro, null, result.localidade);
    return address;
}

export function getErrors(address) {
    const errors = {};

    if (!address.cep || address.cep == "") {
        errors.cep = "Campo requerido";
    }
    if (!address.numbers || address.numbers == "") {
        errors.numbers = "Campo requerido";
    }

    return errors;
}