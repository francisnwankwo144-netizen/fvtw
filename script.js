

// ============================================================
// COUNTDOWN
// August 3, 2026
// West Africa Time
// ============================================================


const target = new Date(

    "2026-08-03T00:00:00+01:00"

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

            "THE WAIT IS OVER.";


        document.querySelector(

            ".no-context"

        ).textContent =

            "RETURN TO THE SOURCE.";


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


    "YOU ARE BEING OBSERVED.",


    "DO YOU FEEL LIKE YOURSELF?",


    "CONFORMITY TEST // INCOMPLETE.",


    "THE WORLD IS WATCHING.",


    "RETURN // 03.08.26.",


    "WTF DOES FVTW MEAN?",


    "TRANSMISSION INCOMPLETE // TRY AGAIN LATER",


    "IDENTITY WITHHELD // ACCESS DENIED",


    "FILE CORRUPTED // UNTIL 3826",


    "BEFORE YOU HEAR IT, YOU'LL SEE IT.",


    "STAY WHERE IT'S SAFE, OK?"


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

