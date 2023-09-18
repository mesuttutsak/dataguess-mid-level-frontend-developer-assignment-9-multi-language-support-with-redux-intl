import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import DateFormatted from '../../IntlFormated/DateFormatted';
import CurrencyFormatted from '../../IntlFormated/CurrencyFormatted';
import NumberFormatted from '../../IntlFormated/NumberFormatted';
import PluralFormatted from '../../IntlFormated/PluralFormatted';
import RelativeTimeFormatted from '../../IntlFormated/RelativeTimeFormatted';

const HomePage = () => {

    return (
        <>
            FormattedMessage : <FormattedMessage id='welcome' />
            <DateFormatted />
            <CurrencyFormatted amount={1234.56} style='currency' currency="USD" />
            <NumberFormatted  value={12345.67} style='decimal'/>
            <PluralFormatted value={3} />
            <RelativeTimeFormatted />
        </>
    )
}

export default HomePage