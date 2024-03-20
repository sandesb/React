import React, { useState, useEffect } from 'react';

const Faq = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setSecond(prevSecond => {
                    if (prevSecond === 59) {
                        setMinute(prevMinute => {
                            if (prevMinute === 59) {
                                setHour(prevHour => prevHour + 1);
                                return 0;
                            } else {
                                return prevMinute + 1;
                            }
                        });
                        return 0;
                    } else {
                        return prevSecond + 1;
                    }
                });
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    function start() {
        setIsRunning(true);
    }

    function pause() {
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setHour(0);
        setMinute(0);
        setSecond(0);
    }

    function returnData(input) {
        return input >= 10 ? input : `0${input}`;
    }

    return (
        <div>
            <h1>Timer</h1>
            {/* <img className="club" src="/club1.png" alt="club"></img> */}

            <div class="flex-wrap timer">
                <span id="hour">{returnData(hour)}</span>:<span id="minute">{returnData(minute)}</span>:
                <span id="second">{returnData(second)}</span>
            </div>

            <br />
            <div class="flex-wrap">
            <button type="button"  class="timer-button" onClick={start} disabled={isRunning} name="start">start</button>
            <button type="button"  class="timer-button" onClick={pause} disabled={!isRunning} name="pause">pause</button>
            <button type="button"  class="timer-button" onClick={reset} name="reset">reset</button>
            </div>
        </div>
    );
};

export default Faq;
