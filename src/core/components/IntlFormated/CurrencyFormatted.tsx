import { FormattedNumber } from 'react-intl';

import styles from "./intlFormated.module.scss";
import Text from '../Text';

interface CurrencyFormattedProps {
    amount: number;
    currency: string;
    style: "currency" | "unit" | "decimal" | "percent" | undefined;
}

function CurrencyFormatted({amount, currency, style} : CurrencyFormattedProps)  {


    return (
        <div className={styles.intFormatRow}>
            <Text fontWeight='bold'>Currency: </Text>
            <FormattedNumber
                value={amount}
                style={style}
                currency={currency}
            />
        </div>
    );
}

export default CurrencyFormatted;
