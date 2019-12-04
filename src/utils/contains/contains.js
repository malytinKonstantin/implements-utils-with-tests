// Условия: нет ограничений на размерность множеств, 
// множества могут содержать повторяющиеся элементы.

// Пример (псевдо): [1, 4, 7, 2, 0].contains([4, 0])  // true

function contains(arr) {
    const isContains = el => this.includes(el)
    
    if (!Array.isArray(arr) || arr.length === 0) {
        return false
    }

    return arr.every(isContains)
}


Array.prototype.contains = contains