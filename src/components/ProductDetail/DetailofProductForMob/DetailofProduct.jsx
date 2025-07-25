import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';
import "./DetailofProduct.css";

const DetailofProduct = ({Product}) => {
    

    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isAllergenOpen, setIsAllergenOpen] = useState(false);
    const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);

    return (
        <>
            <div className='detail_of_product'>
                <button onClick={() => setIsAboutOpen(!isAboutOpen)}
                    style={{ borderBottomLeftRadius: isAboutOpen ? "0px" : "15px", borderBottomRightRadius: isAboutOpen ? "0px" : "15px" }}
                    className="detail_btn">
                    <h2>About This</h2>
                    {isAboutOpen ? <ChevronUp size={22} className="icon" /> : <ChevronDown size={22} className="icon" />}
                </button>
                {isAboutOpen && (
                    <div className="answer">
                        <p>{Product[0].about}</p>
                    </div>
                )}
            </div>

            {/* Allergen Info */}
            <div className='detail_of_product'>
                <button onClick={() => setIsAllergenOpen(!isAllergenOpen)}
                    style={{ borderBottomLeftRadius: isAllergenOpen ? "0px" : "15px", borderBottomRightRadius: isAllergenOpen ? "0px" : "15px" }}
                    className="detail_btn">
                    <h2>Allergen Info</h2>
                    {isAllergenOpen ? <ChevronUp size={22} className="icon" /> : <ChevronDown size={22} className="icon" />}
                </button>
                {isAllergenOpen && (
                    <div className="answer">
                        <p>{Product[0].alergenInfo}</p>
                    </div>
                )}
            </div>

            {/* Ingredients */}
            <div className='detail_of_product'>
                <button onClick={() => setIsIngredientsOpen(!isIngredientsOpen)} style={{ borderBottomLeftRadius: isIngredientsOpen ? "0px" : "15px", borderBottomRightRadius: isIngredientsOpen ? "0px" : "15px" }} className="detail_btn">
                    <h2>Ingredients</h2>
                    {isIngredientsOpen ? <ChevronUp size={22} className="icon" /> : <ChevronDown size={22} className="icon" />}
                </button>
                {isIngredientsOpen && (
                    <div className="answer">
                        <p>{Product[0].ingredientInfo}</p>
                    </div>
                )}
            </div>

        </>
    )
}

export default DetailofProduct