export function getChain() {
    return fetch(`${import.meta.env.VITE_BLOCKCHAIN_API_URL}/chain`)
        .then(response => response.json())
}