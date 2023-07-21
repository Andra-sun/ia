var txtInput = document.querySelector("#txtInput");
var voiceList = document.querySelector("#voiceList");
var btnFalar = document.querySelector("#btnFalar");
var synth = window.speechSynthesis;
var voices = [];

NewVoices();

if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = NewVoices;
}

btnFalar.addEventListener("click", () => {
    var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
    var selectedVoiceName =
        voiceList.selectedOptions[0].getAttribute("data-name");
    voices.forEach((voice) => {
        if (voice.name === selectedVoiceName) {
            toSpeak.voice = voice;
        }
    });

    synth.speak(toSpeak);
});

function NewVoices() {
    voices = synth.getVoices();
    var selectedIndex =
        voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = "";

    voices.forEach((voice) => {
        var listItem = document.createElement("option");
        listItem.textContent = voice.name;
        listItem.setAttribute("data-lang", voice.lang);
        listItem.setAttribute("data-name", voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = selectedIndex;
}
