const request=require('request')
const geocode=(address,callback)=>{
    // const url='https://api.mapbox.com/geocoding/v5/mapb.json?access_token=pk.eyJ1Ijoib21laXJ6dWxmZWtoYXIiLCJhIjoiY2tuNzdzcDVhMGxlZTJwcDl0cjd2Z2dtcCJ9.kGUcmmWs5z962_cIKP7r-A&limit=1'
    const geocodingURL="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoib21laXJ6dWxmZWtoYXIiLCJhIjoiY2tuNzdzcDVhMGxlZTJwcDl0cjd2Z2dtcCJ9.kGUcmmWs5z962_cIKP7r-A&limit=1"
    request({url:geocodingURL,json:true},(error,{body})=>{
         if(error){
             callback("unable to get the location",undefined)
         }
         else if(body.message){
             callback("error",undefined)
         }
         else if(body.features.length===0){
             callback("unable to find the location. Try another search",undefined)
    }
    else{
        callback(undefined,{
            latitude:body.features[0].center[1],
            longitude:body.features[0].center[0],
            location:body.features[0].place_name
        })
    }
})

            
   
   } 

   module.exports=geocode 