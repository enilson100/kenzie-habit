import Header from "../controllers/Header.controller.js";
import Main from "../controllers/Main.controller.js";
import Delete from "../controllers/deleteHabit.controller.js";
import createHabit from "../controllers/createHabit.controller.js";
import MainView from "../views/Main.view.js";
import Api from "../models/Api.model.js";
import editHabitController from "../controllers/editHabit.controller.js";
import Anonymous from "../views/Anonymous.js";
import CustomSelect from "../controllers/CustomSelect.controller.js";


Anonymous.redirectLogin()
Header.changeUserImgAndName(Api.user);
Header.buttonCard();
Header.editProfile();
Header.logout();
Header.getInputsEditProfile();

CustomSelect.getUserClick()
CustomSelect.getUserClickCreate()
Main.clickButttonCreate()
Main.showAllComplets()
Main.showAll()
createHabit.controllerHabit()
Delete.deleleHabit()

MainView.renderAllHabits(Api.habitReadAll())
Main.loadMoreButton()
Main.clickCheckbox()
Main.clickButtonEdit()
MainView.checkIfItsComplete()


editHabitController.getUserInput()
editHabitController.closeButton()
