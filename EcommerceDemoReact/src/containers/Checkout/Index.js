export const RemoveItemInArray = (array, value) => {
    var index = array.indexOf(value);
    if (index > -1) {
        array.splice(index,1);
    }
    return array;
}

export const CalculatePurchase = (arrValue) => {
    let totalPurchase = 0;
    if (arrValue.length === 0)
    {
        return totalPurchase;
    } else {
        for(let i = 0; i < arrValue.length; i++)
        {
            totalPurchase += arrValue[i].cost;
        }
        return totalPurchase;
    }
}