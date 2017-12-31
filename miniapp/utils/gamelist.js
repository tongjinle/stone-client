export class Game{
  constructor(arg){
    this.name = arg.name;
    this.id = arg.id;
    this.image = arg.image
  }
}

export function getgameList(list=[]){
  let arr = new Array();
  if(Array.isArray(list)){
    list.forEach(item=>{
      arr.push(new Game(item))
    })
    return arr
  }
}