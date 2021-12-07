// Focus Visible Polyfill
import 'focus-visible'

// Internal Modules
import './modules/nav'

let terminalSharingElement = document.getElementById('svg288364');
if (typeof(terminalSharingElement) != 'undefined' && terminalSharingElement != null) {
    terminalSharing()
}
function terminalSharing() {
    const gray = 'rgb(100, 100, 100)'
    const green = 'rgb(77, 209, 93)'
    const firstPrompt = ['.terminal-sharing .g459180']
    const firstLineIds = [
        '.terminal-sharing .path456518',
        '.terminal-sharing .path456520',
        '.terminal-sharing .path456522',
        '.terminal-sharing .path456524',
        '.terminal-sharing .path456526',
        '.terminal-sharing .path456528',
        '.terminal-sharing .path456530',
        '.terminal-sharing .path456532',
        '.terminal-sharing .path456534',
        '.terminal-sharing .path456536',
        '.terminal-sharing .path456538',
        '.terminal-sharing .path456540',
        '.terminal-sharing .path456542',
        '.terminal-sharing .path456544',
        '.terminal-sharing .path456546',
        '.terminal-sharing .path456548',
        '.terminal-sharing .path456550'
    ]
    const secondLineId = '.terminal-sharing .text306031-5'
    const thirdLineId = '.terminal-sharing .text306031-5-9'
    const fourthLineIds = [
        '.terminal-sharing .path458706',
        '.terminal-sharing .path458708',
        '.terminal-sharing .path458710',
        '.terminal-sharing .path458712',
        '.terminal-sharing .path458714',
        '.terminal-sharing .path458716',
        '.terminal-sharing .path458718',
        '.terminal-sharing .path458720',
        '.terminal-sharing .path458722',
        '.terminal-sharing .path458724',
        '.terminal-sharing .path458726',
        '.terminal-sharing .path458728',
        '.terminal-sharing .path458730',
        '.terminal-sharing .path458732',
        '.terminal-sharing .path458734',
        '.terminal-sharing .path458736',
        '.terminal-sharing .path458738',
        '.terminal-sharing .path458740',
        '.terminal-sharing .path458742'
    ]

    const fifthLineId = '.terminal-sharing .text306031-5-4'
    const sixthLineId = '.terminal-sharing .text306031-5-9-8'
    const seventhLineId = '.terminal-sharing .text306031-5-9-0-1'
    const fullPane = '.terminal-sharing .full-pane'
    const lowerPane = '.terminal-sharing .lower-pane'
    const upperPane = '.terminal-sharing .upper-pane'
    const lowerPaneTitle = '.terminal-sharing .lower-pane-title'
    const lowerPaneTitleText = '.terminal-sharing .tspan13287-4-0-8'
    const upperPaneTitle = '.terminal-sharing .upper-pane-title'
    const upperPaneTitleText = '.terminal-sharing .tspan13287-4-0'
    const alicesPane = '.terminal-sharing .alices-pane'
    const alicesPaneTitle = '.terminal-sharing .alices-pane-title'
    const lowerPaneHalf = '.terminal-sharing .rect9847-7'
    const upperPaneHalf = '.terminal-sharing .rect9847-7-5'
    const lowerPaneHalfTitle = '.terminal-sharing .g508274'
    const lowerPaneHalfTitleText =
        '.terminal-sharing .lower-pane-title-text-2-1-1'
    const upperPaneHalfTitle = '.terminal-sharing .g508339'

    const lowerPaneFirstLineIds = [
        '.terminal-sharing .path464011',
        '.terminal-sharing .path464013',
        '', // space
        '.terminal-sharing .path464015',
        '.terminal-sharing .path464017',
        '', //space
        '.terminal-sharing .path464019',
        '.terminal-sharing .path464021',
        '.terminal-sharing .path464023',
        '.terminal-sharing .path464025',
        '.terminal-sharing .path464027',
        '.terminal-sharing .path464029',
        '.terminal-sharing .path464031',
        '.terminal-sharing .path464033',
        '.terminal-sharing .path464035',
        '.terminal-sharing .path464037',
        '.terminal-sharing .path464039',
        '.terminal-sharing .path464041',
        '.terminal-sharing .path464043',
        '.terminal-sharing .path464045',
        '.terminal-sharing .path464047',
        '.terminal-sharing .path464049',
        '.terminal-sharing .path464051',
        '.terminal-sharing .path464053',
        '.terminal-sharing .path464055',
        '.terminal-sharing .path464057',
        '.terminal-sharing .path464059',
        '.terminal-sharing .path464061',
        '.terminal-sharing .path464063'
    ]
    const lowerPaneSecondLineId = '.terminal-sharing .g463929'
    const lowerPaneThirdLineId = '.terminal-sharing .g463935'
    const lowerPaneFourthLineId = '.terminal-sharing .g463945'
    const lowerPaneFifthLineId = '.terminal-sharing .text306031-5-9-0-1-7'
    const lowerPaneFifthAfterPromptLineIds = [
        '.terminal-sharing .path490277',
        '.terminal-sharing .path490279',
        '', // space
        '.terminal-sharing .path490281',
        '.terminal-sharing .path490283',
        '.terminal-sharing .path490285',
        '', // space
        '.terminal-sharing .path490287',
        '.terminal-sharing .path490289',
        '.terminal-sharing .path490291',
        '.terminal-sharing .path490293',
        '.terminal-sharing .path490295',
        '.terminal-sharing .path490297'
    ]
    const lowerPaneSixthLineId = '.terminal-sharing .text306031-5-9-0-1-7-2'
    const aliceJoinOverlay = '.terminal-sharing .g497595'

    const alicesVimCommand = [
        '.terminal-sharing .path510517',
        '.terminal-sharing .path510519',
        '.terminal-sharing .path510521',
        '.terminal-sharing .path510523',
        '.terminal-sharing .path510525',
        '', // space
        '.terminal-sharing .path510527',
        '.terminal-sharing .path510529',
        '.terminal-sharing .path510531',
        '.terminal-sharing .path510533',
        '.terminal-sharing .path510535',
        '.terminal-sharing .path510537',
        '.terminal-sharing .path510539',
        '.terminal-sharing .path510541',
        '.terminal-sharing .path510543',
        '.terminal-sharing .path510545',
        '.terminal-sharing .path510547',
        '.terminal-sharing .path510549',
        '.terminal-sharing .path510551',
        '.terminal-sharing .path510553',
        '.terminal-sharing .path510555',
        '.terminal-sharing .path510557',
        '.terminal-sharing .path510559',
        '.terminal-sharing .path510561',
        '.terminal-sharing .path510563',
        '.terminal-sharing .path510565',
        '.terminal-sharing .path510567'
    ]

    const bobTitle = '.terminal-sharing .bob-title'

    const falseText = [
        '.terminal-sharing .path605562',
        '.terminal-sharing .path605564',
        '.terminal-sharing .path605566',
        '.terminal-sharing .path605568',
        '.terminal-sharing .path605570'
    ]
    const trueText = '.terminal-sharing .text586292'
    const vimFile = '.terminal-sharing .g549457'

    const startSessionSuccessful = '.terminal-sharing .g610596'
    const serverRunning = '.terminal-sharing .g639450'

    const greenCursor = '.terminal-sharing .green-cursor'
    const cyanCursor = '.terminal-sharing .cyan-cursor'
    const mainTimeline = gsap
        .timeline({ repeat: '-1', repeatDelay: 3 })
        .timeScale(1.5)
        .add(typeFirstCommand(), 0)

    function typeFirstCommand() {
        var tl = gsap.timeline()

        // setup
        changeElement(tl, greenCursor, { x: '-=35.2', duration: 0 }, 0)

        // type first command
        typeLine(tl, firstLineIds.slice(0, 5), greenCursor, 0)
        changeManyElements(
            tl,
            firstLineIds.slice(5),
            { opacity: 1, duration: 0, delay: 0.2 },
            '>+0.5'
        )
        changeElement(tl, greenCursor, { x: '+=23.5', duration: 0 }, '<')

        // press enter after first command
        changeElement(
            tl,
            greenCursor,
            { y: '+=5.5', x: '-=39', duration: 0.1 },
            '>+0.4'
        )

        // first output
        changeElement(tl, secondLineId, { opacity: 1, duration: 0 }, '>+0.4')
        changeElement(tl, greenCursor, { x: '+=21', duration: 0 }, '<')

        // first error
        changeElement(tl, thirdLineId, { opacity: 1, duration: 0 }, '>+0.4')
        changeElement(
            tl,
            greenCursor,
            { y: '+=11', x: '-=16', duration: 0 },
            '<'
        )
        changeElement(
            tl,
            fourthLineIds.slice(0, 2),
            { opacity: 1, duration: 0 },
            '<'
        )

        // split pane
        changeElement(tl, fullPane, { opacity: 0, duration: 0 }, '>+0.4')
        changeElement(
            tl,
            upperPane,
            { opacity: 1, stroke: gray, duration: 0 },
            '<'
        )
        changeElement(
            tl,
            upperPaneTitleText,
            { opacity: 1, fill: gray, duration: 0 },
            '<'
        )
        changeElement(tl, lowerPane, { opacity: 1, duration: 0 }, '<')
        changeElement(tl, lowerPaneTitle, { opacity: 1, duration: 0 }, '<')
        changeManyElements(
            tl,
            lowerPaneFirstLineIds.slice(0, 2),
            { opacity: 1, duration: 0 },
            '<'
        )
        changeElement(tl, greenCursor, { y: '+=31.2', duration: 0.1 }, '<')

        // type df command in lower pane
        typeLine(tl, lowerPaneFirstLineIds.slice(2), greenCursor, '>+0.5')

        // df command result
        changeManyElements(
            tl,
            [
                lowerPaneSecondLineId,
                lowerPaneThirdLineId,
                lowerPaneFourthLineId,
                lowerPaneFifthLineId
            ],
            { opacity: 1, duration: 0 },
            '>+0.5'
        )
        changeElement(
            tl,
            greenCursor,
            { y: '+=19', x: '-=51', duration: 0 },
            '<'
        )

        // delete tmp folder
        typeLine(tl, lowerPaneFifthAfterPromptLineIds, greenCursor, '>+0.5')
        changeElement(
            tl,
            greenCursor,
            { y: '+=5', x: '-=25', duration: 0 },
            '<+0.5'
        )
        changeElement(
            tl,
            lowerPaneSixthLineId,
            { opacity: 1, duration: 0 },
            '<'
        )

        // switch focus to top pane
        changeElement(tl, upperPane, { stroke: green, duration: 0 }, '>+0.5')
        changeElement(tl, upperPaneTitleText, { fill: green, duration: 0 }, '<')
        changeElement(tl, lowerPane, { stroke: gray, duration: 0 }, '<')
        changeElement(tl, lowerPaneTitleText, { fill: gray, duration: 0 }, '<')
        changeElement(tl, greenCursor, { y: '-=55', duration: 0.2 }, '<+0.5')

        // alice joins
        changeElement(tl, aliceJoinOverlay, { opacity: 1, duration: 0 }, '>0.5')
        changeElement(tl, aliceJoinOverlay, { opacity: 0, duration: 0 }, '>2')
        changeManyElements(
            tl,
            [
                upperPane,
                upperPaneTitleText,
                lowerPane,
                lowerPaneTitle,
                lowerPaneTitleText,
                upperPaneTitle,
                upperPaneTitleText
            ],
            { opacity: 0, duration: 0 },
            '<'
        )
        changeManyElements(
            tl,
            [
                alicesPane,
                alicesPaneTitle,
                lowerPaneHalf,
                lowerPaneHalfTitle,
                upperPaneHalf,
                bobTitle,
                cyanCursor,
                alicesVimCommand.slice(0, 2)
            ],
            { opacity: 1, duration: 0 },
            '<'
        )
        changeElement(
            tl,
            lowerPaneHalfTitleText,
            { fill: gray, duration: 0 },
            '<'
        )
        changeElement(tl, lowerPaneHalf, { stroke: gray, duration: 0 }, '<')

        // alice starts vim
        typeLine(tl, alicesVimCommand.slice(2), cyanCursor, '>+0.5')
        changeElement(tl, cyanCursor, { opacity: 0, duration: 0 }, '>+0.3')

        // vim starts
        changeManyElements(
            tl,
            alicesVimCommand.filter((e) => e.startsWith('.terminal-sharing .')),
            { opacity: 0, duration: 0 },
            '>'
        )
        changeManyElements(
            tl,
            [vimFile, trueText, cyanCursor],
            { opacity: 1, duration: 0 },
            '>'
        )
        changeElement(
            tl,
            cyanCursor,
            { x: '-=35', y: '+=1.5', duration: 0 },
            '<'
        )

        // alice finds the problematic line
        changeElement(
            tl,
            cyanCursor,
            { x: '+=24.5', y: '+=2.5', duration: 0 },
            '>+0.5'
        )
        changeElement(
            tl,
            cyanCursor,
            { x: '-=19.5', y: '+=2.5', duration: 0 },
            '>+0.2'
        )
        changeElement(
            tl,
            cyanCursor,
            { x: '+=24.5', y: '+=2.5', duration: 0 },
            '>+0.5'
        )
        changeElement(
            tl,
            cyanCursor,
            { x: '-=15.5', y: '+=2.4', duration: 0 },
            '>+0.2'
        )
        changeElement(
            tl,
            cyanCursor,
            { x: '+=20', y: '+=3', duration: 0 },
            '>+0.2'
        )

        // alice deletes true
        changeElement(tl, cyanCursor, { x: '-=7.5', duration: 0 }, '>+0.5')
        changeElement(tl, trueText, { opacity: 0, duration: 0 }, '<')

        // alice types false
        typeLine(tl, falseText, cyanCursor, '>+0.5')

        // start server again
        changeElement(tl, fourthLineIds, { opacity: 1, duration: 0 }, '>+0.4')
        changeElement(tl, greenCursor, { x: '+=34', duration: 0 }, '<')

        // server starts
        changeElement(tl, serverRunning, { opacity: 1, duration: 0 }, '>+0.5')
        changeElement(
            tl,
            startSessionSuccessful,
            { opacity: 0, duration: 0 },
            '<'
        )
        changeManyElements(tl, firstPrompt, { opacity: 0, duration: 0 }, '<')
        changeManyElements(tl, firstLineIds, { opacity: 0, duration: 0 }, '<')
        changeElement(tl, secondLineId, { opacity: 0, duration: 0 }, '<')
        changeElement(tl, thirdLineId, { opacity: 0, duration: 0 }, '<')
        changeManyElements(tl, fourthLineIds, { opacity: 0, duration: 0 }, '<')
        changeElement(tl, fifthLineId, { opacity: 0, duration: 0 }, '<')
        changeElement(tl, sixthLineId, { opacity: 0, duration: 0 }, '<')
        changeElement(tl, seventhLineId, { opacity: 0, duration: 0 }, '<')
        changeElement(tl, greenCursor, { opacity: 0, duration: 0 }, '<')

        return tl
    }

    function typeLine(tl, ids, cursor, phaseNuber) {
        let durations = [
            0.05, 0.025, 0.025, 0.025, 0.05, 0.025, 0.025, 0.025, 0.05, 0.025
        ]
        if (ids[0].startsWith('.terminal-sharing .')) {
            changeElement(
                tl,
                ids[0],
                { opacity: 1, delay: durations[0], duration: 0 },
                phaseNuber
            )
            changeElement(tl, cursor, { x: '+=1.9', duration: 0 }, '<')
        } else {
            changeElement(tl, cursor, { x: '+=1.9', duration: 0 }, phaseNuber)
        }
        for (let i = 1; i < ids.length; i++) {
            let currentId = ids[i]
            let duration = durations[i % durations.length]
            if (currentId.startsWith('.terminal-sharing .')) {
                changeElement(
                    tl,
                    currentId,
                    { opacity: 1, delay: duration, duration: 0 },
                    '<'
                )
                changeElement(tl, cursor, { x: '+=1.9', duration: 0 }, '<')
            } else {
                changeElement(
                    tl,
                    cursor,
                    { x: '+=1.9', delay: duration, duration: 0 },
                    '<'
                )
            }
        }
    }

    function changeElement(tl, el, attrs, phaseNumber) {
        tl.to(el, Object.assign({}, { duration: 0.5 }, attrs), phaseNumber)
    }
    function changeManyElements(tl, elements, attrs, phaseNumber) {
        tl.to(
            elements.join(', '),
            Object.assign({}, { duration: 0.5 }, attrs),
            phaseNumber
        )
    }
}

let bobAliceElement =  document.getElementById('svg21948');
if (typeof(bobAliceElement) != 'undefined' && bobAliceElement != null) {
    bobAliceCodingAnimation()
}
function bobAliceCodingAnimation() {
    const cursor = '.alice-bob-coding .rect91440-9'
    const textChunk1 = '.alice-bob-coding .text-chunk-1'
    const textChunk2 = '.alice-bob-coding .text-chunk-2'
    const addedLine1 = '.alice-bob-coding .added-line-1-1'
    const testsPassing = '.alice-bob-coding .tests-passing'
    const testsPassingFlash = '.alice-bob-coding .tests-passing-flash'
    const testsRunning = '.alice-bob-coding .tests-running'
    const testsFailing = '.alice-bob-coding .tests-failing'
    const testsFailingFlash = '.alice-bob-coding .tests-failing-flash'

    const bobSwitch = '.alice-bob-coding .bob-switch'
    const bobToggleFrame = '.alice-bob-coding .bob-toggle-frame'
    const bobFeatureText =
        '.alice-bob-coding .bob-feature-text, .alice-bob-coding .tspan5182'

    const bobsCursor = '.alice-bob-coding .bobs-cursor'

    const bobsLines =
        '.alice-bob-coding .bobs-line-1, .alice-bob-coding .bobs-line-2, .alice-bob-coding .bobs-line-3, .alice-bob-coding .bobs-line-4, .alice-bob-coding .bobs-line-5, .alice-bob-coding .bobs-line-6'
    const bobsLinesFlashRed =
        '.alice-bob-coding .bobs-line-1-blurred-red, .alice-bob-coding .bobs-line-2-blurred-red, .alice-bob-coding .bobs-line-3-blurred-red, .alice-bob-coding .bobs-line-4-blurred-red, .alice-bob-coding .bobs-line-5-blurred-red, .alice-bob-coding .bobs-line-6-blurred-red'
    const bobsLinesFlashGreen =
        '.alice-bob-coding .bobs-line-1-blurred-green, .alice-bob-coding .bobs-line-2-blurred-green, .alice-bob-coding .bobs-line-3-blurred-green, .alice-bob-coding .bobs-line-4-blurred-green, .alice-bob-coding .bobs-line-5-blurred-green, .alice-bob-coding .bobs-line-6-blurred-green'
    const bobsLine3 = '.alice-bob-coding .bobs-line-3'
    const bobsLine6 = '.alice-bob-coding .bobs-line-6'
    const bobsLineBlurredRed6 = '.alice-bob-coding .bobs-line-6-blurred-red'
    const bobsLineBlurredGreen6 = '.alice-bob-coding .bobs-line-6-blurred-green'

    const aliceChatText = '.alice-bob-coding .alice-chat-text'
    const bobChatText = '.alice-bob-coding .bob-chat-text'

    const brightGreen = 'rgb(94, 255, 113)'
    const cyan = 'rgb(94, 252, 255)'
    const gray = 'rgb(122, 122, 135)'
    const brightRed = 'rgb(255, 94, 98)'

    const mainTimeline = gsap
        .timeline({ repeat: '-1', repeatDelay: 5 })
        .timeScale(2)
        .add(type_first_line(), '+=0.5')
        .add(switchBobOn(), '+=2')
        .add(findBob(), '+=0.5')

    function moveCursor(tl, attrs, phaseNumber) {
        tl.to(cursor, Object.assign({}, { duration: 0.5 }, attrs), phaseNumber)
    }
    function changeElement(tl, el, attrs, phaseNumber) {
        tl.to(el, Object.assign({}, { duration: 0.5 }, attrs), phaseNumber)
    }

    function type_first_line() {
        var tl = gsap.timeline()
        // setup
        tl.set(addedLine1, { scaleX: '0.01', stroke: cyan }, 0)

        // move cursor to beginning of next line
        moveCursor(tl, { y: '+=4', x: '-=29' }, 0)

        // move text down
        changeElement(tl, textChunk2, { y: '+=4.1' }, 0)

        // set tests running
        tl.set(testsPassing, { opacity: 0 }, 0)
        tl.set(testsRunning, { opacity: 1 }, 0)

        // type in first line 1
        tl.to(
            addedLine1,
            { duration: 0, delay: 0.5, opacity: '1', scaleX: '0.1' },
            1
        )
        tl.to(cursor, { duration: 0, x: '+=3' }, '<')

        // type in first line 2
        tl.to(addedLine1, {
            duration: 0,
            delay: 0.5,
            opacity: '1',
            scaleX: '0.2'
        })
        tl.to(cursor, { duration: 0, x: '+=3' }, '<')
        changeElement(
            tl,
            bobsCursor,
            { x: '+=7', y: '+=4', duration: 0.5 },
            '<'
        ) // move bob

        // type in first line 2
        tl.to(addedLine1, {
            duration: 0,
            delay: 0.2,
            opacity: '1',
            scaleX: '0.3'
        })
        tl.to(cursor, { duration: 0, x: '+=3' }, '<')

        // type in first line 3
        tl.to(addedLine1, {
            duration: 0,
            delay: 0.2,
            opacity: '1',
            scaleX: '0.4'
        })
        tl.to(cursor, { duration: 0, x: '+=3' }, '<')

        // type in first line 4
        tl.to(addedLine1, {
            duration: 0,
            delay: 0.5,
            opacity: '1',
            scaleX: '0.5'
        })
        tl.to(cursor, { duration: 0, x: '+=3' }, '<')

        // type in first line 5
        tl.to(addedLine1, {
            duration: 0,
            delay: 0.2,
            opacity: '1',
            scaleX: '0.6'
        })
        tl.to(cursor, { duration: 0, x: '+=2.5' }, '<')

        // type in first line 6
        tl.to(addedLine1, {
            duration: 0,
            delay: 0.2,
            opacity: '1',
            scaleX: '0.7'
        })
        tl.to(cursor, { duration: 0, x: '+=2.5' }, '<')
        changeElement(
            tl,
            bobsCursor,
            { x: '-=11', y: '+=4', duration: 0.5 },
            '<'
        ) // move bob

        // type in first line 7
        tl.to(addedLine1, {
            duration: 0,
            delay: 0.2,
            opacity: '1',
            scaleX: '0.8'
        })
        tl.to(cursor, { duration: 0, x: '+=2.5' }, '<')

        // type in first line 8
        tl.to(addedLine1, {
            duration: 0,
            delay: 0.5,
            opacity: '1',
            scaleX: '0.9'
        })
        tl.to(cursor, { duration: 0, x: '+=3' }, '<')
        changeElement(tl, bobsCursor, { x: '-=3', duration: 0 }, '<') // move bob
        changeElement(tl, bobsLine6, { scaleX: '0.95', duration: 0 }, '<') // reduce bobs line size
        changeElement(
            tl,
            bobsLineBlurredRed6,
            { scaleX: '0.95', duration: 0 },
            '<'
        ) // reduce bobs line size
        changeElement(
            tl,
            bobsLineBlurredGreen6,
            { scaleX: '0.95', duration: 0 },
            '<'
        ) // reduce bobs line size

        // type in first line 9
        tl.to(addedLine1, {
            duration: 0,
            delay: 0.3,
            opacity: '1',
            scaleX: '1'
        })
        tl.to(cursor, { duration: 0, x: '+=3' }, '<')
        changeElement(tl, bobsCursor, { x: '-=3', duration: 0 }, '<') // move bob
        changeElement(tl, bobsLine6, { scaleX: '0.9', duration: 0 }, '<') // reduce bobs line size
        changeElement(
            tl,
            bobsLineBlurredRed6,
            { scaleX: '0.9', duration: 0 },
            '<'
        ) // reduce bobs line size
        changeElement(
            tl,
            bobsLineBlurredGreen6,
            { scaleX: '0.9', duration: 0 },
            '<'
        ) // reduce bobs line size

        return tl
    }

    function switchBobOn() {
        var tl = gsap.timeline()

        // switch bob on
        changeElement(tl, bobSwitch, { x: '+=4.1', fill: cyan, stroke: cyan })
        changeElement(tl, bobToggleFrame, { stroke: cyan }, '<')
        changeElement(tl, bobFeatureText, { fill: cyan }, '<')

        changeElement(tl, bobsLines, { fill: cyan, stroke: cyan }, '<')

        // set tests running
        tl.set(testsPassing, { opacity: 0 }, '<')
        tl.set(testsRunning, { opacity: 1 }, '<')

        // set tests failing
        tl.set(testsFailing, { opacity: 1 }, '<+2')
        tl.set(testsRunning, { opacity: 0 }, '<')

        // flash bob's lines red
        tl.set(bobsLines, { fill: brightRed, stroke: brightRed }, '<')
        tl.set(bobsLinesFlashRed, { opacity: 1 }, '<')
        tl.set(testsFailingFlash, { opacity: 1 }, '<')
        tl.set(bobsLines, { fill: cyan, stroke: cyan }, '<+0.4')
        tl.set(bobsLinesFlashRed, { opacity: 0 }, '<')
        tl.set(testsFailingFlash, { opacity: 0 }, '<')
        tl.set(bobsLines, { fill: brightRed, stroke: brightRed }, '<+0.4')
        tl.set(testsFailingFlash, { opacity: 1 }, '<')
        tl.set(bobsLinesFlashRed, { opacity: 1 }, '<')
        tl.set(bobsLines, { fill: cyan, stroke: cyan }, '<+0.4')
        tl.set(bobsLinesFlashRed, { opacity: 0 }, '<')
        tl.set(testsFailingFlash, { opacity: 0 }, '<')
        tl.set(bobsLines, { fill: brightRed, stroke: brightRed }, '<+0.4')
        tl.set(bobsLinesFlashRed, { opacity: 1 }, '<')
        tl.set(testsFailingFlash, { opacity: 1 }, '<')
        tl.set(bobsLines, { fill: cyan, stroke: cyan }, '<+0.4')
        tl.set(bobsLinesFlashRed, { opacity: 0 }, '<')
        tl.set(testsFailingFlash, { opacity: 0 }, '<')
        tl.set(bobsLines, { fill: brightRed, stroke: brightRed }, '<+0.4')
        tl.set(bobsLinesFlashRed, { opacity: 1 }, '<')
        tl.set(testsFailingFlash, { opacity: 1 }, '<')
        tl.set(bobsLines, { fill: cyan, stroke: cyan }, '<+0.4')
        tl.set(bobsLinesFlashRed, { opacity: 0 }, '<')
        tl.set(testsFailingFlash, { opacity: 0 }, '<')

        return tl
    }

    function findBob() {
        var tl = gsap.timeline()

        changeElement(tl, bobsCursor, { x: '-=3', duration: 0.5 }, '<') // move bob
        changeElement(tl, bobsCursor, { x: '-=3', duration: 0.2 }) // move bob
        changeElement(tl, bobsCursor, { x: '-=3', duration: 0.2 }) // move bob

        // move cursor to bob's code
        moveCursor(
            tl,
            { y: '+=24.7', x: '+=25', duration: 0.5, ease: 'bounce' },
            '<+2'
        )

        // chat with bob
        changeElement(tl, aliceChatText, { opacity: 1 }, '<+2')
        changeElement(tl, bobChatText, { opacity: 1 }, '<+4')

        // backspace 1
        changeElement(tl, bobsLine3, {
            scaleX: '0.95',
            delay: '2.5',
            duration: 0
        })
        moveCursor(tl, { x: '-=3', duration: 0 }, '<')

        // set tests running
        tl.set(testsFailing, { opacity: 0 }, '<')
        tl.set(testsRunning, { opacity: 1 }, '<')

        // backspace 2
        changeElement(tl, bobsLine3, {
            scaleX: '0.9',
            duration: 0,
            delay: '0.2'
        })
        moveCursor(tl, { x: '-=3', duration: 0 }, '<')

        // backspace 3
        changeElement(tl, bobsLine3, {
            scaleX: '0.85',
            duration: 0,
            delay: '0.2'
        })
        moveCursor(tl, { x: '-=3', duration: 0 }, '<')

        // typing 1
        changeElement(tl, bobsLine3, {
            scaleX: '0.9',
            delay: '2.5',
            duration: 0
        })
        moveCursor(tl, { x: '+=3', duration: 0 }, '<')

        // typing 2
        changeElement(tl, bobsLine3, {
            scaleX: '0.95',
            duration: 0,
            delay: '0.2'
        })
        moveCursor(tl, { x: '+=3', duration: 0 }, '<')

        // typing 3
        changeElement(tl, bobsLine3, { scaleX: 1, duration: 0, delay: '0.2' })
        moveCursor(tl, { x: '+=3', duration: 0 }, '<')

        // set tests passing
        tl.set(testsRunning, { opacity: 0 }, '<+1')
        tl.set(testsPassing, { opacity: 1 }, '<')

        // flash bob's lines green
        tl.set(bobsLines, { fill: brightGreen, stroke: brightGreen }, '<')
        tl.set(bobsLinesFlashGreen, { opacity: 1 }, '<')
        tl.set(testsPassingFlash, { opacity: 1 }, '<')
        tl.set(bobsLines, { fill: cyan, stroke: cyan }, '<+0.4')
        tl.set(bobsLinesFlashGreen, { opacity: 0 }, '<')
        tl.set(testsPassingFlash, { opacity: 0 }, '<')
        tl.set(bobsLines, { fill: brightGreen, stroke: brightGreen }, '<+0.4')
        tl.set(bobsLinesFlashGreen, { opacity: 1 }, '<')
        tl.set(testsPassingFlash, { opacity: 1 }, '<')
        tl.set(bobsLines, { fill: cyan, stroke: cyan }, '<+0.4')
        tl.set(bobsLinesFlashGreen, { opacity: 0 }, '<')
        tl.set(testsPassingFlash, { opacity: 0 }, '<')
        tl.set(bobsLines, { fill: brightGreen, stroke: brightGreen }, '<+0.4')
        tl.set(bobsLinesFlashGreen, { opacity: 1 }, '<')
        tl.set(testsPassingFlash, { opacity: 1 }, '<')
        tl.set(bobsLines, { fill: cyan, stroke: cyan }, '<+0.4')
        tl.set(bobsLinesFlashGreen, { opacity: 0 }, '<')
        tl.set(testsPassingFlash, { opacity: 0 }, '<')
        tl.set(bobsLines, { fill: brightGreen, stroke: brightGreen }, '<+0.4')
        tl.set(bobsLinesFlashGreen, { opacity: 1 }, '<')
        tl.set(testsPassingFlash, { opacity: 1 }, '<')
        tl.set(bobsLines, { fill: cyan, stroke: cyan }, '<+0.4')
        tl.set(bobsLinesFlashGreen, { opacity: 0 }, '<')
        tl.set(testsPassingFlash, { opacity: 0 }, '<')

        return tl
    }
}

let aboveFoldElement =  document.getElementById('hero-image');
if (typeof(aboveFoldElement) != 'undefined' && aboveFoldElement != null) {
    aboveFoldAnimation()
}
function aboveFoldAnimation() {
    gsap.registerPlugin(MotionPathPlugin)
    const sublimeOrb = '.above-fold-animation .sublime-orb'
    const vscodeOrb = '.above-fold-animation .vscode-orb'
    const intellijOrb = '.above-fold-animation .intellij-orb'
    const vimOrb = '.above-fold-animation .vim-orb'

    const vscodeOrbit = '.above-fold-animation .vscode-outer-orbit'
    const vscodeSatellite = '.above-fold-animation .vscode-satellite'

    const intellijOrbit = '.above-fold-animation .intellij-orbit'
    const intellijSatellite = '.above-fold-animation .intellij-satellite'

    const vimOrbit = '.above-fold-animation .vim-orbit'
    const vimSatellite = '.above-fold-animation .vim-satellite'

    const sublimeOrbit = '.above-fold-animation .sublime-orbit'
    const sublimeSatellite = '.above-fold-animation .sublime-satellite'

    const greenCursor = '.above-fold-animation .green-cursor'
    const purpleCursor = '.above-fold-animation .purple-cursor'
    const cyanCursor = '.above-fold-animation .cyan-cursor'
    const yellowCursor = '.above-fold-animation .yellow-cursor'

    const line1 = '.above-fold-animation .code-line-1'
    const line2 = '.above-fold-animation .code-line-2'
    const line3 = '.above-fold-animation .code-line-3'
    const line4 = '.above-fold-animation .code-line-4'
    const line5 = '.above-fold-animation .code-line-5'
    const line6 = '.above-fold-animation .code-line-6'
    const line7 = '.above-fold-animation .code-line-7'
    const line8 = '.above-fold-animation .code-line-8'

    const addedLine1 = '.above-fold-animation .added-code-line-1'
    const addedLine2 = '.above-fold-animation .added-code-line-2'
    const addedLine3 = '.above-fold-animation .added-code-line-3'
    const addedLine4 = '.above-fold-animation .added-code-line-4'
    const addedLine5 = '.above-fold-animation .added-code-line-5'
    const addedLine6 = '.above-fold-animation .added-code-line-6'
    const addedLine7 = '.above-fold-animation .added-code-line-7'
    const addedLine8 = '.above-fold-animation .added-code-line-8'

    animateOrbs()
    const mainTimeline = gsap
        .timeline({ repeat: '-1' })
        .add(typingSecond0(), 0)
        .add(typingSecond1(), 1)
        .add(typingSecond2(), 2)
        .add(typingSecond3(), 3)
        .add(typingSecond4(), 4)
        .add(typingSecond5(), 5)
        .add(typingSecond6(), 6)
        .add(typingSecond7(), 7)
        .add(typingSecond8(), 8)
        .add(typingSecond9(), 9)

    function typingSecond0() {
        var tl = gsap.timeline()
        // setup
        changeManyElements(
            tl,
            [
                addedLine1,
                addedLine2,
                addedLine3,
                addedLine4,
                addedLine5,
                addedLine6,
                addedLine7,
                addedLine8
            ],
            { opacity: 0, duration: 0 },
            0
        )

        // yellow
        moveCursor(
            tl,
            yellowCursor,
            { y: '-=15', x: '-=21', ease: 'power1.inOut', duration: 0.5 },
            0
        )
        typeInLine(tl, yellowCursor, line5, 0.2, '>')
        typeInLine(tl, yellowCursor, line5, 0.2, '>')
        typeInLine(tl, yellowCursor, line5, 0.1, '>')

        // green
        cursorBackspace(tl, greenCursor, line1, 0.2, 0)
        cursorBackspace(tl, greenCursor, line1, 0.3, '>')
        cursorBackspace(tl, greenCursor, line1, 0.1, '>')
        cursorBackspace(tl, greenCursor, line1, 0.1, '>')
        cursorBackspace(tl, greenCursor, line1, 0.3, '>')

        // purple
        cursorBackspace(tl, purpleCursor, line4, 0.3, 0)
        cursorBackspace(tl, purpleCursor, line4, 0.1, '>')
        cursorBackspace(tl, purpleCursor, line4, 0.1, '>')
        typeInLine(tl, purpleCursor, line4, 0.1, '>')
        typeInLine(tl, purpleCursor, line4, 0.1, '>')
        tabInLine(tl, purpleCursor, line4, 0.1, '>')
        typeInLine(tl, purpleCursor, line4, 0.1, '>')
        typeInLine(tl, purpleCursor, line4, 0.1, '>')

        // cyan
        typeInLine(tl, cyanCursor, line6, 0.3, 0)
        typeInLine(tl, cyanCursor, line6, 0.3, '>')
        moveCursor(
            tl,
            cyanCursor,
            { x: '+=26', ease: 'power1.inOut', duration: 0.4 },
            '>'
        )

        return tl
    }

    function typingSecond1() {
        var tl = gsap.timeline()

        // yellow
        typeInLine(tl, yellowCursor, line5, 0.1, 0)
        typeInLine(tl, yellowCursor, line5, 0.2, '>')
        typeInLine(tl, yellowCursor, line5, 0.4, '>')
        typeInLine(tl, yellowCursor, line5, 0.2, '>')
        typeInLine(tl, yellowCursor, line5, 0.1, '>')

        // green
        moveCursor(tl, greenCursor, { y: '+=5', x: '-=16.5' }, 0)
        changeElement(tl, addedLine2, { opacity: 1, scaleX: 0, duration: 0 }, 0)
        moveElementsDown(
            tl,
            [
                line2,
                line3,
                line4,
                line5,
                line6,
                line7,
                line8,
                purpleCursor,
                cyanCursor,
                yellowCursor
            ],
            0
        ) // 0.5 seconds
        typeInLine(tl, greenCursor, addedLine2, 0.2, '>', { scale: 0.05 })
        typeInLine(tl, greenCursor, addedLine2, 0.1, '>', { scale: 0.05 })
        typeInLine(tl, greenCursor, addedLine2, 0.1, '>', { scale: 0.05 })
        typeInLine(tl, greenCursor, addedLine2, 0.1, '>', { scale: 0.05 })

        // purple
        cursorBackspace(tl, purpleCursor, line4, 0.3, 0)
        typeInLine(tl, purpleCursor, line4, 0.1, '>')
        typeInLine(tl, purpleCursor, line4, 0.1, '>')
        tabInLine(tl, purpleCursor, line4, 0.1, '>')
        cursorBackspace(tl, purpleCursor, line4, 0.1, '>')
        cursorBackspace(tl, purpleCursor, line4, 0.1, '>')
        typeInLine(tl, purpleCursor, line4, 0.1, '>')
        typeInLine(tl, purpleCursor, line4, 0.1, '>')

        // cyan
        typeInLine(tl, cyanCursor, line6, 0.2, 0)
        typeInLine(tl, cyanCursor, line6, 0.2, '>')
        tabInLine(tl, cyanCursor, line6, 0.2, '>')
        cursorBackspace(tl, cyanCursor, line6, 0.2, '>')
        tabInLine(tl, cyanCursor, line6, 0.2, '>')

        return tl
    }

    function typingSecond2() {
        var tl = gsap.timeline()

        // yellow
        cursorBackspace(tl, yellowCursor, line5, 0.2, 0)
        cursorBackspace(tl, yellowCursor, line5, 0.1, '>')
        cursorBackspace(tl, yellowCursor, line5, 0.1, '>')
        typeInLine(tl, yellowCursor, line5, 0.3, '>')
        typeInLine(tl, yellowCursor, line5, 0.2, '>')
        typeInLine(tl, yellowCursor, line5, 0.1, '>')

        // green
        typeInLine(tl, greenCursor, addedLine2, 0.1, 0, { scale: 0.03 })
        typeInLine(tl, greenCursor, addedLine2, 0.2, '>', { scale: 0.03 })
        cursorBackspace(tl, greenCursor, addedLine2, 0.3, '>', { scale: 0.03 })
        typeInLine(tl, greenCursor, addedLine2, 0.1, '>', { scale: 0.03 })
        typeInLine(tl, greenCursor, addedLine2, 0.2, '>', { scale: 0.03 })
        typeInLine(tl, greenCursor, addedLine2, 0.1, '>', { scale: 0.03 })

        // purple
        moveCursor(
            tl,
            purpleCursor,
            { y: '-=5', x: '-=3', ease: 'power1.inOut', duration: 0.5 },
            0
        )
        cursorBackspace(tl, purpleCursor, line3, 0.2, '>', { scale: 0.05 })
        cursorBackspace(tl, purpleCursor, line3, 0.2, '>', { scale: 0.05 })
        cursorBackspace(tl, purpleCursor, line3, 0.1, '>', { scale: 0.05 })

        // cyan
        cursorBackspace(tl, cyanCursor, line6, 0.2, 0)
        cursorBackspace(tl, cyanCursor, line6, 0.2, '>')
        moveCursor(
            tl,
            cyanCursor,
            { y: '-=30', x: '-=30', ease: 'power1.inOut', duration: 0.5 },
            '>'
        )
        cursorBackspace(tl, cyanCursor, line1, 0.2, '>')
        cursorBackspace(tl, cyanCursor, line1, 0.2, '>')

        return tl
    }

    function typingSecond3() {
        var tl = gsap.timeline()

        // yellow
        moveCursor(
            tl,
            yellowCursor,
            { x: '-=21', ease: 'power1.inOut', duration: 0.5 },
            0
        )
        cursorBackspace(tl, yellowCursor, line5, 0.1, '>')
        cursorBackspace(tl, yellowCursor, line5, 0.1, '>')
        cursorBackspace(tl, yellowCursor, line5, 0.2, '>')
        cursorBackspace(tl, yellowCursor, line5, 0.1, '>')

        // green
        typeInLine(tl, greenCursor, addedLine2, 0.1, 0, { scale: 0.04 })
        tabInLine(tl, greenCursor, addedLine2, 0.2, '>', { scale: 0.04 })
        typeInLine(tl, greenCursor, addedLine2, 0.1, '>', { scale: 0.04 })
        tabInLine(tl, greenCursor, addedLine2, 0.2, '>', { scale: 0.04 })
        typeInLine(tl, greenCursor, addedLine2, 0.1, '>', { scale: 0.04 })
        tabInLine(tl, greenCursor, addedLine2, 0.1, '>', { scale: 0.04 })
        typeInLine(tl, greenCursor, addedLine2, 0.2, '>', { scale: 0.04 })

        // purple
        typeInLine(tl, purpleCursor, line3, 0.2, 0, { scale: 0.05 })
        tabInLine(tl, purpleCursor, line3, 0.2, '>', { scale: 0.05 })
        typeInLine(tl, purpleCursor, line3, 0.1, '>', { scale: 0.05 })
        moveCursor(
            tl,
            purpleCursor,
            { y: '+=5', x: '-=29.5', duration: 0.5 },
            '>'
        )
        moveElementsDown(
            tl,
            [line4, line5, line6, line7, line8, yellowCursor],
            '<'
        ) // 0.5 seconds

        // cyan
        typeInLine(tl, cyanCursor, line1, 0.2, 0)
        typeInLine(tl, cyanCursor, line1, 0.3, '>')
        typeInLine(tl, cyanCursor, line1, 0.1, '>')
        tabInLine(tl, cyanCursor, line1, 0.1, '>')
        typeInLine(tl, cyanCursor, line1, 0.3, '>')

        return tl
    }

    function typingSecond4() {
        var tl = gsap.timeline()

        // yellow
        typeInLine(tl, yellowCursor, line5, 0.1, 0, { scale: 0.08 })
        tabInLine(tl, yellowCursor, line5, 0.2, '>', { scale: 0.08 })
        moveCursor(
            tl,
            yellowCursor,
            { y: '-=29.5', x: '+=11', duration: 0.3, ease: 'power1.inOut' },
            '>'
        )
        cursorBackspace(tl, yellowCursor, addedLine2, 0.1, '>', {
            scale: '0.04'
        })
        cursorBackspace(tl, yellowCursor, addedLine2, 0.1, '>', {
            scale: '0.04'
        })
        cursorBackspace(tl, yellowCursor, addedLine2, 0.1, '>', {
            scale: '0.04'
        })
        typeInLine(tl, yellowCursor, addedLine2, 0.1, '>', { scale: '0.04' })

        // green
        moveCursor(tl, greenCursor, { y: '+=5', x: '-=37' }, 0)
        changeElement(tl, addedLine3, { opacity: 1, scaleX: 0, duration: 0 }, 0)
        moveElementsDown(
            tl,
            [
                line2,
                line3,
                line4,
                line5,
                line6,
                line7,
                line8,
                purpleCursor,
                yellowCursor
            ],
            0
        ) // 0.5 seconds
        typeInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.07 })
        tabInLine(tl, greenCursor, addedLine3, 0.2, '>', { scale: 0.07 })
        typeInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.07 })
        tabInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.07 })

        // purple
        changeElement(
            tl,
            addedLine5,
            { opacity: 1, scaleX: 0, y: '+=5', duration: 0 },
            0
        )
        moveCursor(tl, purpleCursor, { x: '-=5', ease: 'power1.inOut' }, 0)
        typeInLine(tl, purpleCursor, addedLine5, 0.1, '>')
        typeInLine(tl, purpleCursor, addedLine5, 0.1, '>')
        typeInLine(tl, purpleCursor, addedLine5, 0.1, '>')
        typeInLine(tl, purpleCursor, addedLine5, 0.1, '>')

        // cyan
        cursorBackspace(tl, cyanCursor, line1, 0.2, 0)
        cursorBackspace(tl, cyanCursor, line1, 0.3, '>')
        cursorBackspace(tl, cyanCursor, line1, 0.3, '>')
        tabInLine(tl, cyanCursor, line1, 0.1, '>')
        typeInLine(tl, cyanCursor, line1, 0.1, '>')

        return tl
    }

    function typingSecond5() {
        var tl = gsap.timeline()

        // yellow
        typeInLine(tl, yellowCursor, addedLine2, 0.2, 0, { scale: '0.04' })
        typeInLine(tl, yellowCursor, addedLine2, 0.1, '>', { scale: '0.04' })
        tabInLine(tl, yellowCursor, addedLine2, 0.1, '>', { scale: '0.04' })
        typeInLine(tl, yellowCursor, addedLine2, 0.1, '>', { scale: '0.04' })
        cursorBackspace(tl, yellowCursor, addedLine2, 0.2, '>', {
            scale: '0.04'
        })
        cursorBackspace(tl, yellowCursor, addedLine2, 0.1, '>', {
            scale: '0.04'
        })
        tabInLine(tl, yellowCursor, addedLine2, 0.2, '>', { scale: '0.04' })

        // green
        moveCursor(
            tl,
            greenCursor,
            { y: '+=10', x: '-=15.5', duration: 0.5, ease: 'power1.inOut' },
            0
        )
        changeElement(tl, line3, { opacity: 0, duration: 0.5 }, '>')
        moveElementsUp(
            tl,
            [
                line4,
                line5,
                line6,
                line7,
                line8,
                cyanCursor,
                purpleCursor,
                addedLine5
            ],
            '<'
        ) // 0.5 seconds

        // purple
        typeInLine(tl, purpleCursor, addedLine5, 0.2, 0)
        typeInLine(tl, purpleCursor, addedLine5, 0.1, '>')
        tabInLine(tl, purpleCursor, addedLine5, 0.3, '>')
        typeInLine(tl, purpleCursor, addedLine5, 0.2, '>')
        cursorBackspace(tl, purpleCursor, addedLine5, 0.2, '>')

        // cyan
        moveCursor(
            tl,
            cyanCursor,
            { y: '+=30', x: '-=2', ease: 'power1.inOut', duration: 0.5 },
            0
        )
        cursorBackspace(tl, cyanCursor, line4, 0.1, '>')
        cursorBackspace(tl, cyanCursor, line4, 0.1, '>')
        cursorBackspace(tl, cyanCursor, line4, 0.1, '>')
        cursorBackspace(tl, cyanCursor, line4, 0.1, '>')
        cursorBackspace(tl, cyanCursor, line4, 0.1, '>')

        return tl
    }

    function typingSecond6() {
        var tl = gsap.timeline()

        // yellow
        moveCursor(
            tl,
            yellowCursor,
            { y: '+=25.1', x: '-=11', duration: 0.5, ease: 'power1.inOut' },
            0
        )
        changeElement(
            tl,
            yellowCursor,
            { y: '+=5', x: '-=25.3', duration: 0.5 },
            '>'
        )
        moveElementsDown(tl, [line7], '<') // 0.5 seconds
        changeElement(
            tl,
            addedLine8,
            { opacity: 1, scaleX: 0, duration: 0 },
            '<'
        )

        // green
        moveCursor(
            tl,
            greenCursor,
            { y: '-=5', x: '+=17', duration: 0.5, ease: 'power1.inOut' },
            0
        )
        cursorBackspace(tl, greenCursor, line2, 0.1, '>', { scale: '0.04' })
        cursorBackspace(tl, greenCursor, line2, 0.1, '>', { scale: '0.04' })
        typeInLine(tl, greenCursor, line2, 0.2, '>', { scale: '0.04' })
        tabInLine(tl, greenCursor, line2, 0.1, '>', { scale: '0.04' })

        // purple
        tabInLine(tl, purpleCursor, addedLine5, 0.2, 0)
        typeInLine(tl, purpleCursor, addedLine5, 0.3, '>')
        typeInLine(tl, purpleCursor, addedLine5, 0.3, '>')
        typeInLine(tl, purpleCursor, addedLine5, 0.2, '>')

        // cyan
        moveCursor(
            tl,
            cyanCursor,
            { y: '-=25', x: '-=2', ease: 'power1.inOut', duration: 0.5 },
            0
        )
        cursorBackspace(tl, cyanCursor, line1, 0.1, '>')
        cursorBackspace(tl, cyanCursor, line1, 0.1, '>')
        cursorBackspace(tl, cyanCursor, line1, 0.1, '>')
        cursorBackspace(tl, cyanCursor, line1, 0.1, '>')
        cursorBackspace(tl, cyanCursor, line1, 0.1, '>')

        return tl
    }

    function typingSecond7() {
        var tl = gsap.timeline()

        // yellow
        typeInLine(tl, yellowCursor, line6, 0.1, 0)
        typeInLine(tl, yellowCursor, line6, 0.2, '>', { scale: 0.05 })
        typeInLine(tl, yellowCursor, line6, 0.4, '>', { scale: 0.05 })
        typeInLine(tl, yellowCursor, line6, 0.2, '>', { scale: 0.05 })
        typeInLine(tl, yellowCursor, line6, 0.1, '>', { scale: 0.05 })

        // green
        moveCursor(
            tl,
            greenCursor,
            { y: '-=5', x: '-=7', duration: 0.5, ease: 'power1.inOut' },
            0
        )
        typeInLine(tl, greenCursor, addedLine3, 0.2, '>', { scale: '0.08' })
        tabInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: '0.08' })
        typeInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: '0.08' })
        typeInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: '0.08' })

        // purple
        moveCursor(
            tl,
            purpleCursor,
            { y: '-=15', x: '-=7', duration: 0.5, ease: 'power1.inOut' },
            0
        )
        cursorBackspace(tl, purpleCursor, addedLine2, 0.2, '>')
        cursorBackspace(tl, purpleCursor, addedLine2, 0.1, '>')
        cursorBackspace(tl, purpleCursor, addedLine2, 0.2, '>')

        // cyan
        typeInLine(tl, cyanCursor, line1, 0.1, 0)
        typeInLine(tl, cyanCursor, line1, 0.3, '>')
        typeInLine(tl, cyanCursor, line1, 0.1, '>')
        tabInLine(tl, cyanCursor, line1, 0.3, '>')
        typeInLine(tl, cyanCursor, line1, 0.1, '>')

        return tl
    }

    function typingSecond8() {
        var tl = gsap.timeline()

        // yellow
        tabInLine(tl, yellowCursor, addedLine8, 0.1, 0, { scale: 0.04 })
        typeInLine(tl, yellowCursor, addedLine8, 0.2, '>', { scale: 0.04 })
        typeInLine(tl, yellowCursor, addedLine8, 0.3, '>', { scale: 0.04 })
        typeInLine(tl, yellowCursor, addedLine8, 0.1, '>', { scale: 0.04 })
        cursorBackspace(tl, yellowCursor, addedLine8, 0.1, '>', { scale: 0.04 })
        cursorBackspace(tl, yellowCursor, addedLine8, 0.1, '>', { scale: 0.04 })
        cursorBackspace(tl, yellowCursor, addedLine8, 0.1, '>', { scale: 0.04 })

        // green
        typeInLine(tl, greenCursor, addedLine3, 0.2, 0, { scale: 0.08 })
        typeInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.08 })
        cursorBackspace(tl, greenCursor, addedLine3, 0.4, '>', { scale: 0.08 })
        typeInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.08 })
        tabInLine(tl, yellowCursor, addedLine8, 0.2, '>', { scale: 0.04 })

        // purple
        cursorBackspace(tl, purpleCursor, addedLine2, 0.2, 0)
        typeInLine(tl, purpleCursor, addedLine2, 0.1, '>')
        typeInLine(tl, purpleCursor, addedLine2, 0.1, '>')
        typeInLine(tl, purpleCursor, addedLine2, 0.3, '>')
        cursorBackspace(tl, purpleCursor, addedLine2, 0.2, '>')
        typeInLine(tl, purpleCursor, addedLine2, 0.1, '>')

        // cyan
        moveCursor(
            tl,
            cyanCursor,
            { y: '+=25', x: '+=10', duration: 0.5, ease: 'power1.inOut' },
            0
        )
        typeInLine(tl, cyanCursor, line4, 0.3, '>')
        tabInLine(tl, cyanCursor, line4, 0.1, '>')
        typeInLine(tl, cyanCursor, line4, 0.1, '>')

        return tl
    }

    function typingSecond9() {
        var tl = gsap.timeline()

        // yellow
        moveCursor(
            tl,
            yellowCursor,
            { y: '-=20', x: '-=7', duration: 0.5, ease: 'power1.inOut' },
            0
        )
        cursorBackspace(tl, yellowCursor, line2, 0.1, '>', { scale: 0.04 })
        cursorBackspace(tl, yellowCursor, line2, 0.1, '>', { scale: 0.04 })
        cursorBackspace(tl, yellowCursor, line2, 0.1, '>', { scale: 0.04 })
        typeInLine(tl, yellowCursor, line2, 0.1, '>', { scale: 0.04 })
        typeInLine(tl, yellowCursor, line2, 0.1, '>', { scale: 0.04 })

        // green
        typeInLine(tl, greenCursor, addedLine3, 0.1, 0, { scale: 0.08 })
        typeInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.08 })
        typeInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.08 })
        typeInLine(tl, greenCursor, addedLine3, 0.2, '>', { scale: 0.08 })
        cursorBackspace(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.08 })
        cursorBackspace(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.08 })
        typeInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.08 })
        typeInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.08 })
        typeInLine(tl, greenCursor, addedLine3, 0.1, '>', { scale: 0.08 })

        // purple
        moveCursor(
            tl,
            purpleCursor,
            { x: '-=13', ease: 'power1.inOut' },
            0.5,
            0
        )
        cursorBackspace(tl, purpleCursor, addedLine2, 0.1, '>', { scale: 0.04 })
        cursorBackspace(tl, purpleCursor, addedLine2, 0.1, '>', { scale: 0.04 })
        cursorBackspace(tl, purpleCursor, addedLine2, 0.2, '>', { scale: 0.04 })

        // cyan
        typeInLine(tl, cyanCursor, line4, 0.1, 0)
        typeInLine(tl, cyanCursor, line4, 0.1, '>')
        typeInLine(tl, cyanCursor, line4, 0.3, '>')
        typeInLine(tl, cyanCursor, line4, 0.1, '>')
        typeInLine(tl, cyanCursor, line4, 0.2, '>')
        cursorBackspace(tl, cyanCursor, line4, 0.1, '>')
        cursorBackspace(tl, cyanCursor, line4, 0.1, '>')

        return tl
    }

    function animateOrbs() {
        var tl = gsap.timeline({ repeat: '-1' })
        tl.to(
            sublimeOrb,
            {
                motionPath: {
                    path: '.above-fold-animation .orbit',
                    align: '.above-fold-animation .orbit',
                    alignOrigin: [0.5, 0.5],
                    start: 0,
                    end: 1
                },
                duration: 60,
                ease: 'none'
            },
            0
        )
        tl.to(
            vimOrb,
            {
                motionPath: {
                    path: '.above-fold-animation .orbit',
                    align: '.above-fold-animation .orbit',
                    alignOrigin: [0.5, 0.5],
                    start: 0.25,
                    end: 1.25
                },
                duration: 60,
                ease: 'none'
            },
            0
        )
        tl.to(
            intellijOrb,
            {
                motionPath: {
                    path: '.above-fold-animation .orbit',
                    align: '.above-fold-animation .orbit',
                    alignOrigin: [0.5, 0.5],
                    start: 0.5,
                    end: 1.5
                },
                duration: 60,
                ease: 'none'
            },
            0
        )
        tl.to(
            vscodeOrb,
            {
                motionPath: {
                    path: '.above-fold-animation .orbit',
                    align: '.above-fold-animation .orbit',
                    alignOrigin: [0.5, 0.5],
                    start: 0.75,
                    end: 1.75
                },
                duration: 60,
                ease: 'none'
            },
            0
        )
        return tl
    }
    function changeElement(tl, el, attrs, phaseNumber) {
        tl.to(el, Object.assign({}, { duration: 0.5 }, attrs), phaseNumber)
    }
    function changeManyElements(tl, elements, attrs, phaseNumber) {
        tl.to(
            elements.join(', '),
            Object.assign({}, { duration: 0.5 }, attrs),
            phaseNumber
        )
    }
    function reduceLineByOneCharacter(tl, line, phaseNumber, opts) {
        let scale = opts && opts.scale ? opts.scale : 0.08
        tl.to(
            line,
            { scaleX: '-=' + scale, duration: 0, ease: 'none' },
            phaseNumber
        )
    }
    function increaseLineByOneCharacter(tl, line, phaseNumber, opts) {
        let scale = opts && opts.scale ? opts.scale : 0.08
        tl.to(
            line,
            { scaleX: '+=' + scale, duration: 0, ease: 'none' },
            phaseNumber
        )
    }
    function cursorBackspace(tl, cursor, line, delay, phaseNumber, opts) {
        changeElement(
            tl,
            cursor,
            { x: '-=2', delay, duration: 0, ease: 'none' },
            phaseNumber
        )
        reduceLineByOneCharacter(tl, line, '<', opts)
    }
    function typeInLine(tl, cursor, line, delay, phaseNumber, opts) {
        changeElement(
            tl,
            cursor,
            { x: '+=2', delay, duration: 0, ease: 'none' },
            phaseNumber
        )
        increaseLineByOneCharacter(tl, line, '<', opts)
    }
    function tabInLine(tl, cursor, line, delay, phaseNumber, opts) {
        opts = opts || {}
        opts.scale = opts.scale ? opts.scale * 3 : 0.08 * 3
        changeElement(
            tl,
            cursor,
            { x: '+=6', delay, duration: 0, ease: 'none' },
            phaseNumber
        )
        increaseLineByOneCharacter(tl, line, '<', opts)
    }
    function moveElementsDown(tl, elements, phaseNumber) {
        changeManyElements(tl, elements, { y: '+=5' }, phaseNumber)
    }
    function moveElementsUp(tl, elements, phaseNumber) {
        changeManyElements(tl, elements, { y: '-=5' }, phaseNumber)
    }

    function moveCursor(tl, cursor, attrs, phaseNumber) {
        if (cursor == yellowCursor) {
            tl.to(
                vimSatellite,
                {
                    motionPath: {
                        path: vimOrbit,
                        align: vimOrbit,
                        alignOrigin: [0.5, 0.5],
                        start: 1,
                        end: 0
                    },
                    duration: 0.5,
                    ease: 'power1.inOut'
                },
                phaseNumber
            )
        } else if (cursor == purpleCursor) {
            tl.to(
                vscodeSatellite,
                {
                    motionPath: {
                        path: vscodeOrbit,
                        align: vscodeOrbit,
                        alignOrigin: [0.4, 0.5],
                        start: 0.5,
                        end: 1.5
                    },
                    duration: 0.5,
                    ease: 'power1.inOut'
                },
                phaseNumber
            )
        } else if (cursor == cyanCursor) {
            tl.to(
                sublimeSatellite,
                {
                    motionPath: {
                        path: sublimeOrbit,
                        align: sublimeOrbit,
                        alignOrigin: [0.4, 0.5],
                        start: 1,
                        end: 0
                    },
                    duration: 0.5,
                    ease: 'power1.inOut'
                },
                phaseNumber
            )
        } else if (cursor == greenCursor) {
            tl.to(
                intellijSatellite,
                {
                    motionPath: {
                        path: intellijOrbit,
                        align: intellijOrbit,
                        alignOrigin: [0.4, 0.5],
                        start: 1,
                        end: 0
                    },
                    duration: 0.5,
                    ease: 'power1.inOut'
                },
                phaseNumber
            )
        }
        changeElement(tl, cursor, attrs, '<')
    }
}
