/*  Запрос на сервер и получение эскпортируемых данных
    между каждым id и временем проходит взаимосооответствие, поэтому эти данные можно грузить без обработки в charts 

*/
export function getDataFromServer() {
    // fetch("url", {
    //     body: JSON
    // })
    let dataFromDb = [
        {
            "id": "0",
            "employee_id": "0",
            "date": "2023-05-14",
            "clock_in": "08:54:32",
            "clock_out": "18:54:32",
            "absence": "01:29:44",
            "absence_reason": "",
            "total_time": "07:48:16"
        }, 
        {
            "id": "1",
            "employee_id": "12",
            "date": "2023-05-14",
            "clock_in": "08:54:32",
            "clock_out": "18:54:32",
            "absence": "02:29:44",
            "absence_reason": "",
            "total_time": "06:48:16"
        }, 
        {
            "id": "2",
            "employee_id": "14",
            "date": "2023-05-14",
            "clock_in": "06:54:32",
            "clock_out": "18:54:32",
            "absence": "01:29:44",
            "absence_reason": "",
            "total_time": "09:48:16"
        }, 
        {
            "id": "3",
            "employee_id": "18",
            "date": "2023-05-14",
            "clock_in": "08:54:32",
            "clock_out": "18:54:32",
            "absence": "01:29:44",
            "absence_reason": "",
            "total_time": "07:48:16"
        }, 
        {
            "id": "4",
            "employee_id": "13",
            "date": "2023-05-14",
            "clock_in": "08:54:32",
            "clock_out": "18:54:32",
            "absence": "01:29:44",
            "absence_reason": "",
            "total_time": "04:48:16"
        }, 
        {
            "id": "5",
            "employee_id": "3",
            "date": "2023-05-14",
            "clock_in": "08:54:32",
            "clock_out": "18:54:32",
            "absence": "01:29:44",
            "absence_reason": "",
            "total_time": "03:48:16"
        }, 
        {
            "id": "6",
            "employee_id": "5",
            "date": "2023-05-14",
            "clock_in": "08:54:32",
            "clock_out": "18:54:32",
            "absence": "01:29:44",
            "absence_reason": "",
            "total_time": "11:48:16"
        }, 
        {
            "id": "7",
            "employee_id": "6",
            "date": "2023-05-14",
            "clock_in": "08:54:32",
            "clock_out": "18:54:32",
            "absence": "01:29:44",
            "absence_reason": "",
            "total_time": "15:48:16"
        }, 
        //следующее число месяца
        {
            "id": "8",
            "employee_id": "0",
            "date": "2023-05-15",
            "clock_in": "08:54:32",
            "clock_out": "18:54:32",
            "absence": "01:29:44",
            "absence_reason": "",
            "total_time": "6:48:16"
        }, 
        {
            "id": "9",
            "employee_id": "1",
            "date": "2023-05-15",
            "clock_in": "08:54:32",
            "clock_out": "18:54:32",
            "absence": "01:29:44",
            "absence_reason": "",
            "total_time": "8:48:16"
        }, 
        {
            "id": "10",
            "employee_id": "2",
            "date": "2023-05-15",
            "clock_in": "08:54:32",
            "clock_out": "18:54:32",
            "absence": "01:29:44",
            "absence_reason": "",
            "total_time": "1:48:16"
        }, 
    ];

    return dataFromDb;
}

export function getTotalTimeArrayFromJson() {
    let totalTimeArray = [];
    let dirtyJsonArray = getDataFromServer();
    dirtyJsonArray.forEach((element) => {
        totalTimeArray.push(element.total_time);
    });

    console.log("totalTimeArray: " + totalTimeArray)
    return totalTimeArray;
}

export function getEmployeesIdArrayFromJson() {
    let employeesIdArray = [];
    let dirtyJsonArray = getDataFromServer();
    dirtyJsonArray.forEach((element) => {
        employeesIdArray.push(element.employee_id);
    });

    return employeesIdArray;
}

//depracated
export function shortTimeForHistogramTooltip() {
    console.log("getEmployeesIdArrayFromJson: " + getTotalTimeArrayFromJson())
    const employeesTime = getTotalTimeArrayFromJson().map(item => formatTime(item));

    return employeesTime;
}


//принимает на вход массив со временем, возвращает только часы(разделение по первому вхождению ":")
//(дополнить: при наведении на столбец - полное время, ордината - часы)
export function formatTime(full_time) {
    return full_time.substring(0, full_time.indexOf(":"));
}


export function stringToTime(value) {
    // const date = new Date(`1970-01-01 ${value}`);
    let time = value.split(':');
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
    // var nowDate = date.split('T')[1];
    // return date;
}
