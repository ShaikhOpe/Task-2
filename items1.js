// Number of items purchase -
    let items = 10;
    
// Price per item -
    let price = 20;
    
// Total cost without discount -
    let totalcostwithoutdiscount = items * price;

// Purchased more than 10 items -
 if (items >= 10) {
// After 10% discount -
    let disper = 10;
    let disamt = (disper / 100) * totalcostwithoutdiscount;
  
// Total cost after the discount -
    let totalcostwithdiscount = totalcostwithoutdiscount - disamt;

// Results -
   console.log(totalcostwithoutdiscount);
   console.log(totalcostwithdiscount);

// No discount -
} else {

   console.log(totalcostwithoutdiscount);
}

