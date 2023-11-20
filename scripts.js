function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const inputResult = document.querySelector(".result")

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    inputResult.value = result

}

