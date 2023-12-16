var students ={
    "tom":{
        "math":99,
        "science":98
    }
}
 
function result(){
    var id = document.getElementById("main");
    var name = document.getElementById("name").value;
    var ip =students[name];
    if(ip==undefined){
        id.innerHTML="No result found ";
    }
    else{
        
        id.innerHTML= "Math Marks: "+ip.math +" Science Marks :"+ip.science;
        
    }
    
}