export const mode = (features) => {

    let arr = [];

    for (let i = 0; i < features.length; i++) {
        arr[i] = features[i].key;
    }

    if (features.length === 0) {
        return null
    }
    //回数を記録する連想配列
    let counter = {}
    //本来の値を入れた辞書
    let nativeValues = arr;

    //最頻値とその出現回数を挿入する変数
    let maxCounter = 0;
    let maxValue = null;
    let key;

    for (let i = 0; i < arr.length; i++) {
        //counterに存在しなければ作る。keyは型を区別する
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