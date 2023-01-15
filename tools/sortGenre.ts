export const sortGenre = (artists: any) => {

  let arr = [];

  // ジャンルを二次元配列に格納
  for (let i = 0; i < artists.length; i++) {
    arr[i] = new Array(artists[i].genres.length);
    for (let j = 0; j < artists[i].genres.length; j++) {
      arr[i][j] = artists[i].genres[j];
    }
  }

  const array = arr;

  // 出現した文字をカウントするためのオブジェクトを定義する
  const count: any = {};

  // 二次元配列を検索し、出現した文字をカウントする
  for (const innerArray of array) {
    for (const element of innerArray) {
      if (count[element]) {
        count[element]++;
      } else {
        count[element] = 1;
      }
    }
  }

  // カウントした結果をもとにランキングを作成する
  const ranking = Object.keys(count).sort((a, b) => count[b] - count[a]);

  return ranking;

  // ランキングを出力する
  // for (const [i, element] of ranking.entries()) {
  //   console.log(`${i + 1}位: ${element}(${count[element]}個)`);
  // }
}