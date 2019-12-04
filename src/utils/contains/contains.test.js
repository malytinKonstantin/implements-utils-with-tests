import './contains'

it('test array contains', () => {

    const testArray = [1, 4, 7, 2, 0]

    expect(testArray.contains()).toBeFalsy()

    expect(testArray.contains(null)).toBeFalsy()

    expect(testArray.contains(undefined)).toBeFalsy()

    expect(testArray.contains(1)).toBeFalsy()

    expect(testArray.contains('1233')).toBeFalsy()

    expect(testArray.contains(false)).toBeFalsy()

    expect(testArray.contains({})).toBeFalsy()

    expect(testArray.contains(new Set())).toBeFalsy()

    expect(testArray.contains([])).toBeFalsy()

    expect(testArray.contains([4, 0, 99])).toBeFalsy()
    

    expect(testArray.contains([1, 4 , 7, 2, 0])).toBeTruthy()

    expect(testArray.contains([4, 0])).toBeTruthy()
})