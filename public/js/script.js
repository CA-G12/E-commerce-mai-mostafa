const container = document.querySelector('.products')

fetch("/get-products")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);

    data.forEach((element, i) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      container.appendChild(card)
      const cardHeader = document.createElement("div");
      cardHeader.setAttribute("class", "card-header");
      card.appendChild(cardHeader);

      const cardImg = document.createElement("img");
      cardImg.src = data[i]["image"];
      cardHeader.appendChild(cardImg);

      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      card.appendChild(cardBody);

      const cardcategory = document.createElement("span");
      cardcategory.setAttribute("class", "tag tag-pink");
      cardcategory.textContent = data[i]["name"];
      cardBody.appendChild(cardcategory);

      const cardName = document.createElement("h4");
      cardName.textContent = data[i]["pro_name"];
      cardBody.appendChild(cardName);

      const cardDescription = document.createElement("p");
      cardDescription.textContent = data[i]["description"];
      cardBody.appendChild(cardDescription);

      const cardPrice = document.createElement("h2");
      cardPrice.textContent =`${data[i]["price"]}$`;
      cardBody.appendChild(cardPrice);
    });
  });
