const ALPHABETH = 'abcdefghijklmnopqrstuvwxyzæøå'
let shiftKey = 7 //Denne variabelen inneholder hvor mange plasser boksvaen skal byttes ut med i alfabetet


let elBtn = document.getElementById("tocryptoBtn")
elBtn.addEventListener("click",doEncrypt)


function doEncrypt() {
    let elInput = document.getElementById("tocrypto")
    let aMessage = elInput.value
    let encryptedMessage = encrypt(aMessage, shiftKey)
    
    let elResult = document.getElementById("cryptoResult")

    elResult.innerHTML = encryptedMessage

}



function encrypt(aMessage, shiftKey){
    let encryptedMessage = ""
    
    for (let i = 0; i < aMessage.length; i++){
        encryptedMessage += getNewChar(aMessage[i], shiftKey)  
    }
    
    return encryptedMessage
}

function getNewChar(achar, shiftKey){
    let newChar = achar
    let idxChar = ALPHABETH.indexOf(achar.toLowerCase())
    if (idxChar != -1) {
        let newIdx = idxChar + shiftKey
        if (newIdx >= ALPHABETH.length) {
            newIdx -= ALPHABETH.length
        }
        newChar = ALPHABETH[newIdx]
        if (achar.toLowerCase() != achar)
            newChar = newChar.toUpperCase()
    }
    
    return newChar
}
