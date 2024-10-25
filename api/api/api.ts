export * from './default.service';
import { DefaultService } from './default.service';
export * from './note.service';
import { NoteService } from './note.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [DefaultService, NoteService, UserService];
