const water_in = document.getElementById("waterIn").childNodes[2];
const water_level = document.getElementById("waterLevel").childNodes[2];
const water_out = document.getElementById("waterOut").childNodes[2];

const calculateFlowOut = () => {
    if(water_out.value != "" && water_out.value != "0" && water_level.value != "" && water_level.value != "0") {
        water_in.value = (parseFloat(water_out.value) + parseFloat(water_level.value)) / 2.0;
    } else {
        water_in.value = "";
    }
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("keyup", (_) => {
        calculateFlowOut();
    });
    input.addEventListener("change", (_) => {
        calculateFlowOut();
    });
});