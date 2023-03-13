const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("shop");
  const product = storeitems.querySelectorAll(".box");
  const noitem = document.querySelector(".no-item");
  const resultNumber = document.querySelector(".result-number");

  let hiddenCount = 0;
  for (let i = 0; i < product.length; i++) {
    const pname = product[i].querySelector("h4");
    if (pname) {
      const textvalue = pname.textContent.toUpperCase();
      if (textvalue.indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
        hiddenCount++;
      }
    }
  }

  if (searchbox === "" || searchbox === " ") {
    resultNumber.style.display = "none";
    noitem.style.display = "none";
    product.forEach(p => p.style.display = "");
    return;
  } else {
    resultNumber.style.display = "block";
    resultNumber.textContent = product.length - hiddenCount;
  }


  if (hiddenCount === product.length) {
    noitem.style.display = "block";
  } else {
    noitem.style.display = "none";
    resultNumber.textContent = product.length - hiddenCount;
  }
}
