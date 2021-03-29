export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = () => {
    return {type: 'RND', value: Math.floor(Math.random() * 10)}
};
export const res = () => ({type: 'RES'}); 