import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent
} from '@rattawitptickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
