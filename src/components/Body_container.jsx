import Button from "./Button"

export default function Body_container(){
   const arr=['c','%','<-','/','7','8','9','*','4','5','6','-','1','2','3','+','00','0','.','=']


    return (
        <div className="body_container">
            {
                arr.map((item)=> <Button key={item} item={item}></Button>)
            }
           
             
        </div>
    )
}