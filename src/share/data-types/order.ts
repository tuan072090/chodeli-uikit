export type OrderType =
    {
        type: String,
        groupId: Number,
        leaderId: Number,
        note: String,
        promotionCode: String,
        items: ItemOrderType[],
    }
export type ItemOrderType = { id: Number, quantity: Number };

