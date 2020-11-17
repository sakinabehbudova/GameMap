var inc = document.getElementsByClassName("stepper");
for (i = 0; i < inc.length; i++) {
    var incI = inc[i].querySelector("input"),
        id = incI.getAttribute("id"),
        min = incI.getAttribute("min"),
        max = incI.getAttribute("max"),
        step = incI.getAttribute("step");
    document
        .getElementById(id)
        .previousElementSibling.setAttribute(
            "onclick",
            "stepperInput('" + id + "', -" + step + ", " + min + ")"
        );
    document
        .getElementById(id)
        .nextElementSibling.setAttribute(
            "onclick",
            "stepperInput('" + id + "', " + step + ", " + max + ")"
        );
}

function stepperInput(id, s, m) {
    var el = document.getElementById(id);
    if (s > 0) {
        if (parseInt(el.value) < m) {
            el.value = parseInt(el.value) + s;
        }
    } else {
        if (parseInt(el.value) > m) {
            el.value = parseInt(el.value) + s;
        }
    }
}