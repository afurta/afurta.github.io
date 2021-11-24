const btnOpenForm = document.querySelector(".btn__form");
const btnCloseForm = document.querySelector(".form__btn-close");
const btnUpdateForm = document.querySelector(".form__update-btn");
let attrUpdate;

updateTable();
// Кнопка удалить
document.addEventListener("click", event => {
  if (!event.target.classList.contains("delete__item")) return false;
  let attr = event.target.parentNode.parentNode.getAttribute("data-key");
  deleteItemTable(attr);
});
// Кнопка удалить

// Кнопка редактировать
document.addEventListener("click", event => {
  if (!event.target.classList.contains("edit__item")) return false;
  attrUpdate = event.target.parentNode.parentNode.getAttribute("data-key");
  document.querySelector(".form").style.display = "flex";
  document.querySelector(".form__send-btn").style.display = "none";
  document.querySelector(".form__update-btn").style.display = "block";

  const elem = document.querySelector('tr[data-key="' + attrUpdate + '"]');

  document.querySelector(".name").value = `${elem.children[0].textContent}`;
  document.querySelector(".phone").value = `${elem.children[1].textContent}`;
  document.querySelector(".who").value = `${elem.children[2].textContent}`;
});
// Кнопка редактировать

// Кнопка открыть форму
btnOpenForm.addEventListener("click", () => {
  document.querySelector(".form").style.display = "flex";
  document.querySelector(".form__send-btn").style.display = "flex";
  document.querySelector(".form__update-btn").style.display = "none";
  document.querySelector(".name").value = "";
  document.querySelector(".phone").value = "";
  document.querySelector(".who").value = "";
});
// Кнопка открыть форму

// Кнопка закрыть форму
btnCloseForm.addEventListener("click", () => {
  document.querySelector(".form").style.display = "none";
});
// Кнопка закрыть форму

// Кнопка обновить значение в таблице
btnUpdateForm.addEventListener("click", event => {
  updateItemInTable(event.target.parentNode.elements, attrUpdate);
});
// Кнопка обновить значение в таблице

const updateBtn = document.querySelector(".fixed-sect__upd-btn");

updateBtn.addEventListener("click", updateTable);

function validatePhone(phone) {
  let regex = /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
  return regex.test(phone);
}

function formHandler(event) {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const phone = event.target.elements.phone.value;
  const who = event.target.elements.who.value;
  const data = new URLSearchParams(
    "name=" + name + "&phone=" + phone + "&who=" + who + "&act=" + "addToTable"
  );
  if (validatePhone(phone) && phone != "" && who != "" && name != "") {
    document.querySelector(".check__error").style.display = "none";
    fetch("http://localhost:8888/test/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    })
      .then(data => data.json())
      .then(data => {
        const tbody = document.querySelector("table tbody");
        const tr = document.createElement("tr");
        tr.setAttribute("data-key", data[0].id);
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const btnEdit = document.createElement("button");
        const btnDelete = document.createElement("button");

        td1.innerHTML = data[0].name;
        td2.innerHTML = data[0].phone;
        td3.innerHTML = data[0].who;

        btnEdit.innerHTML = "Редактировать";
        btnDelete.innerHTML = "Удалить";
        btnEdit.innerHTML = "Редактировать";
        btnEdit.classList.add("edit__item");
        btnDelete.classList.add("delete__item");
        // btnEdit.setAttribute("data-key", data[0].id);
        // btnDelete.setAttribute("data-key", data[0].id);

        td4.appendChild(btnEdit);
        td5.appendChild(btnDelete);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.appendChild(tr);
      });
  } else {
    document.querySelector(".check__error").style.display = "block";
    return false;
  }
}

function updateTable() {
  const data = new URLSearchParams("act=" + "updateToTable");

  fetch("http://localhost:8888/test/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  })
    .then(data => data.json())
    .then(data => {
      let str = "";
      for (let key in data) {
        str += `<tr data-key=${data[key].id}>
                  <td>${data[key].name}</td>
                  <td>${data[key].phone}</td>
                  <td>${data[key].who}</td>
                  <td><button class='edit__item'>Редактировать</td>
                  <td><button class='delete__item' >Удалить</td>
                </tr>`;
      }
      document.querySelector("table tbody").innerHTML = str;
    });
}

function deleteItemTable(id) {
  const data = new URLSearchParams(
    "act=" + "deleteItemTable" + "&id=" + `${id}`
  );

  fetch("http://localhost:8888/test/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  })
    .then(data => data.json())
    .then(data => {
      deleteDomElem(data);
    });
}

function deleteDomElem(data) {
  const tbody = document.querySelector("table tbody");
  const elem = document.querySelector('tr[data-key="' + data + '"]');
  tbody.removeChild(elem);
}

function updateItemInTable(elem, id) {
  if (validatePhone(elem.phone.value)) {
    document.querySelector(".check__error").style.display = "none";
    const data = new URLSearchParams(
      "name=" +
        elem.name.value +
        "&phone=" +
        elem.phone.value +
        "&who=" +
        elem.who.value +
        "&id=" +
        id +
        "&act=" +
        "updateItemInTable"
    );

    fetch("http://localhost:8888/test/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    })
      .then(data => data.text())
      .then(data => {
        const elemChang = document.querySelector('tr[data-key="' + id + '"]');
        elemChang.children[0].innerHTML = elem.name.value;
        elemChang.children[1].innerHTML = elem.phone.value;
        elemChang.children[2].innerHTML = elem.who.value;
      });
  } else {
    document.querySelector(".check__error").style.display = "block";
    return false;
  }
}
