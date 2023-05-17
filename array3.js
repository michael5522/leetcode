let post = [
  {title: 'post1', author: 'dab'},
  { title: 'post2', author: 'mike' },
  { title: 'post3', author: 'hando' },
  { title: 'post2', author: 'big mac'}
];

const answer = post.filter( x => x.title == 'post2');
console.log(answer)

let post2 = [
  { title: 'post1', author: 'dab' },
  { title: 'post2', author: 'mike' },
  { title: 'post3', author: 'dab' },
  { title: 'post4', author: 'big mac' }
];



const answer2 = post2.filter(x => x.author == 'dab');
console.log(answer2)


let numba = [1,2,3,4,5];
let totalnumba = numba.reduce((total, curVal) => {
  return total + curVal;
});

console.log(totalnumba)
