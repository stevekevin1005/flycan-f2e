(function () {
    const START = new Date().getTime();
    let arr = [2, 32, 134, 214, 12, 4, 124, 24564, 564, 564, 54, 5, 456, 456, 5, 54, 45, 45, 66, 46, 465, 46, 46, 46, 465, 46, 465, 4654, 564, 654, 564, 654];
    let text = `
        original array: ${arr}
        sort array: ${bubble(arr)}
        time: ${new Date().getTime() - START} millsecs
    `;
    document.getElementById("content").innerText = text;

    function bubble(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    function quickSort(arr, left = 0, right = arr.length - 1) {
        let len = arr.length,
            index
        if (len > 1) {
            index = partition(arr, left, right)
            if (left < index - 1) {
                quickSort(arr, left, index - 1)
            }
            if (index < right) {
                quickSort(arr, index, right)
            }
        }
        return arr
    }

    function partition(arr, left, right) {
        let middle = Math.floor((right + left) / 2),
            pivot = arr[middle],
            i = left,
            j = right

        while (i <= j) {
            while (arr[i] < pivot) {
                i++
            }
            while (arr[j] > pivot) {
                j--
            }
            if (i <= j) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
                i++
                j--
            }
        }
        return i
    }
})();
