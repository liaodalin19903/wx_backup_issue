/**
 * Created by ldl on 2018/3/13.
 */
const api={

}

api.removeRepeat=(data)=>{
  var res = [data[0]];
  var list=[];
  var  news=[]
  for(var i = 1 ; i< data.length; i++){
    var repeat = false;
    var newdata={}
    for(var j=0; j<res.length; j++){
      if(data[i].name == res[j].name){
        //console.log(data[i].name)
        //list.push(data[i])
        repeat = true;
      }
    }
    if(!repeat){
//      	newdata.id=data[i].id
//      	newdata.name=data[i].name,
//      	newdata.data=list;
//      	news.push(newdata);
      //console.log(list)
      //list=[];
      res.push(data[i]);
    }else{


    }
  }
  //console.log(news,res)
  return res;
}
//var result = tem.removeRepeat();
api.upRepeat=(data)=>{
  var result = api.removeRepeat(data);
  var newdata=[]
  for(var j=0;j<result.length;j++){
    var json ={
      type:result[j].name,
      id:result[j].id,
      data:api.serch({name:result[j].name},data)
    }
    newdata.push(json)
  }

  return newdata
}
api.serch=(argumentObj,data)=>{
  let res =[];
  res = data.filter(d => {
    for (let argu in argumentObj) {
      if (argumentObj[argu]===d[argu]) {
        return d
      }
    }

  });
  return res;
}
export default  api