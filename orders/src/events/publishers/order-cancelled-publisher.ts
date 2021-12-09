import {
  Subjects,
  Publisher,
  OrderCancelledEvent
} from '@rattawitptickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
