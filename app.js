
function workoutTimer() {
    //Initialize the sec, min and hour variable
    let sec = 0;
    let min = 0;
    let hour = 0;

    //Initialize for displaying of time in string
    let secDIsplay = null;
    let minDisplay = null;
    let hourDisplay = null;

    let interval = null;

    let start = 'stopped';

    function timer() {
        sec++;
        //when sec = 60, set sec back to zero instead of displaying 60 and increment min by 1
        if (sec / 60 === 1) {
            sec = 0;
            min++;

            if (min / 60 === 1) {
                min = 0;
                hour++;
            }
        }
        //if sec or min or hour is less than 10, add 0 before it
        if (sec < 10) {
            secDIsplay = '0' + sec;
        } else {
            secDIsplay = sec;
        }
        if (min < 10) {
            minDisplay = '0' + min;
        } else {
            minDisplay = min;
        }
        if (hour < 10) {
            hourDisplay = '0' + hour;
        } else {
            hourDisplay = hour;
        }
        document.getElementById('display').innerHTML = hourDisplay + ':' + minDisplay + ':' + secDIsplay;
    }



    function startTime() {
        if (start === 'stopped') {
            sec = 0;
            min = 0;
            hour = 0;
            document.getElementById('display').innerHTML = '00:00:00';
            document.getElementById('display').style.color = 'grey';
            interval = setInterval(timer, 1000);
            document.getElementById('start').innerHTML = 'Pause';
            start = 'started';
        } else if (start === 'resumed') {
            interval = setInterval(timer, 1000);
            document.getElementById('start').innerHTML = 'Pause';
            document.getElementById('display').style.color = 'grey';
            start = 'started';
        }
        else {
            clearInterval(interval);
            document.getElementById('start').innerHTML = 'Continue';
            document.getElementById('display').style.color = 'white';
            start = 'resumed';
        }
    }
    document.getElementById('start').addEventListener('click', startTime);

    function stop() {
        if (document.getElementById('display').innerText !== '00:00:00') {
            clearInterval(interval);
            document.getElementById('display').style.color = 'red';
            start = 'stopped';
            document.getElementById('start').innerHTML = 'Start';

        } else {
            alert('Workout timer is not running');
        }
    }
    document.getElementById('stop').addEventListener('click', stop);
}
workoutTimer();