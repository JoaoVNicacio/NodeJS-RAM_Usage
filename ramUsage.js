// Requerendo o modulo OS
const os = require('os')
// Desestruturando e obtendo as funções desejadas:
const { arch, platform, freemem, totalmem } = os

// Intervalo para atualizar os dados a cada 0,5s:
setInterval(() => {

    // Corriginda a RAM de bytes para Gigas:
    const TOTAL_RAM = parseInt(totalmem() / 1024 ** 2)
    const FREE_RAM = parseInt(freemem() / 1024 ** 2)
    const RAM_USAGE = (FREE_RAM / TOTAL_RAM * 100).toFixed(1)

    // Adicionando os stats:
    const STATS = {
        OS: platform(),
        Arch: arch(),
        FreeRAM: `${FREE_RAM} mb`,
        TotalRAM: `${TOTAL_RAM} mb`,
        RAMUsage: `${RAM_USAGE}% of RAM used`
    }

    // Exibindo as informações no console:
    console.clear()
    console.table(STATS)

    // Export:
    exports.stats = STATS

}, 500)
