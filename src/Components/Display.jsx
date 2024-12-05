 const Display = ({textToShow}) => {
   return <>
     <div className="bg-blue-400 text-right text-xl font-mono rounded-md p-3 shadow-2xl hover:bg-blue-600">{textToShow ? <p>{textToShow}</p> : <p> 0 </p> }</div>
   </>
 }
export default Display;