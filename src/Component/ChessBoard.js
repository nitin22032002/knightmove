import React,{useState} from 'react'
import "../css/chessboard.css"
export default function ChessBoard() {
  return (
    <div className='main-div'>
       
            <div className='main-chess-body'>
                <GenerateChessBlock/>
            </div>
    </div>
  )
}

function Range(start,end){
    let result=[]
    for(let i=start;i<=end;i++){
        result.push(i)
    }
    return result;
}

function GenerateChessBlock(){
    let arr=Range(1,8)
    const [getPosible,setPosible]=useState(JSON.stringify([]))
    const [getSelected,setSelected]=useState({i:"",j:""})
    const handleClick=(i,j,e)=>{
        setSelected({i,j})
        let possiblePosition=[`${i+2},${j-1}`,`${i+2},${j+1}`,`${i-2},${j-1}`,`${i-2},${j+1}`,`${i+1},${j-2}`,`${i-1},${j-2}`,`${i+1},${j+2}`,`${i-1},${j+2}`]
        setPosible(JSON.stringify(possiblePosition))        
    }
    return(
        <div className='vertical'>
            {
                arr.map((i)=>{
                    return(
                       <div className='horizontal'>
                        {arr.map((j)=>{
                            return(
                                <div className={`block ${i%2===0?j%2===0?"light":"dark":j%2!==0?"light":"dark"} ${(parseInt(getSelected.i)===i && parseInt(getSelected.j)===j)?"selected":JSON.parse(getPosible).includes(`${i},${j}`)?"possible":""}`}  onClick={(e)=>{handleClick(i,j,e)}}>{(parseInt(getSelected.i)===i && parseInt(getSelected.j)===j)?"S":JSON.parse(getPosible).includes(`${i},${j}`)?"P":""}</div>
                            )
                        })}
                        </div>
                    )
                })
            }
        </div>
    )
}
