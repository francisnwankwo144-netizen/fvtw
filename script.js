

// ============================================================
// COUNTDOWN
// August 3, 2026
// West Africa Time
// ============================================================


const target = new Date(

    "2026-08-21T00:00:00+01:00"

).getTime();



function updateCountdown() {


    const distance = Math.max(

        0,

        target - Date.now()

    );


    const days = Math.floor(

        distance / 86400000

    );


    const hours = Math.floor(

        (

            distance % 86400000

        ) / 3600000

    );


    const minutes = Math.floor(

        (

            distance % 3600000

        ) / 60000

    );


    const seconds = Math.floor(

        (

            distance % 60000

        ) / 1000

    );



    document.getElementById(

        "days"

    ).textContent =

        String(days).padStart(

            2,

            "0"

        );



    document.getElementById(

        "hours"

    ).textContent =

        String(hours).padStart(

            2,

            "0"

        );



    document.getElementById(

        "minutes"

    ).textContent =

        String(minutes).padStart(

            2,

            "0"

        );



    document.getElementById(

        "seconds"

    ).textContent =

        String(seconds).padStart(

            2,

            "0"

        );



    if (

        distance === 0

    ) {


        document.querySelector(

            ".message"

        ).textContent =

            "OUT NOW!";


        document.querySelector(

            ".no-context"

        ).textContent =

            "FIRST CHAPTER HAS BEGUN.";


    }


}



updateCountdown();


setInterval(

    updateCountdown,

    1000

);



// ============================================================
// CHECK SIGNAL
// ============================================================


const signalMessages = [


    "FRANCIS VS. THE WORLD",


    "THE ALBUM ARRIVES JANUARY 22.",


    "THE TITLE TRACK ARRIVES AUGUST 21.",


    "THE STORY HAS BEGUN.",


    "RETURN // 21.08.26.",


    "OH I KNOW WHAT FVTW MEANS",


    "THANK YOU FOR STAYING",
    

    "DON'T LET THE WORLD TELL YOU WHO TO BE."


];


let signalIndex = 0;



document

    .getElementById(

        "signalButton"

    )

    .addEventListener(

        "click",

        () => {


            document

                .getElementById(

                    "signal"

                )

                .textContent =

                    signalMessages[

                        signalIndex %

                        signalMessages.length

                    ];


            signalIndex++;


        }

    );



// ============================================================
// SECRET SCREEN
// ============================================================


const secret = document.getElementById(

    "secret"

);



document

    .getElementById(

        "hiddenTrigger"

    )

    .addEventListener(

        "click",

        () => {


            secret.classList.add(

                "open"

            );


        }

    );



document

    .getElementById(

        "closeSecret"

    )

    .addEventListener(

        "click",

        () => {


            secret.classList.remove(

                "open"

            );


        }

    );

// =========================
// SIGNAL GLITCH
// =========================

const logo = document.getElementById("logo");

function triggerGlitch() {

    logo.classList.add("glitch");

    setTimeout(() => {
        logo.classList.remove("glitch");
    }, 180);

}

function randomGlitch() {

    triggerGlitch();

    const next = Math.random() * 7000 + 8000;

    setTimeout(randomGlitch, next);

}

setTimeout(randomGlitch, 3000);