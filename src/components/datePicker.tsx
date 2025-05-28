import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from "react";
import { View } from "react-native";


export const DatePicker = ({value,startDate, endDate}: {value: any, startDate: any, endDate: any}) => {
     //state to update the display of datetime (calendar or clock)
     const [date, setDate] = useState(new Date());



    

       //function to update the dateTime
    const onchange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setDate(currentDate)

        if(currentDate){
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const dayOfWeek = daysOfWeek[currentDate.getDay()];
            const dayOfMonth = currentDate.getDate();
            const monthOfYear = monthsOfYear[currentDate.getMonth()];
            const year = currentDate.getFullYear();
        
            let suffix = 'th';
            if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
                suffix = 'st';
            } else if (dayOfMonth === 2 || dayOfMonth === 22) {
                suffix = 'nd';
            } else if (dayOfMonth === 3 || dayOfMonth === 23) {
                suffix = 'rd';
            }
            
            const formattedDate = `${dayOfWeek}, ${dayOfMonth}${suffix} ${monthOfYear}, ${year}`;
            
            if(value === 'startDate'){
                startDate(formattedDate)
            }else{
                endDate(formattedDate)
            }
        }

    };

    

    return(
        <View style={{flex: 1}}>
            <DateTimePicker testID="dateTimePicker" value={date} mode={"date"} 
             display={"calendar"} onChange={onchange} />
        </View>
    )
}