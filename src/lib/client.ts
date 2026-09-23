import clientData from '../data/client.json';

export const client = clientData;
export const telHref = `tel:${client.phone.replace(/[^0-9+]/g, '')}`;
export const cityState = `${client.address.city}, ${client.address.state}`;
