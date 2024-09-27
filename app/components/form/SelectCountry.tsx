'use client';

import Select from 'react-select';
import useCountries from '@/app/hooks/useCountries';

export type SelectCountryValue = {
    label: string;
    value: string;
}

interface SelectCountryProps {
    value?: SelectCountryValue;
    onChange: (value: SelectCountryValue) => void,
}

const SelectCountry: React.FC<SelectCountryProps> = ({
    value,
    onChange
}) => {
    return (
        <>test</>
    )
}

export default SelectCountry;