import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { In, Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private orderRepo: Repository<Order>,
  @InjectRepository(Product) private productRepo: Repository<Product>) {}

  async create(createOrderDto: CreateOrderDto) {
    const productIds = createOrderDto.items.map(item => item.product_id)
    const products = await this.productRepo.findBy({id:In(productIds)})
    Order.create({
      client_id:1,
      items: createOrderDto.items.map(item=>{
        return{
          price:,
          product_id: item.product_id,
          quantity:item.quantity
        }
      })
    })
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
}
