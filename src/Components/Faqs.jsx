import Accordion from "./Accordion"
import Footer from "./footer";

function Faqs() {
    return (<div className="FAQSmain">
        <div className="FAQSwrap">
            <div className="FAQSwrap1">
               <div className="FAQSText">Frequently <br/>asked <br/>question</div>
            </div>
            <div className="FAQSaccordion"><Accordion/></div>
        </div>
    </div>)
}

export default Faqs;