// export interface IQty{
//     Value?: string;
//     CurrencyType?: any;
    
// }

export interface ISwapExactInputSingleDataModel{

    TokenIn?: string;
    TokenOut?: string;
    Fee?: number;
    AmountIn?: string;
    AmountOutMinimum?: string; 
    SqrtPriceLimitX96?: string;
    Slippage?: number;

}