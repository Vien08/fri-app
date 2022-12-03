import Card from './Card'
import one from '../assets/img/276000579_304778585105204_5783896486589136582_n.jpg'
import two from '../assets/img/277614549_708540303647497_7922046760417323951_n.jpg'
import three from '../assets/img/314912939_816169889496137_6925873105028113687_n.jpg'
import four from '../assets/img/317692748_530525815394230_5958296828743130114_n.jpg'




function Allcards(){
    return(
        <>
        <div style={{display:"inline-flex"}}>
            <Card img={one}/>
            <Card img={two}/>
            <Card img={three}/>
            <Card img={four}/>
        </div>
        </>
    )
}
export default Allcards;