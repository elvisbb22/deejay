const addZero = (num) => num < 10 ? '0' + num : num;

const today = new Date();
console.log(today.getDate());
const day = addZero(today.getDate());
const todayStr = `${today.getFullYear()}/${today.getMonth() + 1}/${day}`;
const todayStrNoSlash = `${today.getFullYear()}${today.getMonth() + 1}${day}`;


console.log('day', day);
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

days.forEach(function (day, i) {

    const mapp = {
        'oggi': today.getDate(),
        '-1': today.getDate() - 1,
        '-2': today.getDate() - 2,
        '-3': today.getDate() - 3,
        '-4': today.getDate() - 4,
        '-5': today.getDate() - 5,
        '-6': today.getDate() - 6,
        '-7': today.getDate() - 7,

    }

    const dayNumber = mapp[day];

    console.log('dayNumber', dayNumber);

    const month = today.getMonth() + 1;
    const todayStr = `${today.getFullYear()}/${addZero(month)}/${addZero(dayNumber)}`;
    const todayStrNoSlash = `${today.getFullYear()}${addZero(month)}${addZero(dayNumber)}`;
    progrs.forEach(function (item, i) {
        console.log(item);


        const dayWe = (new Date(todayStr)).getUTCDay();

        upateDiv(
            `${day}-${item.k}`,
            todayStr,
            todayStrNoSlash,
            item.file,
            dayNumber,
            dayWe === 6 || dayWe === 5
        )
    });

});


function upateDiv(id, date1, date2, progr, num, weekend) {

    const href = `https://media.deejay.it/${date1}/episodes/${progr}/${progr}-${date2}.mp3`
    document.getElementById(id).href = href;
    document.getElementById(id).text = num;
    if (weekend) {
        document.getElementById(id).classList.add('has-text-danger');

    }
}
