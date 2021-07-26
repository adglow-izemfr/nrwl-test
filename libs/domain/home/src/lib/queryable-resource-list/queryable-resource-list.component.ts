import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Card } from "@rsrch/ui";
import { QueryableResource } from "../models/queryable-resource";

@Component({
  selector: 'rsrch-queryable-resource-list',
  templateUrl: './queryable-resource-list.component.html',
  styleUrls: ['./queryable-resource-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryableResourceList {
  @Input() queryableResources: QueryableResource[] = [];

  getCardFrom(queryableResource: QueryableResource): Card {
    return {
      title: queryableResource.name,
      description: queryableResource.description,
      // TODO add link
    }
  }
}
