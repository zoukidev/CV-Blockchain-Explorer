export function getChain() {
    return fetch(`${import.meta.env.VITE_BLOCKCHAIN_API_URL}/chain`)
        .then(response => response.json())
}

export function miningBlock(data) {
    return fetch(`${import.meta.env.VITE_BLOCKCHAIN_API_URL}/mine?${new URLSearchParams(data)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
}