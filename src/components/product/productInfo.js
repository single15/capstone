import React from "react";
import { ReactComponent as FeatherIcon } from 'assets/feather.svg';
import { ReactComponent as LayersIcon } from 'assets/layers.svg';
import { ReactComponent as WindIcon } from 'assets/wind.svg';
import { ReactComponent as CloudSnowIcon } from 'assets/cloud-snow.svg';
import HorizontalBar from "components/horizontalbar/horizontalbar";
import 'components/product/productInfo.scss';


const ProductInfo = ({ item }) => (
    <div className="aem-Grid aem-Grid--12 product-info-section">
        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
            <center>
                <h2>{item.title}</h2>
            </center>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  product-info-description regular-body-s-14-">
            <div className="block-header">
                <center>
                    <b>Description</b>
                </center>
            </div>
            <div>{item.description}</div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  product-info-details regular-body-s-14-">
            <div className="block-header">
                <center><b>Details</b></center>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                    <center><WindIcon />&nbsp;&nbsp;Sweat-wicking</center>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                    <center><CloudSnowIcon />&nbsp;&nbsp;Breathable</center>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                    <center><FeatherIcon />&nbsp;&nbsp;Lightweight fabric</center>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                    <center><LayersIcon />&nbsp;&nbsp;69% nylon, 31% lycra</center>
                </div>
            </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--12">
            <center>
                <HorizontalBar />
            </center>
        </div>
    </div>
)


export default ProductInfo;