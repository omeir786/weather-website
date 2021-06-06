const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    
    const url='http://api.weatherstack.com/current?access_key=277c2bdac4824fcd24c20c421379e2ce&query='+latitude+','+longitude
     request({url,json:true},(error,{body})=>{
        if(error){
             callback("unable to connect to the weather service")
        }
         else if(body.error){
            callback("unable to find location")
                }
        
         else{
            
         callback(undefined,body.current.weather_descriptions[0]+". It is currently "+body.current.temperature +' it feels like '+body.current.feelslike)
         }
    })

}

module.exports=forecast
 
