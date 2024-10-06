export function L_A (debt, asstes){
    return debt / asstes;
}

export function EBITDA (profit_before_taxes, amortization){
    return profit_before_taxes + amortization;
}

export function ND (loans, cash){
    return loans - cash;
}

export function ND_EBIT (ND, EBIT){
    return ND / EBIT;
}

export function Cash_Debt (cash, debt){
    return cash / debt;
}

export function percent (num1, num2){
    return num1 * 100 / num2;
}

export function marginality (revenue, cost_price){
    return cost_price / revenue * 100;
}