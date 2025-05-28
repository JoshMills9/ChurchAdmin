import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from "react";
import { View } from "react-native";


export const DatePicker = ({value,startDate, endDate}: {value: any, startDate: any, endDate: any}) => {
     //state to update the display of datetime (calendar or clock)
     const [display, setDisplay] = useState("")
     const [date, setDate] = useState(new Date());



     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
     const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     const dayOfWeek = daysOfWeek[date.getDay()];
     const dayOfMonth = date.getDate();
     const monthOfYear = monthsOfYear[date.getMonth()];
     const year = date.getFullYear();
 
     let suffix = 'th';
     if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
         suffix = 'st';
     } else if (dayOfMonth === 2 || dayOfMonth === 22) {
         suffix = 'nd';
     } else if (dayOfMonth === 3 || dayOfMonth === 23) {
         suffix = 'rd';
     }


       //function to update the dateTime
    const onchange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };
 
     //const formattedDate = `${dayOfWeek}, ${dayOfMonth}${suffix} ${monthOfYear}, ${year}`;
    
    useEffect(() => {
        const pickDate = (value: any)=>{
            if(value === 'startDate'){
                const formattedDate = `${dayOfWeek}, ${dayOfMonth}${suffix} ${monthOfYear}, ${year}`;
                startDate(formattedDate)
            }else{
                const formattedDate = `${dayOfWeek}, ${dayOfMonth}${suffix} ${monthOfYear}, ${year}`;
                endDate(formattedDate)
            }
        }
        pickDate(value)

    }, [value])
   
    

    return(
        <View style={{flex: 1}}>
            <DateTimePicker testID="dateTimePicker" value={date} mode={"date"} 
             display={"calendar"} onChange={onchange} />
        </View>
    )
}