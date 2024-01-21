// If the user buys at least 3 items of type 'clothing', apply an additional 3% discount.

// Number of clothing items purchase -
const items = 3;
// Price per item -
    const price = 1000; 

// Total price without discount -
    const totalpricewithoutdiscount = items * price;

// 5% discount if at least 5 electronic items are purchase -
    const disper = items >= 0 ? 3 : 0;

// The discount amount -
    const disamt = (disper / 100) * totalpricewithoutdiscount;

// Total price with discount -
    const totalpricewithdiscount = totalpricewithoutdiscount - disamt;

// Results -
    console.log(totalpricewithoutdiscount);
    console.log(disamt);
    console.log(totalpricewithdiscount);
