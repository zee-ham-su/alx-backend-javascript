export default function appendToEachArrayValue(array, appendString) {
    const arrayEnd = [];
    for (const value of array) {
        arrayEnd.push(`${appendString}${value}`);
    }

    return arrayEnd;
}