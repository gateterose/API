// console.log('hello world');
const body = document.querySelector("body");
const btn = document.querySelector("button");
const odered = document.querySelector("ol");
const url = "https://jsonplaceholder.typicode.com/todos";

btn.addEventListener("click", () => {
  // console.log('Hello');

  axios.get(url).then((response) => {
    for (let i = 0; i < 10; i++) {
      let li = document.createElement("li");
      li.textContent = response.data[i].title;
      // for(let j = 0; j<10; j++){
      //   let li = document.createElement('li');
      // li.textContent=response.data[j].id;
      // }

      body.append(li);
    }
  });
});
