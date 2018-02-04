import * as constants from './constants';

export const setBalance = balance => {
    return {
        type: constants.SET_BALANCE,
        balance
    }
}

export const withdrawBalance = withdraw => {
    return {
        type: constants.WITHDRAW,
        withdraw
    }
}

export const depositBalance = deposit => {
    return {
        type: constants.DEPOSIT,
        deposit
    }
}