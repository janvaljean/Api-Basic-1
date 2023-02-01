//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((veri) => console.log(veri));

const getData = () => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("url error");
      }
      return res.json();
    })
    .then((data) => show(data));
};

document.querySelector("button").onclick=(e)=>{
  getData()

}


const show = (data) => {
  data.forEach((user) => {
    document.querySelector("section").innerHTML += `
<h1 class='mt-4'>Name : <span class='text-danger'> ${user.login} </span>  </h1>

<img src=${user.avatar_url}  width='50%'/>
<h3> Login :${user.node_id}</h3>

`;
  });
};

