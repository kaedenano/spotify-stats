export const sortGenre = (artists: any) => {

  let arr = [];

  for (let i = 0; i < artists.length; i++) {
    arr[i] = new Array(artists[i].genres.length);
    for (let j = 0; j < artists[i].genres.length; j++) {
      arr[i][j] = artists[i].genres[j];
    }
  }

  const array = arr;
  const count: any = {};

  for (const innerArray of array) {
    for (const element of innerArray) {
      if (count[element]) {
        count[element]++;
      } else {
        count[element] = 1;
      }
    }
  }

  const ranking = Object.keys(count).sort((a, b) => count[b] - count[a]);

  return ranking;

  // Exporting Rankings
  // for (const [i, element] of ranking.entries()) {
  //   console.log(`${i + 1}位: ${element}(${count[element]}個)`);
  // }

}