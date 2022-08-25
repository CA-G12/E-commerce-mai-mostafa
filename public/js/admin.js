const selectCategory = document.getElementsByTagName('select')[0];
const inputName = document.getElementById('name');
const inputDescription = document.getElementById('description');
const inputImage = document.getElementById('image');
const inputPrice = document.getElementById('price');
const addBtn = document.getElementsByTagName('button')[0];

fetch('/getData')
  .then((data) => data.json())
  .then((data) => {

    data.forEach((element, i) => {
      const option = document.createElement('option');
      option.value = data[i]['id'];
      option.textContent = data[i]['name'];
      selectCategory.appendChild(option);
    });
  });

const handelAddProuducts = () => {
  const header = {
    method: 'POST',
    body: JSON.stringify({
      pro_name: inputName.value,
      description: inputDescription.value,
      category: selectCategory.value,
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
    }).catch(console.log);
};

addBtn.addEventListener('click', handelAddProuducts);