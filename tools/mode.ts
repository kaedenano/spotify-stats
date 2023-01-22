export const mode = (features: any) => {

    let arr = [];

    for (let i = 0; i < features.length; i++) {
        arr[i] = features[i].key;
    }

    if (features.length === 0) {
        return null
    }
    let counter: any = {}
    let nativeValues: any = arr;

    let maxCounter = 0;
    let maxValue = null;
    let key;

    for (let i = 0; i < arr.length; i++) {
        if (!counter[arr[i] + "_" + typeof arr[i]]) {
            counter[arr[i] + "_" + typeof arr[i]] = 0;
        }
        counter[arr[i] + "_" + typeof arr[i]]++;
        nativeValues[arr[i] + "_" + typeof arr[i]] = arr[i];

    }
    for (let j = 0; j < Object.keys(counter).length; j++) {
        key = Object.keys(counter)[j];
        if (counter[key] > maxCounter) {
            maxCounter = counter[key];
            maxValue = nativeValues[key];
        }
    }

    return maxValue;

}