const selectCategory = document.getElementsByTagName("select")[0];
const inputName = document.getElementById('name')
const inputDescription = document.getElementById('description')
const inputImage = document.getElementById('image')
const inputPrice = document.getElementById('price')
const addBtn = document.getElementsByTagName("button")[0];




    fetch("/getData")
        .then((data) => data.json())
        .then((data) => {
    // console.log(data);

    data.forEach((element, i) => {
        const option = document.createElement("option");
        option.value = data[i]["id"];
        option.textContent = data[i]["name"];
        selectCategory.appendChild(option);
    });
  });

  const handelAddProuducts = () => {
    // errorMessage.textContent = '';
      const header = {
        method: 'POST',
        body: JSON.stringify({
            name: inputName.value,
            description: inputDescription.value,
            category:selectCategory.value,
            image: inputImage.value,
            price: inputPrice.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };
      fetch('/add-product', header)
        .then((data) => data.json())
        .then((data) => {
          console.log(data)
            // printResults(data);
        }).catch(console.log);
    };

    addBtn.addEventListener('click',handelAddProuducts)