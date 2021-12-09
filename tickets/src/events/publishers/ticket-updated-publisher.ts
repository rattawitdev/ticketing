import {
  Publisher,
  Subjects,
  TicketUpdatedEvent
} from '@rattawitptickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
