input.onButtonPressed(Button.A, function () {
    mySprite.move(1)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    mySprite.change(LedSpriteProperty.X, -1)
    basic.pause(200)
})
let froot: game.LedSprite = null
let y = 0
let x = 0
let mySprite: game.LedSprite = null
basic.showString("CATCH DA FROOTS YEAAAAH BOI")
mySprite = game.createSprite(2, 4)
game.setScore(0)
game.startCountdown(10000)
music.play(music.stringPlayable("B C B C5 B F C5 A ", 120), music.PlaybackMode.LoopingInBackground)
basic.forever(function () {
    x = randint(0, 4)
    y = -1
    for (let index = 0; index < 5; index++) {
        y += 1
        froot = game.createSprite(x, y)
        basic.pause(500)
        if (froot.isTouching(mySprite)) {
            game.addScore(1)
        }
        froot.delete()
    }
})
