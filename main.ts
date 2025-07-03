input.onButtonPressed(Button.A, function () {
    letterIndex = (letterIndex - 1 + alphabet.length) % alphabet.length
    updateDisplay()
})
radio.onReceivedString(function (received) {
    if (!(received.includes(deviceID.toString()))) {
        OLED.clear()
        OLED.newLine()
        OLED.writeString("" + "From Other Microbit:\n" + " " + received)
        basic.showString(received)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.AB, function () {
    message = "" + message + alphabet.charAt(letterIndex)
    updateDisplay()
})
input.onButtonPressed(Button.B, function () {
    letterIndex = (letterIndex + 1) % alphabet.length
    updateDisplay()
})
input.onGesture(Gesture.Shake, function () {
    OLED.clear()
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    if (true) {
        if (message.length > 0) {
            message = message.substr(0, message.length - 1)
            updateDisplay()
        }
    }
})
function updateDisplay () {
    OLED.clear()
    OLED.writeString("Msg: " + message)
    OLED.newLine()
    OLED.newLine()
    OLED.writeString("> " + alphabet.charAt(letterIndex))
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("" + deviceNAME + ":" + message)
    OLED.clear()
    OLED.writeString("Sent to RG 42: " + message)
    basic.showString(message)
    message = ""
})
let message = ""
let letterIndex = 0
let alphabet = ""
let deviceNAME = ""
let deviceID = 0
deviceNAME = control.deviceName()
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ,.\"()!?1234567890"
radio.setGroup(1)
OLED.init(128, 64)
basic.forever(function () {
	
})
