// const time = document.querySelector(".time");

// function hello(name,callback) {
//   console.log("name===", name)
//   callback();
//   callback();
//   callback();
// }
// const myCallback = function() {
//   console.log("나는 callback 함수입니다.")
// };
// hello("김길환",function(){
//   console.log("나는 callback 함수입니다.")
// });
// hello("철수",myCallback);

// setInterval(function(){
//   const now = new Date();
//   const hour = addZero(now.getHours());
//   const min = addZero(now.getMinutes());
//   const sec = addZero(now.getSeconds());
//   time.textContent = `${hour} : ${min} : ${sec}`;
// },1000)

// setInterval(makeTime,1000)
// function makeTime() {
//   let now = new Date();
//   let hour02 = now.getHours();
//   let min02 = now.getMinutes();
//   let sec02 = now.getSeconds();
  
//   time.textContent = `${hour02} : ${min02} : ${sec02}`;
// }

const lunth = ["마라탕", "라면", "순대국", "김밥"]
const gifis = ["루이비똥", "구찌", "샤넬", "디올", "프라다"]

function addZero(num) {
  if(num < 10) {
    return "0" + num;
  }
  return "" + num;
}

const time = document.querySelector(".time");
const gift = document.querySelector(".gift");
console.log(parseInt(Math.random() * 4));

function remainTime(year,month,date){
  const end = new Date(year, month - 1, date - 1, 23, 59, 59);
  const now = new Date();
  const remainTime = (end.getTime() - now.getTime());
  const sec = addZero(parseInt(remainTime / 1000) % 60);
  const min = addZero(parseInt(remainTime / 1000 / 60) % 60);
  const hour = addZero(parseInt(remainTime / 1000 / 60 / 60) % 24);
  const day = addZero(parseInt(remainTime / 1000 / 60 / 60 / 24));
  time.textContent = `${day} day : ${hour} : ${min} : ${sec}`;
  gift.textContent = gifis[parseInt(Math.random() * gifis.length)];
}
setInterval(remainTime, 1000, 2023, 12, 25);

