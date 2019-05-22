import React from 'react';

export default function OfferChildSection({label, price, isDefault}) {
	return (
        <div className="spVSection">
        <div className="spVideoInternet">
            <div className="spChild">
                <div className="spVHeaderIcon">
                    <span className="fa fa-minus-square-o fa-lg"></span>
                </div>
                <div className="spVHeaderLabel">
                    <div className="form-group">
                        <div className="formGroupStyle"></div>
                        <div className="checkboxStyle">
                            <span>
                                <input class="checkboxIcon" type="checkbox" disabled={isDefault} value="Spectrum TV" />
                                <span class="checkboxLabel">{label}</span>
                            </span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="spVHeaderPrice">
                    <span class="spVHeaderChildPriceStyle">{price}</span>
                </div>

            </div>
        </div>
        </div>
    )
    }



