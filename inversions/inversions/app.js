// count inversions
var filename = "IntegerArray.txt", capacity = 100000;

console.log("This program will count the numbers of inversions in an array of numbers");

var numbers = readNumbersFromFile(filename, capacity);
numbers = [8, 5, 4, 1, 3, 6, 7, 2];

var inversions = sortAndCountInversions(numbers);

console.log("The array contains " + inversions + " inversions.");

/*
* Reads a text file and returns an array of the numbers in the file
*/
function readNumbersFromFile(file, capacity) {
    "use strict";
    var list = [];

    return list;
}

/*
* Sorts a list of numbers and returns the number of inversions
*/
function sortAndCountInversions(full) {
    "use strict";
    var leftInversions = 0, rightInversions = 0, splitInversions = 0, halfCount = Math.floor(full.length / 2);

    // base case
    if (full.length <= 1) {
        return 0;
    }

    // sort left half of array and get inversions on that half
    var left = [];
    for (var i = 0; i < halfCount; i++) {
        left.push(full[i]);
    }
    leftInversions = sortAndCountInversions(left);

    // sort right half of array and get inversions on that half
    var right = [];
    for (var j = 0; j < halfCount; j++) {
        right.push(full[halfCount + j]);
    }
    rightInversions = sortAndCountInversions(right);

    // merge both half arrays and get split inversions
    splitInversions = mergeAndCountSplitInversions(full, left, right);

    return leftInversions + rightInversions + splitInversions;
}

/*
* Merge two half-arrays into full array and returns the number of split inversions
*/
function mergeAndCountSplitInversions(full, left, right) {
    "use strict";
    var splitInversions = 0, i = 0, j = 0, fc = full.length, lc = left.length, rc = right.length;

    for (var k = 0; k < fc; k++) {
        // left array is exhausted
        if (i === lc) {
            for (var n = j; n < rc || k < fc; n++, k++) {
                full[k] = right[n];
            }
            break;
        }

        // right array is exhausted
        if (j === rc) {
            for (var m = i; m < lc || k < fc; m++, k++) {
                full[k] = left[m];
            }
            break;
        }

        if (left[i] < right[j]) {
            full[k] = left[i];
            i++;
        } else {
            full[k] = right[j];

            // increment number of split inversions by the number of remaining numbers in the left array
            splitInversions += left.length - i;

            j++;
        }
    }

    return splitInversions;
}
//# sourceMappingURL=app.js.map
