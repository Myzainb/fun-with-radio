input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString("Good ")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi :)")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("No")
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("Look")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("What do you want")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    music.playMelody("C5 C5 B B C5 C5 B B ", 120)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Bye")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Come here")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("Yes")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("Lol")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("How are you")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("Okay")
})
radio.setGroup(11)
