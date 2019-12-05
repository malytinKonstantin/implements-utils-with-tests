import '../contains'

// Есть 4 кассеты с купюрами номиналов 5000, 1000, 200, 100. Необходимо представить данными купюрами разбиение заданной суммы.
// Условия:
// На входе: объект с конфигурацией кассет ( например: { "100": 5, "200": 10, "1000": 3, "5000": 1}),
// а также разбиваемая сумма в виде числа (например 93200).
// На выходе: оптимальное, с точки зрения использования купюр, разбиение в формате amount = n0 * c0 + n1 * c1 + ... 
// (например: 700 = 3 * 200 + 1 * 100, но не 700 = 5 * 100 + 1 * 200, при { "100": 5, "200": 10, "1000": 3, "5000": 1})


export const isObject = (item) => {
    if (!item) return false
    return item.constructor === Object
}

export const compareDesc = (a, b) => b.nominal - a.nominal

export const nominalEntrySeq = (nominals) => Object.entries(nominals)
    .map(([nominal, amount]) => ({ nominal: Number(nominal), amount }))
    .sort(compareDesc)

export const NOMINALS = ['100', '200', '500', '1000', '2000', '5000']


export default function currencyAmountCounter(nominals, money) {
    // проверка на валидность агрументов
    if (
        !isObject(nominals) || 
        !Number.isInteger(money) || 
        !NOMINALS.contains(Object.keys(nominals))
    ) {
        return null
    }

    const noninalSrc = nominalEntrySeq(nominals)

    const { nominalsAmount, remainder } = noninalSrc.reduce((acc, item) => {
        const { remainder, nominalsAmount } = acc

        const nominalsAmountByEmpty = Object.assign(nominalsAmount, { [item.nominal]: 0 })
        
        // если номинал купюры превышает значение остатка
        if (item.nominal > remainder) return { remainder, nominalsAmount: nominalsAmountByEmpty }

        const div = Math.trunc(remainder / item.nominal)
        // count - количество купюр по номининалу item.amount
        const count = Math.min(item.amount, div)
        const nextRemainder = remainder - item.nominal * count
        const nextNominalsAmount = Object.assign(nominalsAmount, { [item.nominal]: count })

        return { 
            remainder: nextRemainder, 
            nominalsAmount: nextNominalsAmount
        }
    }, { remainder: money, nominalsAmount: {} })

    if (remainder !== 0) console.warn(`Извините. Банкомат не может выдать сумму ${remainder}!`)

    return nominalsAmount
}