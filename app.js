let loading = document.querySelector(".loading");
let group_salida = document.querySelector("#group-salida");
let frase = document.querySelector("#frase");
let resultado = document.querySelector("#resultado");
let opcion = document.querySelector("#opcion");

let convertir = document.querySelector("#convertir");

//FUNCIONES
mostrarLoading = () => {
  loading.style.display = "block";
};

ocultarLoading = () => {
  loading.style.display = "none";
  group_salida.style="none"
};

mostrarResultado = () => {
  group_salida.style.display = "block";
  let res = "";
  if (opcion.value == "1") {
    let mayuscula = frase.value.toUpperCase();
    res = resultado.textContent = mayuscula;
  } else {
    let minuscula = frase.value.toLowerCase();
    res = resultado.textContent = minuscula;
  }
  return res;
};


//EVENTOS
window.addEventListener("load", () => {
  frase.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    mostrarLoading();
    setInterval(() => {
      ocultarLoading();
      mostrarResultado();
    }, 3000);
  }
  if (e.key === "Escape") {
    location.reload()   
  }
});

convertir.addEventListener("click", () => {
  mostrarLoading();
  setInterval(() => {
    ocultarLoading();
    mostrarResultado();
  }, 3000);
});
