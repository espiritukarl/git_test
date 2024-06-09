function binarySearch(arr, target, start = 0) {
    const tempLength = Math.floor(arr.length / 2);
    const left = arr.slice(0, tempLength);
    const right = arr.slice(tempLength);
    const middle = arr[tempLength];

    if (arr.length === 0) return "Target not inside array";

    if (target === middle) return start + tempLength;
    else if (target < middle) return binarySearch(left, target, start);
    else if (target > middle) return binarySearch(right, target, start + tempLength);
}

console.log(binarySearch([0, 1, 1, 2, 3, 5, 8, 13], 13))