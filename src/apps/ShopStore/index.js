import React, { useState } from 'react'
import Home from '../Home';
import { AppIconImgUrl } from '../../constants';
import { M1, AppDv, Head } from './styles';
import SignInBtn from '../SignInBtn';

const ShopStore = () => {

    return (
        <>
            <Head data-testid="shopee-header">
                <AppDv><img src={AppIconImgUrl} alt='logo' /></AppDv>
                <SignInBtn/>
            </Head>
            <M1>
                <Home />
            </M1>
        </>
    )
}

export default ShopStore;