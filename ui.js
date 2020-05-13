import {Products, ProductsManagement} from "./products.js";
class Ui {
    constructor() {
        this.uiName = document.getElementById("name");
        this.uiDescription = document.getElementById("description");
        this.uiQuantity = document.getElementById("quantity");
        this.uiForm = document.getElementById("form-data");
        //this.container = document.getElementById("container-table");
        //this.manager =  new ProductsManagement();
        this.uiName1 = document.getElementById("namep");
        this.uiName2 = document.getElementById("namepa");
        this.uiForm2 = document.getElementById("form-data2");
        this.uiName3 = document.getElementById("namere");
        this.uiForm3 = document.getElementById("form-data3");
        this.container = document.getElementById("container-table");
        this.manager =  new ProductsManagement();
        let p1 = new Products("Pollo", "Pollo Sofia", 20);
        let p2 = new Products("Galletas", "Galleras Mabel", 50);
        let p3 = new Products("Pollo", "Pollo Imba", 50);
        this.manager.addProducts(p1);
        this.manager.addProducts(p2);
        this.manager.addProducts(p3);
        this.loadEvents();
    }
    loadEvents() {
        this.uiForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addProducts(
                this.uiName.value,
                this.uiDescription.value,
                this.uiQuantity.value);
            this.clearForm();
        });
        this.uiForm2.addEventListener("submit", (e) => {
            e.preventDefault();
            this.updateProducts(
                this.uiName1.value,
                this.uiName2.value);
            this.clearForm();
        });
        this.uiForm3.addEventListener("submit", (e) => {
            e.preventDefault();
            this.removeProducts(
                this.uiName3.value);
            this.clearForm();
        });
    }
    clearForm() {
                this.uiName.value = "";
                this.uiDescription.value = "";
                this.uiQuantity.value = "";
                this.uiName1.value="";
                this.uiName2.value="";
                this.uiName3.value="";
    }
    loadTable() {
        var html = "";
        for (var i = 0; i < this.manager.showProducts().length; i++) {
            html += `
            <tr>
                <td scope="row">
                ${this.manager.showProducts()[i].name}</td>
                <td>${this.manager.showProducts()[i].description}</td>
                <td>${this.manager.showProducts()[i].quantity}</td>
            </tr>`;
        }
        this.container.innerHTML = html;
    }
    addProducts(name, description, quantity) {
        let p1 = new Products(name, description, quantity);
        this.manager.addProducts(p1);
        this.loadTable();

    }
    updateProducts(nombrea,nombren ){
        let p1 = new Products(name, description, quantity);
        let p3 = new Products(name, description, quantity);
        manager.updateProducts(p1, p3);
        this.loadTable();
    }
    updateProducts(nombrea){
        let p2 = new Products(name, description, quantity);
        manager.removeProducts(p2);
        this.loadTable();
    }
}
let ui = new Ui();
ui.loadTable();
