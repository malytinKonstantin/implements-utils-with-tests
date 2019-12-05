import currencyAmountCounter from './currency-amount-counter'

it('test currency-amount-counter utility', () => {
    
    expect(currencyAmountCounter(null, 200.20)).toBeNull()
    
    expect(currencyAmountCounter(undefined, 200.20)).toBeNull()
    
    expect(currencyAmountCounter([], 200.20)).toBeNull()
    
    expect(currencyAmountCounter('str', 100)).toBeNull()
    
    expect(currencyAmountCounter(false, 100)).toBeNull()
    
    expect(currencyAmountCounter({}, 100)).toBeNull()



    const nominals = { 100: 10, 200: 10, 500: 10, 1000: 10, 2000: 10, 5000: 10 }

    expect(currencyAmountCounter(nominals, 3800)).toEqual({ 5000: 0, 2000: 1, 1000: 1, 500: 1, 200: 1, 100: 1 })

    expect(currencyAmountCounter({ 100: 10, 200: 0, 1000: 0 }, 500)).toEqual({ 100: 5, 200: 0, 500: 0, 1000: 0, 2000: 0, 5000: 0 })

    // выведет в консоль сообщение о нехватке купюр номиналом 200  
    expect(currencyAmountCounter({ 100: 1, 200: 3, 1000: 0 }, 900)).toEqual({ 100: 1, 200: 3, 500: 0, 1000: 0, 2000: 0, 5000: 0 })
})