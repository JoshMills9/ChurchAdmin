import ImagePickerComponent from '@/src/components/ImagePicker';
import SuccessAlert from '@/src/components/successAlert';
import { COLORS } from '@/src/constants/colors';
import { registerStyles } from '@/src/styles/register/register';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const Register = () => {
  const navigation = useNavigation();
  const memberData = useLocalSearchParams()
 

  const dimensions = useWindowDimensions();
  const styles = registerStyles(dimensions)
  const [showPicker, setShowPicker] = useState<boolean>(false)


  const [photo, setPhoto] = useState<any>(memberData?.img)
  const [FirstName, setFirstName] = useState<any>(memberData.FirstName)
  const [LastName, setLastName] = useState<any>(memberData.LastName)
  const [DateOfBirth, setDateOfBirth] = useState<any>(memberData.DateOfBirth)
  const [RegDate, setRegDate] = useState<any>(memberData.RegDate)
  const [Contact1, setContact1] = useState<any>(memberData.Contact1)
  const [Contact2, setContact2] = useState<any>(memberData.Contact2)
  const [Email, setEmail] = useState<any>(memberData.Email)
  const [Residential, setResidential] = useState<any>(memberData.Residential)
  const [MaritalStatus, setMaritalStatus] = useState<any>(memberData.MaritalStatus)
  const [NumberOfChildren, setNumberOfChildren] = useState<any>(memberData.NumberOfChildren)
  const [Department, setDepartment] = useState<any>(memberData.Department)
  const [Occupation, setOccupation] = useState<any>(memberData.Occupation)
  const [isVisiting, setIsVisiting] = useState<any>(memberData.isVisiting)
  const [isBaptised, setIsBaptised] = useState<any>(memberData.isBaptised)
  const [isRegister, setIsRegister] = useState<boolean>(false)



  const getProfile = async () => {
    try {
        const value = await AsyncStorage.getItem('Photo');
        if (value) {
          const p = JSON.parse(value)
          setPhoto(p)
        }
      } catch (error) {
        console.error('Error checking post', error);
    }
}

useEffect(() => {
  getProfile()
}, [showPicker])


/*useLayoutEffect(() => {
  navigation.setOptions({
    title: 'Update',
    headerRight: () => (<Ionicons name='pencil-outline' size={25} style={{ height: 50,paddingHorizontal: 5,paddingVertical: 10, width: 40}}  color={'white'}/>),
  });
}, [navigation]);
*/



  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>

        <View style={styles.nameView}>
          <View style={{width: '48%',gap: 8}}>
            <Text style={styles.text}>First name</Text>
            <>
              <Feather name='user' color={FirstName ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT} size={20} style={{position: 'absolute' , top: 45,left: 8}}/>
              <TextInput placeholder='Enter name' value={FirstName} onChangeText={(txt) => setFirstName(txt)} placeholderTextColor={COLORS.SECONDARYTEXT} style={{ width: '100%',borderColor: 'dimgray', borderRadius: 10, borderWidth: 1, paddingVertical: 8 , paddingLeft: 35, paddingRight: 5 , height: 45, color: 'white', fontSize: 16}}/>
            </>
          </View>
          <View style={{width: '48%',gap: 8}}>
            <Text style={styles.text}>Last name</Text>
            <>
              <Feather name='user' color={LastName ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT} size={20} style={{position: 'absolute' , top: 45,left: 8}}/>
              <TextInput placeholder='Last name' value={LastName} onChangeText={(txt) => setLastName(txt)} placeholderTextColor={COLORS.SECONDARYTEXT} style={{ width: '100%',borderColor: 'dimgray', borderRadius: 10, borderWidth: 1, paddingVertical: 8 , paddingLeft: 35, paddingRight: 5 , height: 45, color: 'white', fontSize: 16}}/>
            </>
          </View>
        </View>

        <View style={styles.nameView}>
          <View style={{width: '48%',gap: 8}}>
            <Text style={styles.text}>Date of Birth</Text>
            <>
              <Feather name='calendar' color={DateOfBirth ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT} size={20} style={{position: 'absolute' , top: 45,left: 8}}/>
              <TextInput placeholder='Date of birth' value={DateOfBirth} onChangeText={(txt) => setDateOfBirth(txt)} placeholderTextColor={COLORS.SECONDARYTEXT} style={{ width: '100%',borderColor: 'dimgray', borderRadius: 10, borderWidth: 1, paddingVertical: 8 , paddingLeft: 35, paddingRight: 5 , height: 45, color: 'white', fontSize: 16}}/>
            </>
          </View>
          <View style={{width: '48%',gap: 8}}>
            <Text style={styles.text}>Registration Date</Text>
            <>
              <Feather name='calendar' color={RegDate ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT} size={20} style={{position: 'absolute' , top: 45,left: 8}}/>
              <TextInput placeholder='Registration Date' value={RegDate} onChangeText={(txt) => setRegDate(txt)} placeholderTextColor={COLORS.SECONDARYTEXT} style={{ width: '100%',borderColor: 'dimgray', borderRadius: 10, borderWidth: 1, paddingVertical: 8 , paddingLeft: 35, paddingRight: 5 , height: 45, color: 'white', fontSize: 16}}/>
            </>
          </View>
        </View>

        <View style={styles.nameView}>
          <View style={{width: '48%',gap: 8}}>
            <Text style={styles.text}>Phone Number</Text>
            <>
              <Feather name='phone' color={Contact1 ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT} size={20} style={{position: 'absolute' , top: 45,left: 8}}/>
              <TextInput keyboardType='number-pad' value={Contact1} onChangeText={(txt) => setContact1(txt)} placeholder='Contact 1' placeholderTextColor={COLORS.SECONDARYTEXT} style={{ width: '100%',borderColor: 'dimgray', borderRadius: 10, borderWidth: 1, paddingVertical: 8 , paddingLeft: 35, paddingRight: 5 , height: 45, color: 'white', fontSize: 16}}/>
            </>
          </View>
          <View style={{width: '48%',gap: 8}}>
            <Text style={styles.text}></Text>
            <>
              <Feather name='phone' color={Contact2 ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT} size={20} style={{position: 'absolute' , top: 45,left: 8}}/>
              <TextInput keyboardType='number-pad' value={Contact2} onChangeText={(txt) => setContact2(txt)} placeholder='Contact 2' placeholderTextColor={COLORS.SECONDARYTEXT} style={{ width: '100%',borderColor: 'dimgray', borderRadius: 10, borderWidth: 1, paddingVertical: 8 , paddingLeft: 35, paddingRight: 5 , height: 45, color: 'white', fontSize: 16}}/>
            </>
          </View>
        </View>

        <View style={styles.nameView}>
          <View style={{width: '100%',gap: 8}}>
            <Text style={styles.text}>Email</Text>
            <>
              <Feather name='mail' color={Email ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT} size={20} style={{position: 'absolute' , top: 45,left: 8}}/>
              <TextInput keyboardType='email-address' value={Email} onChangeText={(txt) => setEmail(txt)} placeholder='Email address' placeholderTextColor={COLORS.SECONDARYTEXT} style={{ width: '100%',borderColor: 'dimgray', borderRadius: 10, borderWidth: 1, paddingVertical: 8 , paddingLeft: 35, paddingRight: 5 , height: 45, color: 'white', fontSize: 16}}/>
            </>
          </View>
        </View>

        <View style={styles.nameView}>
          <View style={{width: '100%',gap: 8}}>
            <Text style={styles.text}>Residential</Text>
            <>
              <Ionicons name='location-outline' color={Residential ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT} size={22} style={{position: 'absolute' , top: 42,left: 8}}/>
              <TextInput  placeholder='Residential address' value={Residential} onChangeText={(txt) => setResidential(txt)} placeholderTextColor={COLORS.SECONDARYTEXT} style={{ width: '100%',borderColor: 'dimgray', borderRadius: 10, borderWidth: 1, paddingVertical: 8 , paddingLeft: 35, paddingRight: 5 , height: 45, color: 'white', fontSize: 16}}/>
            </>
          </View>
        </View>

        <View style={styles.nameView}>
          <View style={{width: '48%',gap: 8}}>
            <Text style={styles.text}>Marital Status</Text>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
              <Pressable onPress={() => {setMaritalStatus('Single')}}  style={{width: '48%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor:(MaritalStatus === 'Single') ? COLORS.CREATEBUTTON : 'dimgray' ,}}>
                <>
                  <Feather  color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: MaritalStatus === 'Single' ? '#fff' : COLORS.SECONDARYTEXT, fontWeight: MaritalStatus === 'Single' ? '600' : '400'}}>Single</Text>
                </>
              </Pressable>
              <Pressable onPress={() => {setMaritalStatus('Married')}}  style={{width: '48%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor: (MaritalStatus === 'Married') ? COLORS.CREATEBUTTON :'dimgray'}}>
                <>
                  <Feather  color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: MaritalStatus === 'Married' ? '#fff' : COLORS.SECONDARYTEXT, fontWeight: MaritalStatus === 'Married' ? '600' : '400'}}>Married</Text>
                </>
              </Pressable>
            </View>
          </View>
          <View style={{width: '50%',gap: 8}}>
            <Text style={styles.text}></Text>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
              <Pressable onPress={() => {setMaritalStatus('Divorced')}}  style={{width: '48%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor: (MaritalStatus === 'Divorced') ? COLORS.CREATEBUTTON : 'dimgray', }}>
                <>
                  <Feather  color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: MaritalStatus === 'Divorced' ? '#fff' : COLORS.SECONDARYTEXT, fontWeight: MaritalStatus === 'Divorced' ? '600' : '400'}}>Divorced</Text>
                </>
              </Pressable>
              <Pressable onPress={() => {setMaritalStatus('Widowed')}}  style={{width: '48%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor: (MaritalStatus === 'Widowed') ? COLORS.CREATEBUTTON : 'dimgray', }}>
                <>
                  <Feather color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: MaritalStatus === 'Widowed' ? '#fff' : COLORS.SECONDARYTEXT, fontWeight: MaritalStatus === 'Widowed' ? '600' : '400'}}>Widowed</Text>
                </>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={[styles.nameView, {justifyContent: 'flex-start', gap: 15, alignItems: 'center'}]}>
          <Text style={styles.text}>No. of Children:</Text>
              <>
                <Feather name='users' color={NumberOfChildren ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT} size={18} style={{position: 'absolute' , top: 31, left: 148}}/>
                <TextInput maxLength={2} keyboardType='number-pad' value={NumberOfChildren} onChangeText={(txt) => setNumberOfChildren(txt)} placeholder='0' placeholderTextColor={COLORS.SECONDARYTEXT} style={{ width: '20%',borderColor: 'dimgray', borderRadius: 10, borderWidth: 1, paddingVertical: 8 , paddingLeft: 40, paddingRight: 5 , height: 40, color: 'white', fontSize: 16}}/>
              </>
        </View>

        <View style={styles.nameView}>
          <View style={{width: '48%',gap: 8}}>
            <Text style={styles.text}>Department</Text>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
              <Pressable onPress={() => {setDepartment('Youth')}} style={{width: '48%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor: (Department === 'Youth') ? COLORS.CREATEBUTTON : 'dimgray',}}>
                <>
                  <Feather  color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: Department === 'Youth' ? '#fff' : COLORS.SECONDARYTEXT, fontWeight: Department === 'Youth' ? '600' : '400'}}>Youth</Text>
                </>
              </Pressable>
              <Pressable onPress={() => {setDepartment('Men')}}  style={{width: '48%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor: (Department === 'Men') ? COLORS.CREATEBUTTON : 'dimgray', }}>
                <>
                  <Feather  color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: Department === 'Men' ? '#fff' : COLORS.SECONDARYTEXT, fontWeight: Department === 'Men' ? '600' : '400'}}>Men</Text>
                </>
              </Pressable>
            </View>
          </View>
          <View style={{width: '50%',gap: 8}}>
            <Text style={styles.text}></Text>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
              <Pressable onPress={() => {setDepartment('Women')}}  style={{width: '48%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor:  (Department === 'Women') ? COLORS.CREATEBUTTON : 'dimgray', }}>
                <>
                  <Feather  color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: Department === 'Women' ? '#fff' : COLORS.SECONDARYTEXT, fontWeight: Department === 'Women' ? '600' : '400'}}>Women</Text>
                </>
              </Pressable>
              <Pressable onPress={() => {setDepartment('Children')}}  style={{width: '48%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor:  (Department === 'Children') ? COLORS.CREATEBUTTON : 'dimgray', }}>
                <>
                  <Feather  color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: Department === 'Children' ? '#fff' : COLORS.SECONDARYTEXT, fontWeight: Department === 'Children' ? '600' : '400'}}>Children</Text>
                </>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.nameView}>
          <View style={{width: '100%',gap: 8}}>
            <Text style={styles.text}>Occupation</Text>
            <>
              <Ionicons name='briefcase-outline' color={Occupation ? COLORS.CREATEBUTTON : COLORS.SECONDARYTEXT} size={22} style={{position: 'absolute' , top: 42,left: 8}}/>
              <TextInput  placeholder='Occupation' value={Occupation} onChangeText={(txt) => setOccupation(txt)} placeholderTextColor={COLORS.SECONDARYTEXT} style={{ width: '100%',borderColor: 'dimgray', borderRadius: 10, borderWidth: 1, paddingVertical: 8 , paddingLeft: 35, paddingRight: 5 , height: 45, color: 'white', fontSize: 16}}/>
            </>
          </View>
        </View>

        <View style={styles.nameView}>
          <View style={{width: '48%',gap: 8, alignItems: 'center'}}>
            <Text style={styles.text}>Are You a Visitor?</Text>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
              <Pressable onPress={() => {setIsVisiting('Yes')}}  style={{width: '45%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor: (isVisiting === 'Yes') ? COLORS.CREATEBUTTON :  'dimgray',}}>
                <>
                  <Feather  color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: isVisiting === 'Yes' ? '#fff' : COLORS.SECONDARYTEXT, fontWeight: isVisiting === 'Yes' ? '600' : '400'}}>Yes</Text>
                </>
              </Pressable>
              <Pressable onPress={() => {setIsVisiting('No')}}  style={{width: '45%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor: (isVisiting === 'No') ? COLORS.CREATEBUTTON :  'dimgray',}}>
                <>
                  <Feather  color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: isVisiting === 'No' ? '#fff' : COLORS.SECONDARYTEXT,  fontWeight: isVisiting === 'No' ? '600' : '400'}}>No</Text>
                </>
              </Pressable>
            </View>
          </View>
          <View style={{width: '48%',gap: 8, alignItems:'center'}}>
            <Text style={styles.text}>Are You Baptised?</Text>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
              <Pressable onPress={() => {setIsBaptised('Yes')}}  style={{width: '45%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor: (isBaptised === 'Yes') ? COLORS.CREATEBUTTON :  'dimgray',}}>
                <>
                  <Feather  color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: isBaptised === 'Yes' ? '#fff' : COLORS.SECONDARYTEXT,  fontWeight: isBaptised === 'Yes' ? '600' : '400'}}>Yes</Text>
                </>
              </Pressable>
              <Pressable onPress={() => {setIsBaptised('No')}}  style={{width: '45%', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', height: 40,borderBottomWidth: 1, borderColor: (isBaptised === 'No') ? COLORS.CREATEBUTTON : 'dimgray',}}>
                <>
                  <Feather color={COLORS.SECONDARYTEXT} size={18} />
                  <Text style={{color: isBaptised === 'No' ? '#fff' : COLORS.SECONDARYTEXT,  fontWeight: isBaptised === 'No' ? '600' : '400'}}>No</Text>
                </>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={[styles.nameView, {justifyContent:'center',marginTop: 20 ,height: 100}]}>
          <Pressable onPress={() => setShowPicker(true)} style={styles.imgView}>
              {photo ?
                        <Image source={{uri: photo}}   style={{width: dimensions.width >= 400 ? 110 : 110, height: dimensions.height >= 700 ? 110 : 110, borderRadius: 55}} />
                        :
                        <View style={{ width: dimensions.width >= 400 ? 110 : 110, height: dimensions.height >= 700 ? 110 :110, }}>
                            <Ionicons name="person-circle-sharp" size={110}  color={COLORS.SECONDARYTEXT} />
                        </View>
                    }
                  
                    <View style={{position:'absolute',elevation:5, bottom:0, right: 10,borderWidth:0.5, borderColor:"dimgray", backgroundColor:"lightgray",width:23,justifyContent:"center",alignItems:"center", height:23, borderRadius:50}}>
                      <Ionicons name="camera-outline" size={16} />
                    </View>
            </Pressable>
        </View>

        <View style={[styles.nameView,{justifyContent: 'center', alignItems:'flex-end',}]}>
           <TouchableOpacity onPress={() => setIsRegister(!isRegister)} style={{height: 45, width: '80%', backgroundColor: COLORS.CREATEBUTTON, borderRadius: 15, justifyContent:'center', alignItems:'center'}}>
           {isRegister ? 
              <Feather name='loader' size={25}/>
              :
              <Text style={{fontSize: 16, fontWeight: '600' }}>Register</Text>
           }
          </TouchableOpacity>
        </View>
        
      </ScrollView>

      {showPicker && <ImagePickerComponent Close={(value: any) => setShowPicker(value)}  videoOut={{}} remove={() => setPhoto('')} imageOut={(value:any) => setPhoto(value)}  profile={'Choose photo'} isVideo={false} />}
      
      {isRegister && <SuccessAlert success={true} showAlert={(value: any) => setIsRegister(value)} />}  
      
    
    </View>
  )
}

export default Register