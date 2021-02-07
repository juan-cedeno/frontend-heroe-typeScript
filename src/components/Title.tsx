
import '../css/title.css'

interface ITitle {
     title: string,
     subTitle? : string
} 


export const Title = (props : ITitle) => {

     const {subTitle , title} = props

     return (
          <div className = 'cont-title'>
               <h3>{title}</h3>
               <p>{subTitle}</p>
          </div>
     )
}
