    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    //get random number between min and max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //var timerMainLogic = getRandomInt(120000, 320000);
    //var timerMainLogic = getRandomInt(2000, 4000);
    async function mainLogic() {
        while (true) {
            //alert('do whatever');
            await sleep(getRandomInt(2000, 4000));
            
            var els = document.getElementsByClassName('btn btn-secondary itemmap houseinteract');

            Array.prototype.forEach.call(els, async function(el) {
                // Do stuff here
                if (el.getAttribute('aria-label').includes('Building') && !el.getAttribute('class').includes('opacity')) {
                    console.log('Lo tengo comprado');
                    elementId = el.getAttribute('id');
                    await sleep(getRandomInt(2000, 4000));
                    document.getElementById(elementId).click();
                    await sleep(getRandomInt(2000, 4000));
                    percent = parseFloat(document.getElementsByClassName('featured_modal')[0].getElementsByClassName('progress-bar bg-info')[0].getAttribute('aria-valuenow'));
                    if (percent > 30) {
                        //document.getElementsByClassName('featured_modal')[0].getElementsByClassName('btn btn-primary')[0].click();
                        console.log('aca recojo las monedas');
                    }else{
                        console.log('aca no recojo');
                    }
                    await sleep(getRandomInt(2000, 4000));
                    document.getElementsByClassName('awesome scrap closehousepanel')[0].click();
                }
            });


            await sleep(getRandomInt(3000, 6000));
         
            var timerMainLogic = getRandomInt(300000, 1080000);
            timerMainLogicNum = timerMainLogic / 1000 / 60;
            console.log(
                dateNow()+" Waiting " + timerMainLogicNum.toFixed(2) + " minutes for next check"
            );
            await sleep(timerMainLogic);
        }
    }
    
    function dateNow() {
        var date = new Date();
        var date = toJSONLocal(date);
        return date;
    }

    function toJSONLocal(date) {
        var local = new Date(date);
        local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        return local.toJSON().slice(0, 19);
    }

    var simulateMouseEvent = function (element, eventName, coordX, coordY) {
        element.dispatchEvent(
            new MouseEvent(eventName, {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: coordX,
                clientY: coordY,
                button: 0,
            })
        );
    };

    mainLogic();
