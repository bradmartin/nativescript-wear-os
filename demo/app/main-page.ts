import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function navigatingTo(args: observable.EventData) {
  // Get the event sender
  const page = <pages.Page>args.object;
  page.actionBarHidden = true;
  page.bindingContext = new HelloWorldModel(page);
}
