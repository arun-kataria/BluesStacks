import React from 'react';
import moment from 'moment';
import Modal from '@material-ui/core/Modal';

export default function CampaignRow(props) {
    const [value, setValue] = React.useState(false);
    const [modelValue, setModalValue] = React.useState({});
    function daysAgo(timeStamp) {
        let label = ' Days Ago';
        let days = moment((new Date(timeStamp)).toUTCString()).diff(moment(), 'days')
        return days + label;
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
                    </div>
                    <div>

                    </div>

                    <div onClick={closeModal}>Close</div>
                </div>
            </Modal>
        </div>
    )
}