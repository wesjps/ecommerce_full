export class CreateOrderDto {
  items: any[];

  card_hash: string;
}

export class OrderItemDto {
  quantity: number;

  product_id: number;
}
