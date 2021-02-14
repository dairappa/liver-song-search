type TimeFirst =  '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23'
type TimeRest =  '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '48' | '49' | '50' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59'

type TimeMinuteSecond = `${TimeFirst}:${TimeRest}`
type TimeHourMinuteSecond = `${TimeFirst}:${TimeRest}:${TimeRest}`

export type Time = TimeMinuteSecond | TimeHourMinuteSecond

const RegexMinuteSecond = /^(\d{1,2}):(\d{1,2})$/
const RegexHourMinuteSecond = /^(\d{1,2}):(\d{1,2}):(\d{1,2})$/

export const timeToNumber = (time: Time) => {
    if(RegexHourMinuteSecond.test(time)){
        const [, hour, minute, second] = RegexHourMinuteSecond.exec(time)
        return parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second)
    }else if(RegexMinuteSecond.test(time)){
        const [, minute, second] = RegexMinuteSecond.exec(time)
        return parseInt(minute) * 60 + parseInt(second)
    }
    throw Error
}
