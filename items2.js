// If the user buys at least 5 items of type 'electronic', apply an additional 5% discount.

// Number of electronic items purchase -
    const items = 5;
// Price per item -
    const price = 1000; 

// Total price without discount -
    const totalpricewithoutdiscount = items * price;

// 5% discount if at least 5 electronic items are purchase -
    const disper = items >= 5 ? 5 : 0;

// The discount amount -
    const disamt = (disper / 100) * totalpricewithoutdiscount;

// Total price with discount -
    const totalpricewithdiscount = totalpricewithoutdiscount - disamt;

// Results -
    console.log(totalpricewithoutdiscount);
    console.log(disamt);
    console.log(totalpricewithdiscount);
