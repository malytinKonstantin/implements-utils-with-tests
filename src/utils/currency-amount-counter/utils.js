export const NOMINALS = ['100', '200', '500', '1000', '2000', '5000']

export const isObject = (item) => {
		if (!item) return false
    return item.constructor === Object
}

export const compareDesc = (a, b) => b.nominal - a.nominal

export const nominalEntrySeq = (nominals) => Object.entries(nominals)
    .map(([nominal, amount]) => ({ nominal: Number(nominal), amount }))
	.sort(compareDesc)

export const getInitialNominalsAmount = (nominals) => 
    nominals.reduce((acc, item) => (acc[item] = 0, acc), {})