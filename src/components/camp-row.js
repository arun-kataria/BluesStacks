import React from 'react';
import moment from 'moment';
import Modal from '@material-ui/core/Modal';

export default function CampaignRow(props) {
    const [value, setValue] = React.useState(false);
    const [modelValue, setModalValue] = React.useState({});
    function daysAgo(timeStamp) {
        let days = moment((new Date(timeStamp)).toUTCString()).diff(moment(), 'days');
        let result = ''
        if (days > 1)
            result = days + ' Days to Go';
        else if (days < 1)
            result = Math.abs(days) + ' Days Ago'
        return result;
    }
    function pricingPopUp(item) {
        setModalValue(item)
        console.log("item=== ", item);
        setValue(true)
    }
    function closeModal() {
        setModalValue({})
        setValue(false)
    }
    return (
        <div>

            <div className='table-row'>
                <div className='table-row-set row-first'>
                    <span className='pos-abso row-date-text'>{moment((new Date(props.Item.createdOn)).toUTCString()).format("MMM YYYY, DD")}</span>
                    <span className='pos-abso row-text-small row-date-small-text'>{daysAgo(props.Item.createdOn)}</span>
                </div>
                <div className='table-row-set row-secound'>
                    <img className='pos-abso row-img-large' src={props.Item.image_url} alt='campaign-img' />
                    <span className="pos-abso row-text-secound">{props.Item.name}</span>
                    <span className='pos-abso row-text-small row-camp-small-text'>{props.Item.region}</span>
                </div>
                <div className='table-row-set row-view' onClick={() => pricingPopUp(props.Item)}>
                    <img className="pos-abso row-img-small" src={'/images/Price.png'} alt='price' />
                    <span className='pos-abso row-font-size-colour row-text-top row-text-left-pricing'>View Pricing</span>
                </div>
                <div className='table-row-set row-csv'>
                    <img className="pos-abso row-img-small" src={'/images/file.png'} alt='price' />
                    <span className='pos-abso row-font-size-colour row-text-top row-csv-left'>CSV</span>
                </div>
                <div className='table-row-set row-report-div'>
                    <img className="pos-abso row-img-small" src={'/images/report.png'} alt='price' />
                    <span className='pos-abso row-font-size-colour row-text-top row-report'>Report</span>
                </div>
                <div className='table-row-set row-schedule'>
                    <img className="pos-abso row-img-small" src={'/images/calendar.png'} alt='price' />
                    <span className='pos-abso row-font-size-colour row-text-top row-report'>Schedule Again</span>
                </div>
                <div className="bottom-line"></div>
            </div>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                closeAfterTransition
                open={value}
            >
                <div className='model-main'>
                    <div className='model-first-div'>
                        <img className='model-img' src={modelValue.image_url} alt='campaign-img' />
                        <span className='model-name'>{modelValue.name}</span>
                        <span className='model-region'>{modelValue.region}</span>
                    </div>
                    <div className='model-secound-div'>
                        <div className='model-pricing-text'>Pricing</div>
                        <div className='model-pricing-text-first'><span>1 Week - 1 Month</span><span className='model-rate-text'>$100.00</span></div>
                        <div className='model-pricing-text-first'><span>6 Months</span><span className='model-rate-text'>$500.00</span></div>
                        <div className='model-pricing-text-first'><span>1 Year</span><span className='model-rate-text'>$900.00</span></div>
                    </div>
                    <div className='model-close-div'><div className='model-close-button' onClick={closeModal}>Close</div> </div>
                </div>
            </Modal>
        </div>
    )
}