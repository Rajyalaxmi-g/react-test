import React from 'react';

export default function OfferInnerChild(){
    return(

        <div className="spVSection">
            <div className="spVideoInternet">
                <div className="spInnerChild">
                    <div className="spVHeaderIcon">
                        <span className="fa fa-minus-square-o fa-lg" />
                    </div>
                    <div className="spVHeaderLabel">
                        <div className="form-group">
                        <div className="formGroupStyle">
                            <div className="checkboxStyle">
                            <span>
                                <input
                                className="checkboxIcon"
                                type="checkbox"
                                disabled
                                value="Spectrum TV"
                                />
                                <span className="checkboxLabel">
                                Spectrum TV Silver
                                </span>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="spVHeaderPrice">
                        <span className="spVHeaderChildPriceStyle">
                        $20.00
                        </span>
                    </div>
                </div>
           
            
        </div>
    </div>
    )
}