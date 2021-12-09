import {
  Publisher,
  Subjects,
  TicketCreatedEvent
} from '@rattawitptickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
