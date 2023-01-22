//1. Реалізуйте програму перевірки телефону
//* Використовуючи JS Створіть поле для введення телефону та кнопку збереження
//* Користувач повинен ввести номер телефону у форматі 000-000-00-00
//* Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, якщо номер правильний зробіть зелене тло і використовуючи document.location переведіть користувача на сторінку https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg якщо буде помилка, відобразіть її в діві до input.
const userTelField = document.getElementById('tel');
let errorTel = document.createElement('div');
errorTel.className = 'error';
errorTel.innerHTML = 'Введіть телефон в форматі ХХХ-ХХХ-ХХ-ХХ';
errorTel.style.visibility = true
const checkForm = document.getElementById('checkForm');
checkForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userTel = checkForm[0].value;
    if (/\(?\d{3}\)?([-\/\.])\d{3}\1\d{2}\1\d{2}/.test(userTel) && userTel.length === 13) {
        document.body.innerHTML = '';
        document.body.style.background = "chartreuse";
        document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
    } else {
        errorTel.style.visibility = false;
        userTelField.parentElement.append(errorTel);
    }
})