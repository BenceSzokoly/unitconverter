const convertBtn = document.getElementById("convert-btn")

const inputNum = document.getElementById("input-num")

convertBtn.addEventListener("click", function() {
    const result1 = Number(inputNum.value) * 3.281;
    const result2 = Number(inputNum.value) / 3.281
    const outputLength = `${inputNum.value} meters = ${result1} feet | ${inputNum.value} feet = ${result2.toFixed(3)} meters`;
    document.getElementById("lengthoutput").innerHTML = outputLength;

    const result3 = Number(inputNum.value) * 0.264;
    const result4 = Number(inputNum.value) / 0.264;
    const outputVolume = `${inputNum.value} liters = ${result3.toFixed(3)} gallons | ${inputNum.value} gallons = ${result4.toFixed(3)} liters`;
    document.getElementById("volumeoutput").innerHTML = outputVolume;

    const result5 = Number(inputNum.value) * 2.204;
    const result6 = Number(inputNum.value) / 2.204;
    const outputMass = `${inputNum.value} kg = ${result5.toFixed(3)} pounds | ${inputNum.value} pounds = ${result6.toFixed(3)} kg`;
    document.getElementById("massoutput").innerHTML = outputMass;

})



