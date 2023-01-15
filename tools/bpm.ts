export const bpm = (features: any) => {

    let tempo = 0;

    for (let i = 0; i < features.length; i++) {
        tempo += Math.floor(features[i].tempo);
    }

    return Math.floor(tempo / features.length);

}