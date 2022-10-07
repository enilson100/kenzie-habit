import Api from "../models/Api.model.js";
import MainView from "../views/Main.view.js";

export default class Header {
  static async userData() {
    const response = await fetch(
      "https://habits-kenzie.herokuapp.com/api/habits",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);
    return response;
  }

  static buttonCard() {
    const button = document.getElementById("header--button");
    const popUp = document.getElementById("wrapper__header--pop-up");
    const seta = document.querySelector(".container-seta");

    button.addEventListener("click", () => {
      seta.classList.toggle("hidden");
      popUp.classList.toggle("hidden");
    });
  }

  static profileHeader(userName, userImg) {
    const wrapperHeader = document.querySelector(".wrapper__header--img");
    const wrapperImg = document.querySelector(".wrapper__sub-header--img");
    const wrapperName = document.querySelector(
      ".wrapper__sub-header--username"
    );

    wrapperImg.innerHTML = "";
    wrapperName.innerHTML = "";
    const imgProfile = document.querySelector("#header--button");
    imgProfile.src = userImg;

    const img = document.createElement("img");
    img.classList.add("img--subheader");
    img.src = userImg;
    img.alt = "user-img";

    const name = document.createElement("p");
    name.innerText = userName;
    name.classList.add("title-4", "title-4--white");

    wrapperHeader.appendChild(imgProfile);
    wrapperImg.appendChild(img);
    wrapperName.appendChild(name);
  }

  static logout() {
    const buttonLogout = document.getElementById("logout");

    buttonLogout.addEventListener("click", () => {
      location.href = "../../index.html";
      localStorage.removeItem("@kenzie-habit:user");
      localStorage.removeItem("@kenzie-habit:token");
    });
  }

  static editProfile() {
    const buttonEdit = document.querySelector("#edit-perfil");
    const modalEdit = document.querySelector("#containerProfileModal");
    const buttonModalX = document.querySelector("#closeButtonEditProfile");
    const modalzin = document.querySelector("#wrapper__header--pop-up");
    const seta = document.querySelector(".container-seta");
    buttonEdit.addEventListener("click", (e) => {
      e.preventDefault();
      seta.classList.toggle("hidden");
      modalzin.classList.toggle("hidden");
      modalEdit.classList.toggle("hidden");
    });

    buttonModalX.addEventListener("click", (e) => {
      e.preventDefault();
      modalEdit.classList.toggle("hidden");
    });
  }

  static saveAlterationModal() {
    const buttonSaveActions = document.querySelector(".button--edit");
    const modalEdit = document.querySelector("#containerProfileModal");
    const inputName = document.getElementById("habit_title");
    const inputImg = document.querySelector("#inputImg");

    buttonSaveActions.addEventListener("click", (e) => {
      e.preventDefault();
      this.profileHeader(inputName.value, inputImg.value);
    });
  }

  static getInputsEditProfile() {
    const form = document.querySelector(".modal-crair-habito-form");
    const button = document.querySelector("#button-save");
    const section = document.querySelector("#containerProfileModal");
    const popUp = document.querySelector('.container_pop-up_edit-profile')

    button.addEventListener("click", async (e) => {
      e.preventDefault();
      const inputName = document.querySelector("#inputName");
      const inputImg = document.querySelector("#inputImg");

      let obj = {
        usr_name: inputName.value,
        usr_image: inputImg.value,
      };

      if (MainView.messageErrorProfile() === false) { 
      await Api.editProfile(obj);

      localStorage.setItem("@kenzie-habit:user", JSON.stringify(obj));

      await this.changeUserImgAndName(obj);
      section.classList.add("hidden");

      popUp.classList.remove("hidden");
        setTimeout(() => {
            popUp.classList.add("hidden");
        }, 3000)

        inputImg.value = ''
        inputName.value = ''
      }
  });
}

  static async changeUserImgAndName(user) {
    let obj = {
      usr_name: user.usr_name,
      usr_image: user.usr_image,
    };
    this.profileHeader(obj.usr_name, obj.usr_image);
    let api = await Api.editProfile(obj);
  }
}
