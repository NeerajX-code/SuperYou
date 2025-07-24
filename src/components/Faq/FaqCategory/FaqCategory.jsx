import { useEffect, useState } from "react";
import { faqCategories } from "../FaqData";
import FaqItem from '../FaqItem/FaqItem';
import "./FaqCategory.css";

const FaqCategory = () => {

    const [faq, setfaqData] = useState([]);

    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        setfaqData(faqCategories);
    }, [])


    return (
        <div className="faq_category">
            {faq?.map((val, i) => (
                <FaqItem
                    key={i}
                    Title={val.title}
                    faqData={val.items}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    gridClass={`grid-${String.fromCharCode(97 + i)}`} // grid-a, grid-b, etc.
                />
            ))}
        </div>
    )
}

export default FaqCategory