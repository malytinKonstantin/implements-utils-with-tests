// Условия: нет ограничений на размерность множеств, 
// множества могут содержать повторяющиеся элементы.

// Пример (псевдо): [1, 4, 7, 2, 0].contains([4, 0])  // true


Array.prototype.contains = contains

export default function contains(arr) {
    const isContains = el => this.includes(el)
    
    if (!Array.isArray(arr) || arr.length === 0) {
        return false
    }

    return Array.from(new Set(arr)).every(isContains)
}