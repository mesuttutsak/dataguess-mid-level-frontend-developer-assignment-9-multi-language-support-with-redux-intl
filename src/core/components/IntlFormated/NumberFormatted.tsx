import React from 'react';
import { FormattedNumber } from 'react-intl';
import styles from "./intlFormated.module.scss";
import Text from '../Text';

interface NumberFormattedProps {
    value: number;
    style: "currency" | "unit" | "decimal" | "percent" | undefined
}

function NumberFormatted({ value, style }: NumberFormattedProps) {

    return (
        <div className={styles.intFormatRow}>
            <Text fontWeight='bold'>FormattedNumber: </Text>
            <FormattedNumber
                value={value}
                style={style}
            />
        </div>
    );
}

export default NumberFormatted;
