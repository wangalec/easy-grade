export default function SavedQuestion(props: any){
  
    return(
      <div>
        <h2> Question </h2>
        <h3> {props.question} </h3>
        <h2> Answer </h2>
        <h3> {props.answer} </h3>
      </div>
    )
  }