input.onButtonPressed(Button.A, function () {
    basic.showString(" So you chose A...")
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Correct!")
    basic.showString("round 1")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.pause(1000)
    basic.showString("spot the difference")
    basic.showLeds(`
        . # . . #
        # . # . #
        . # . # #
        # . # . .
        . # . # #
        `)
    basic.pause(10000)
    basic.showLeds(`
        . # . . #
        # . # . #
        . # . # #
        # . # . .
        . # . # .
        `)
    basic.pause(20000)
    basic.showString("1 difference")
    basic.showString("round 2")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . # . #
        # # . # #
        . # # . .
        # # . # #
        `)
    basic.pause(5000)
    basic.showLeds(`
        # # # # #
        . . # . #
        # # . # .
        . # # . #
        # # . # #
        `)
    basic.pause(15000)
    basic.showString("Last round.")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # . # # .
        . # . # #
        # . # # #
        # # . # .
        . # # . #
        `)
    basic.pause(4000)
    basic.showLeds(`
        # . # # #
        . # . # #
        # . # # #
        # # . # .
        # . # . #
        `)
    basic.pause(10000)
    basic.showString("Good job you win!")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("So you chose B...")
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("WRONG.")
    basic.pause(1000)
    basic.showString("G")
    basic.showString("A")
    basic.showString("M")
    basic.showString("E")
    basic.showString("O")
    basic.showString("V")
    basic.showString("E")
    basic.showString("R")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
