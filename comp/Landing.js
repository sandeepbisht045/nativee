import React from 'react'
import { View,Text,FlatList,TouchableOpacity } from 'react-native'
// import { Accordion } from '@ant-design/react-native';
import Setting from "../assets/settings.svg"
import Menu from "../assets/menu.svg"
import Search from "../assets/search.svg"
import Broken from "../assets/broken.svg"


// import Shield from "../assets/shield.svg"
// import Prewhite from "../assets/prewhite.svg"
// import Record from "../assets/record.svg"
// import Bell from "../assets/bell.svg"
// import Gallery from "../assets/gallery.svg"

 export const Landing=()=>{
const rooms=[
    {room:"Room1"},{room:"Room2"},{room:"Room3"},{room:"Room4"}
]
return(
<>

   <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 20
          
        }}>
           <TouchableOpacity style={{marginHorizontal:8,justifyContent:"center"}}>
              <Menu/>
           </TouchableOpacity>

      <View style={{flexDirection:"row",marginHorizontal:8}}>
         <TouchableOpacity style={{marginHorizontal:10}}>
            <Search/>
         </TouchableOpacity>

         <TouchableOpacity>
            <Broken/>
         </TouchableOpacity>

      </View>
      

   </View>

   <View>
   <View style={{paddingHorizontal:9,marginHorizontal:40}}>
      <Text style={{fontFamily:"Poppins-Medium",color:"#8a8a8a",fontSize:19}}>
         Hey Iclear test user
      </Text>
      <Text style={{fontFamily:"Poppins-Medium",color:"#000",fontSize:27}}>
         Welcome To AI World
      </Text>
      </View>
   </View>
   {/* starting rendering items */}
   <FlatList style={{ borderWidth: 3,
              elevation: 4,
              marginHorizontal: 55,
              marginVertical:15,
              backgroundColor: "white",
              borderRadius: 15,
              borderColor: "white",
              marginBottom: 30,
              height: 80}} data={rooms} 
renderItem={({item})=>

<Text style={{marginTop:200}}>{item.room}</Text>}
/>





</>)}
