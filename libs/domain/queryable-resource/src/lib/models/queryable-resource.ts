import { Resource } from "./resource";

export interface QueryableResource {
  id: string;
  name?: string;
  description?: string;
  imagePath?: string
  resource: Resource;
}
