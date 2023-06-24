// let button = document.getElementById('button');
// let plain_input = document.getElementById('plain-input');
// let key_input = document.getElementById('key-input');
// let display = document.getElementById('result');



// button.onclick = () => {
//     encrypt(key_input.value, plain_input.value);
// }

function Encrypt() {
    plaintext = document.getElementById("plain-input").value.toLowerCase().replace(/[^a-z]/g, "");
    if (plaintext.length < 1) { alert("please enter some plaintext"); return; }
    var key = parseInt(document.getElementById("key-input").value);
    if (key > Math.floor(2 * (plaintext.length - 1))) { alert("key is too large for the plaintext length."); return; }
    ciphertext = "";
    for (line = 0; line < key - 1; line++) {
        skip = 2 * (key - line - 1);
        j = 0;
        for (i = line; i < plaintext.length;) {
            ciphertext += plaintext.charAt(i);
            if ((line == 0) || (j % 2 == 0)) i += skip;
            else i += 2 * (key - 1) - skip;
            j++;
        }
    }
    for (i = line; i < plaintext.length; i += 2 * (key - 1)) ciphertext += plaintext.charAt(i);
    document.getElementById("result").value = ciphertext;
}

button.onclick = () => {
    Encrypt();
}