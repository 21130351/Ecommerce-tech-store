import React from 'react'
import {Grid, TextField} from "@mui/material"

interface BecomeSellerFormStep2Props {
    formik: any; //Replace "any" with the correct type for formik instance
}

const BecomeSellerFormStep3: React.FC<BecomeSellerFormStep2Props> = ({ formik }) => {
    return (
        <div className='space-y-5'>

            <TextField 
            fullWidth
            name='bankDetails.accountNumber'
            label="Account Number"
            value={formik.values.bankDetails.accountNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
            helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber }
            />
            <TextField
            fullWidth
            name='bankDetails.swiftCode'
            label="SWIFT Code"
            value={formik.values.bankDetails.swiftCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.swiftCode && Boolean(formik.errors.bankDetails?.swiftCode)}
            helperText={formik.touched.bankDetails?.swiftCode && formik.errors.bankDetails?.swiftCode}
            />
            <TextField 
            fullWidth
            name='bankDetails.accountHolderName'
            label="Account Holder Name"
            value={formik.values.bankDetails.accountHolderName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails?.accountHolderName)}
            helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.bankDetails?.accountHolderName}
            />
        </div>
    );
};



export default BecomeSellerFormStep3;