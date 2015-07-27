// count inversions

var filename: string = "IntegerArray.txt",
    capacity: number = 100000;

console.log("This program will count the numbers of inversions in an array of numbers");

var numbers: Array<number> = readNumbersFromFile(filename, capacity);
numbers = [8, 5, 4, 1, 3, 6, 7, 2];

var inversions: number = sortAndCountInversions(numbers);

console.log("The array contains " + inversions + " inversions.");

/*
 * Reads a text file and returns an array of the numbers in the file
 */
function readNumbersFromFile(file: string, capacity: number): Array<number> {
    "use strict";
    var list: Array<number> = [];



    return list;
}

/*
 * Sorts a list of numbers and returns the number of inversions
 */
function sortAndCountInversions(full: Array<number>): number {
    "use strict";
    var leftInversions: number = 0,
        rightInversions: number = 0,
        splitInversions: number = 0,
        halfCount: number = Math.floor(full.length / 2);

    // base case
    if (full.length <= 1) {
        return 0;
    }

    // sort left half of array and get inversions on that half
    var left: Array<number> = [];
    for (var i: number = 0; i < halfCount; i++) {
        left.push(full[i]);
    }
    leftInversions = sortAndCountInversions(left);

    // sort right half of array and get inversions on that half
    var right: Array<number> = [];
    for (var j: number = 0; j < halfCount; j++) {
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
function mergeAndCountSplitInversions(full: Array<number>, left: Array<number>, right: Array<number>): number {
    "use strict";
    var splitInversions: number = 0,
        i: number = 0,
        j: number = 0,
        fc: number = full.length,
        lc: number = left.length,
        rc: number = right.length;


    for (var k: number = 0; k < fc; k++) {

        // left array is exhausted
        if (i === lc) {
            // add remainder of right array onto full array
            for (var n: number = j; n < rc || k < fc; n++, k++) {
                full[k] = right[n];
            }
            break;
        }

        // right array is exhausted
        if (j === rc) {
            // add remainder of left array onto full array
            for (var m: number = i; m < lc || k < fc; m++, k++) {
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