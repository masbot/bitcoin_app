import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('BalanceReducer', () => {
    describe('when initializing', () => {
        const balance = 10;
        
        it('sets a balance', () => {
            expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
        });
    
        describe('then re-initializing', () => {
            it('reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
    });

    it('deposit into balance', () =>{
        const initialState = 10;
        const deposit = 10;
        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit })).toEqual(initialState+deposit);
    });

    it('withdraws from balance', () => {
        const initialState = 20;
        const withdraw = 10; 
        expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdraw })).toEqual(initialState - withdraw);
    });

});