import React from "react";


class Form1 extends React.Component {
    render(){
        return(
            <div>
                <nav className="collapse in" dimension="height">
                    <ul className="nav nav-pills nav-justified">
                        <li role="presentation" className=""><a href="" aria-selected="false">Offer Selection<span className="fa fa-angle-right" style="margin-left: 3px;"></span></a></li>
                        <li role="presentation" className="active disabled"><a href="" aria-selected="true">Basic Services<span className="fa fa-angle-right" style="margin-left: 3px;"></span></a></li>
                    </ul>
                </nav>
                <div></div>
    <div style="height: 31px; margin: 10px 0px;">
        <div style="text-align: right; height: 31px; margin: 10px 0px;">
            <button type="button" className="btn btn-default">Expand All</button>
            <button type="button" className="btn btn-default">Collapse All</button>
        </div>
    </div>
    <div style="min-height: 250px; max-height: calc(100vh - 208px); overflow-y: auto; padding: 0px 10px;">
        <div style="width: 49%; display: inline-block; vertical-align: top;">
            <div>
                <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                    <div className="form-group " style="display: inline-block; width: 200%;">
                        <div style="display: inline-block;">
                            <label style="margin-top: 7px; text-align: right;">* Order Reason(s)</label>
                        </div>
                        <div style="padding-left: 5px; display: inline-block;">
                            <div style="width: 608px; margin-left: 10px;">
                                <div className="multiselectComponent" style="width: 80%;">
                                    <div className="btn-group">
                                        <button className="dropdown-toggle btn btn-default" type="button" style="overflow-x: hidden; text-overflow: ellipsis; border: 1px solid rgb(225, 225, 225); color: rgb(0, 0, 0);">Sale by Inbound </button>
                                        <ul className="dropdown-menu" role="menu">
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1"><span className="fa fa-check fa-lg" style="padding: 0px 5px;"></span>Sale by Inbound</a></li>
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1">Transfer out of market</a></li>
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1">TV Home Shipment of Video Equipment - high definition or standard</a></li>
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1">Video equipment self install pickup</a></li>
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1">Cable Card Self-Install</a></li>
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1">Cable Card Self-Install Pickup</a></li>
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1">Internet Self-Install</a></li>
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1">Direct Shipment of WIFI Self Install Equipment</a></li>
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1">Online Sale</a></li>
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1">Sales by Store</a></li>
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1">Sales by retail location</a></li>
                                            <li role="presentation" className="" style="padding: 0px 5px;"><a role="button" href="" tabindex="-1">Tech in home upgrade</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="display: none;"></div>
        </div>
        <div style="width: auto; display: block; vertical-align: top;">
            <div style="height: 40px; border: 1px solid rgb(204, 204, 204); background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); cursor: pointer; padding-top: 20px;">
                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: visible; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                    <div className="form-group ">
                        <div style="display: inline-block;">
                            <label style="margin-top: 7px; text-align: right;">TV Select + Internet (44/44) SPP 2.0 #2748993 NC<span className="fa fa-info-circle fa-lg" style="padding-left: 0.5em; color: rgb(0, 90, 132); cursor: pointer;"></span></label>
                        </div>
                        <div style="padding-left: 5px; display: inline-block;"></div>
                    </div>
                </div>
            </div>
            <div style="margin-top: 10px; margin-left: 10px; margin-bottom: 10px;">
                <div style="width: auto; display: block; vertical-align: top;">
                    <div style="height: 40px; border: 1px solid rgb(204, 204, 204); background-color: rgb(0, 90, 132); color: rgb(255, 255, 255); cursor: pointer; padding-top: 20px;">
                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: visible; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                            <div className="form-group ">
                                <div style="display: inline-block;">
                                    <label style="margin-top: 7px; text-align: right;">Spectrum Video</label>
                                </div>
                                <div style="padding-left: 5px; display: inline-block;"></div>
                            </div>
                        </div>
                        <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px; color: rgb(255, 255, 255);">$     56.98</span></div>
                    </div>
                    <div style="margin-top: 10px; margin-left: 10px; margin-bottom: 10px;">
                        <div style="width: auto; display: block; vertical-align: top;">
                            <div style="height: 40px; border: none; background-color: rgb(242, 242, 242); color: rgb(0, 0, 0); cursor: pointer; margin: 1px; padding-top: 20px;">
                                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: visible; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                                    <div className="form-group ">
                                        <div style="display: inline-block;"></div>
                                        <div style="padding-left: 5px; display: inline-block;"><span><input type="checkbox" disabled="" value="Spectrum TV" style="margin: 0px;"><span style="padding-left: 5px;">Spectrum TV</span></span>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px; color: rgb(0, 0, 0);">$      0.00</span></div>
                            </div>
                            <div style="margin-top: 10px; margin-left: 10px; margin-bottom: 10px;">
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;">VOD</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select>
                                                        <option value="No">No</option>
                                                        <option value="Yes">Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: auto; display: block; vertical-align: top;">
                                    <div style="height: 30px; border: none; background-color: rgb(242, 242, 242); color: rgb(0, 0, 0); cursor: pointer; margin: 1px; padding-top: 15px;">
                                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: visible; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                                            <div className="form-group ">
                                                <div style="display: inline-block;"></div>
                                                <div style="padding-left: 5px; display: inline-block;"><span><input type="checkbox" disabled="" value="Spectrum TV Select" style="margin: 0px;"><span style="padding-left: 5px;">Spectrum TV Select</span></span><span className="fa fa-info-circle fa-lg" style="padding-left: 0.5em; color: rgb(0, 90, 132); cursor: pointer;"></span></div>
                                            </div>
                                        </div>
                                        <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px; color: rgb(0, 0, 0);">$     44.99</span></div>
                                    </div>
                                    <div style="margin-top: 10px; margin-left: 10px; margin-bottom: 10px;">
                                        <div style="width: auto; display: block; vertical-align: top;">
                                            <div style="height: 28px; padding-top: 14px;">
                                                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: visible; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                                                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                                                    <div className="form-group ">
                                                        <div style="display: inline-block;"></div>
                                                        <div style="padding-left: 5px; display: inline-block;"><span><input type="checkbox" value="" style="margin: 0px;"><span style="padding-left: 5px;">Spectrum TV Silver</span></span><span className="fa fa-info-circle fa-lg" style="padding-left: 0.5em; color: rgb(0, 90, 132); cursor: pointer;"></span></div>
                                                    </div>
                                                </div>
                                                <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px;">$     20.00</span></div>
                                            </div>
                                            <div style="margin-top: 10px; margin-left: 10px; margin-bottom: 10px;">
                                                <div style="width: auto; display: block; vertical-align: top;">
                                                    <div>
                                                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: hidden; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                                                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                                                            <div className="form-group ">
                                                                <div style="display: inline-block;"></div>
                                                                <div style="padding-left: 5px; display: inline-block;"><span><input type="checkbox" value="" disabled="" style="margin: 0px;"><span style="padding-left: 5px;">Spectrum TV Gold</span></span><span className="fa fa-info-circle fa-lg" style="padding-left: 0.5em; color: rgb(0, 90, 132); cursor: pointer;"></span></div>
                                                            </div>
                                                        </div>
                                                        <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px; color: rgb(0, 0, 0);">$     20.00</span></div>
                                                    </div>
                                                    <div style="display: none;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="width: auto; display: block; vertical-align: top;">
                    <div style="height: 40px; border: 1px solid rgb(204, 204, 204); background-color: rgb(0, 90, 132); color: rgb(255, 255, 255); cursor: pointer; padding-top: 20px;">
                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: visible; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                            <div className="form-group ">
                                <div style="display: inline-block;">
                                    <label style="margin-top: 7px; text-align: right;">Spectrum Internet</label>
                                </div>
                                <div style="padding-left: 5px; display: inline-block;"></div>
                            </div>
                        </div>
                        <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px; color: rgb(255, 255, 255);">$     44.99</span></div>
                    </div>
                    <div style="margin-top: 10px; margin-left: 10px; margin-bottom: 10px;">
                        <div style="width: auto; display: block; vertical-align: top;">
                            <div style="height: 40px; border: none; background-color: rgb(242, 242, 242); color: rgb(0, 0, 0); cursor: pointer; margin: 1px; padding-top: 20px;">
                                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: visible; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                                    <div className="form-group ">
                                        <div style="display: inline-block;"></div>
                                        <div style="padding-left: 5px; display: inline-block;"><span><input type="checkbox" disabled="" value="Spectrum Internet" style="margin: 0px;"><span style="padding-left: 5px;">Spectrum Internet</span></span>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px; color: rgb(0, 0, 0);">$     44.99</span></div>
                            </div>
                            <div style="margin-top: 10px; margin-left: 10px; margin-bottom: 10px;">
                                <div style="width: auto; display: block; vertical-align: top;">
                                    <div style="height: 30px; border: none; background-color: rgb(242, 242, 242); color: rgb(0, 0, 0); cursor: pointer; margin: 1px; padding-top: 15px;">
                                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: hidden; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                                            <div className="form-group ">
                                                <div style="display: inline-block;"></div>
                                                <div style="padding-left: 5px; display: inline-block;"><span><input type="checkbox" value="Spectrum Internet Plus" style="margin: 0px;"><span style="padding-left: 5px;">Spectrum Internet Plus</span></span><span className="fa fa-info-circle fa-lg" style="padding-left: 0.5em; color: rgb(0, 90, 132); cursor: pointer;"></span></div>
                                            </div>
                                        </div>
                                        <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px; color: rgb(0, 0, 0);">$      0.00</span></div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: auto; display: block; vertical-align: top;">
                                    <div style="height: 30px; border: none; background-color: rgb(242, 242, 242); color: rgb(0, 0, 0); cursor: pointer; margin: 1px; padding-top: 15px;">
                                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: hidden; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                                            <div className="form-group ">
                                                <div style="display: inline-block;"></div>
                                                <div style="padding-left: 5px; display: inline-block;"><span><input type="checkbox" value="" style="margin: 0px;"><span style="padding-left: 5px;">Spectrum Internet Ultra</span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px; color: rgb(0, 0, 0);">$     20.00</span></div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: auto; display: block; vertical-align: top;">
                                    <div style="height: 30px; border: none; background-color: rgb(242, 242, 242); color: rgb(0, 0, 0); cursor: pointer; margin: 1px; padding-top: 15px;">
                                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: hidden; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                                            <div className="form-group ">
                                                <div style="display: inline-block;"></div>
                                                <div style="padding-left: 5px; display: inline-block;"><span><input type="checkbox" value="" style="margin: 0px;"><span style="padding-left: 5px;">Spectrum Internet Gig</span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px; color: rgb(0, 0, 0);">$     60.00</span></div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: auto; display: block; vertical-align: top;">
            <div style="height: 40px; border: 1px solid rgb(204, 204, 204); background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); cursor: pointer; padding-top: 20px;">
                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: visible; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                    <div className="form-group ">
                        <div style="display: inline-block;">
                            <label style="margin-top: 7px; text-align: right;">Voice Bundled (9) SPP 2.0 #2755393 NC<span className="fa fa-info-circle fa-lg" style="padding-left: 0.5em; color: rgb(0, 90, 132); cursor: pointer;"></span></label>
                        </div>
                        <div style="padding-left: 5px; display: inline-block;"></div>
                    </div>
                </div>
            </div>
            <div style="margin-top: 10px; margin-left: 10px; margin-bottom: 10px;">
                <div style="width: auto; display: block; vertical-align: top;">
                    <div style="height: 40px; border: 1px solid rgb(204, 204, 204); background-color: rgb(0, 90, 132); color: rgb(255, 255, 255); cursor: pointer; padding-top: 20px;">
                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: visible; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                        <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                            <div className="form-group ">
                                <div style="display: inline-block;">
                                    <label style="margin-top: 7px; text-align: right;">Spectrum Voice</label>
                                </div>
                                <div style="padding-left: 5px; display: inline-block;"></div>
                            </div>
                        </div>
                        <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px; color: rgb(255, 255, 255);">$      9.99</span></div>
                    </div>
                    <div style="margin-top: 10px; margin-left: 10px; margin-bottom: 10px;">
                        <div style="width: auto; display: block; vertical-align: top;">
                            <div style="height: 40px; border: none; background-color: rgb(242, 242, 242); color: rgb(0, 0, 0); cursor: pointer; margin: 1px; padding-top: 20px;">
                                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%); visibility: visible; vertical-align: top;"><span className="fa fa-minus-square-o fa-lg"></span></div>
                                <div style="display: inline-block; padding-left: 5px; transform: translateY(-50%);">
                                    <div className="form-group ">
                                        <div style="display: inline-block;"></div>
                                        <div style="padding-left: 5px; display: inline-block;"><span><input type="checkbox" disabled="" value="Spectrum Voice Primary Line" style="margin: 0px;"><span style="padding-left: 5px;">Spectrum Voice Primary Line - Host Phone:  (608) 204 - 8368</span></span><span className="fa fa-info-circle fa-lg" style="padding-left: 0.5em; color: rgb(0, 90, 132); cursor: pointer;"></span></div>
                                    </div>
                                </div>
                                <div style="display: block; padding-left: 5px; transform: translateY(-50%); float: right; padding-right: 40px;"><span style="border: 0px; margin: 0px; background: transparent; padding: 0px; color: rgb(0, 0, 0);">$      9.99</span></div>
                            </div>
                            <div style="margin-top: 10px; margin-left: 10px; margin-bottom: 10px;">
                                <div>
                                    <div style="position: relative; bottom: 46px;">
                                        <button type="button" className="btn btn-success" style="position: absolute; left: 55%; transform: translate(-55%);">One Click Host</button>
                                        <button type="button" className="btn btn-default" style="position: absolute; left: 69%; transform: translate(-55%);">Advanced Host</button>
                                    </div>
                                    <div style="right: 70px; bottom: 25px; position: absolute;"></div>
                                </div>
                                <div>
                                    <div style="position: relative; bottom: 46px;">
                                        <button type="button" className="btn btn-default" style="position: absolute; left: 73%; transform: translate(55%);">Port</button>
                                    </div>
                                    <div style="right: 70px; bottom: 25px; position: absolute;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>Block 3rd and Collect Calls</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select>
                                                        <option value="B">Block 3rd Party Only</option>
                                                        <option value="A">Block Both Third and Collect</option>
                                                        <option value="C">Block Collect Only</option>
                                                        <option value="D">No Restriction</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>Block Call Trace</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select>
                                                        <option value="NO">No</option>
                                                        <option value="YES">Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>Block International Calling</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select>
                                                        <option value="N">No</option>
                                                        <option value="Y">Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>Block or Display C..</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select>
                                                        <option value="A">Allow Caller ID</option>
                                                        <option value="R">Block Caller ID</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>Caller ID Name</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <input className="form-control" type="text" placeholder="" value="Grisham, Ricky" style="padding: 1px 12px; height: 26px; margin-top: 2px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;">E911 Disability Ind</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select>
                                                        <option value="No Value Selected">No Value Selected</option>
                                                        <option value="B">Blind</option>
                                                        <option value="CI">Cognitive Impairment</option>
                                                        <option value="DHH">Deaf or Hard of Hearing</option>
                                                        <option value="LSS">Life Support System</option>
                                                        <option value="MI">Mobility Impaired</option>
                                                        <option value="NS">Not Specified</option>
                                                        <option value="SI">Speech Impaired</option>
                                                        <option value="TTY">Teletypewriter</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;">Emergency Install</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select>
                                                        <option value="NO">No</option>
                                                        <option value="YES">Yes NDT</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>LEC Account PIN</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <input className="form-control" type="text" placeholder="" value="None" style="padding: 1px 12px; height: 26px; margin-top: 2px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>LEC Freeze</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select>
                                                        <option value="NO">LEC Freeze No</option>
                                                        <option value="YES">LEC Freeze Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>LOA</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select>
                                                        <option value="NOT REQUIRED">Not Required</option>
                                                        <option value="YES">Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>Partial Port</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select>
                                                        <option value="DISCONNECT">Disconnect</option>
                                                        <option value="RETAIN">Partial Port</option>
                                                        <option value="YES">Port All Lines</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>Port-InLEC</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <input className="form-control" type="text" disabled="" placeholder="" value="Charter_Fiber-TNS:5606/1" style="padding: 1px 12px; height: 26px; margin-top: 2px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;">Port-In Address/Name Mismatch</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select>
                                                        <option value="YES">Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>Port-In LEC Account Number</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <input className="form-control" type="text" placeholder="" value="None" style="padding: 1px 12px; height: 26px; margin-top: 2px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;">Porting Ind</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <select disabled="" style="background-color: rgb(238, 238, 238); cursor: not-allowed; border: 1px solid rgb(223, 223, 223); box-shadow: rgba(50, 50, 50, 0.3) -1px 1px 1px 0px;">
                                                        <option value="No">No</option>
                                                        <option value="Yes">Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                                <div style="width: 49%; display: inline-block; vertical-align: top;">
                                    <div>
                                        <div style="display: none; padding-left: 5px; transform: none; vertical-align: top;"><span className="fa fa-plus-square-o fa-lg"></span></div>
                                        <div style="display: inline-block; padding-left: 5px; transform: none; width: 95%;">
                                            <div className="form-group ">
                                                <div style="display: inline-block; text-align: right; width: 50%;">
                                                    <label style="margin-top: 7px; text-align: right;"><span style="color: rgb(204, 0, 0); margin-right: 5px;">*</span>Telephone Number</label>
                                                </div>
                                                <div style="padding-left: 5px; display: inline-block; width: 49%;">
                                                    <input className="form-control" type="text" disabled="" placeholder="" value="6082048368" style="padding: 1px 12px; height: 26px; margin-top: 2px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: none;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button type="submit" className="btn btn-default" style="float: left; margin: 5px; position: relative;">Back</button>
    <div style="float: right; margin: 5px; display: inline-block;">
        <button type="submit" className="btn btn-success" style="width: 71px; position: relative;">Next</button>
    </div>
</div>
        )

    }


}

export default Form1;


