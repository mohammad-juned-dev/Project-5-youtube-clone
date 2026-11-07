export const API_KEY = "AIzaSyAat-4u1DUqFJzdfRPAYLFFYZ3cuHjE7ww"

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }else if(value<1000){
        return value
    }
}