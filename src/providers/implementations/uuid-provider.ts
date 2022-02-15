import {uuid} from "uuidv4";
import {IUUIDProvider} from "../iuuid-provider";

export class UUIDProvider implements IUUIDProvider {
  generateId(): string {
    return uuid();
  }
}