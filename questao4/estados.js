let estados = [
    {
        "uf": "sp",
        "valor": 67836.43
    },

    {
        "uf": "rj",
        "valor": 36678.66
    },
    
    {
        "uf": "mg",
        "valor": 29229.88
    },

    {
        "uf": "es",
        "valor": 27165.46
    },

    {
        "uf": "outros",
        "valor": 19849.53
    }
]

let total = 0;
let percentuais = [];

for (let i = 0 ; i < estados.length; i++) {
    total += estados[i].valor
}

for (let i = 0 ; i < estados.length; i++) {
    let percentual = (estados[i].valor / total) * 100;
    percentuais.push(percentual);
}

for (let i = 0 ; i < estados.length; i++) {
    console.log(`${estados[i].uf} - ${percentuais[i].toFixed(2)}`)
}
