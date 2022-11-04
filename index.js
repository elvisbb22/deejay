const addZero = (num) => num.toString().padStart(2, '0');

const today = new Date();
// console.log(today.getDate());
const day = addZero(today.getDate());
const todayStr = `${today.getFullYear()}/${today.getMonth() + 1}/${day}`;
const todayStrNoSlash = `${today.getFullYear()}${today.getMonth() + 1}${day}`;


// console.log('day', day, todayStr);
upateDiv(
    'oggi-djki',
    todayStr,
    todayStrNoSlash,
    'deejay_chiama_italia'
)

const progrs = [
    {file: 'deejay_chiama_italia', k: 'djki'},
    {file: 'il_volo_del_mattino', k: 'volo'},
    {file: 'summer_camp', k: 'summer'},
    {file: 'deejay_time', k: 'time'},
    {file: 'say_waaad', k: 'waad'},
    {file: 'catteland', k: 'ale'},
    {file: 'il_boss_del_weekend', k: 'boss'},
    {file: 'ciao_belli', k: 'belli'}
]

const days = [
    'oggi',
    '-1',
    '-2',
    '-3',
    '-4',
    '-5',
    '-6',
    '-7',
]

function getDate(number) {

    let d = today.getTime() - (number * 1000 * 60 * 60 * 24);
    // console.log(number, d, new Date(d).toISOString(), 'getDate');

    return new Date(d).toISOString().split('T')[0];

}
days.forEach(function (day, i) {

    const mapp = {
        'oggi': getDate(0),
        '-1': getDate(1),
        '-2': getDate(2),
        '-3': getDate(3),
        '-4': getDate(4),
        '-5': getDate(5),
        '-6': getDate(6),
        '-7': getDate(7),

    }

    const dayNumber = mapp[day];

    // console.log('dayNumber', dayNumber);
    const dayWe = (new Date(dayNumber)).getUTCDay();
    console.log(dayWe, 'dayWe', dayNumber);

    const month = today.getMonth() + 1;
    const todayStr = `${today.getFullYear()}/${addZero(month)}/${addZero(dayNumber)}`;
    const todayStrNoSlash = `${today.getFullYear()}${addZero(month)}${addZero(dayNumber)}`;
    progrs.forEach(function (item, i) {
        // console.log(item);



        upateDiv(
            `${day}-${item.k}`,
            dayNumber.replaceAll('-', '/'),
            dayNumber.replaceAll('-', ''),
            item.file,
            dayNumber.split('-')[2],
            dayWe === 6 || dayWe === 0
        )
    });

});


function upateDiv(id, date1, date2, progr, num, weekend) {

    let href = `https://media.deejay.it/${date1}/episodes/${progr}/${progr}-${date2}.mp3`

    console.log(progr);
    if (progr === 'deejay_time') {
        href = `https://media.m2o.it/${date1}/episodes/deejay-time/deejay-time_${date2}_140000.mp3`;
    }
    document.getElementById(id).href = href;
    document.getElementById(id).text = num;
    if (weekend) {
        document.getElementById(id).classList.add('has-text-danger');

    }
}
