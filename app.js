/**
 * @author Kevin Cioffi
 * 12/2/2023
 */

/**
 * Listen for key strokes and populate \
 * the information on the webpage.
 * @param {Event} e 
 */
function populateKeyCodes(e) {
    const eventData = {};

    eventData['key'] = e.key;
    eventData['keycode'] = e.keyCode;
    eventData['code'] = e.code;

    let key = document.getElementById('element_key');
    let keyCode = document.getElementById('element_keycode');
    let code = document.getElementById('element_code');

    key.textContent = eventData.key;
    keyCode.textContent = eventData.keycode;
    code.textContent = eventData.code;
}

window.addEventListener('keydown', populateKeyCodes);