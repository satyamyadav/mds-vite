# EmptyState

The empty state indicates the absence of data and helps guide users on expected content and next steps.

### Code Examples

#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import noFilesEmptyFiles from '@innovaccer/mds-images/ui-states/no-files-empty-files.svg';

  return (
    <EmptyState>
      <EmptyState.Image src="https://mds.innovaccer.com/static/media/no-files-empty-files.442ee36a.svg" />
      {/* Replace image path used above with imported image file name
      <EmptyState.Image src={noFilesEmptyFiles} /> */}

      <EmptyState.Title>Title goes here</EmptyState.Title>
      <EmptyState.Description>Description goes here</EmptyState.Description>
      <EmptyState.Actions>
        <Button className="mr-4">Secondary action</Button>
        <Button appearance="primary">Primary action</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import noFilesEmptyFiles from '@innovaccer/mds-images/ui-states/no-files-empty-files.svg';

  return (
      <EmptyState size="compressed">
        <EmptyState.Image src={"static/media/no-files-empty-files.442ee36a.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={noFilesEmptyFiles}></EmptyState.Image> */}

        <EmptyState.Title>Title goes here</EmptyState.Title>
        <EmptyState.Description>
          Description goes here
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button className="mr-4">Secondary action</Button>
          <Button appearance="primary">Primary action</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import noFilesEmptyFiles from '@innovaccer/mds-images/ui-states/no-files-empty-files.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={"static/media/no-files-empty-files.442ee36a.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={noFilesEmptyFiles}></EmptyState.Image> */}

        <EmptyState.Title>Title goes here</EmptyState.Title>
        <EmptyState.Description>
          Description goes here
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button className="mr-4">Secondary action</Button>
          <Button appearance="primary">Primary action</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import noFilesEmptyFiles from '@innovaccer/mds-images/ui-states/no-files-empty-files.svg';

  return (
      <EmptyState size="tight">
        <EmptyState.Image src={"static/media/no-files-empty-files.442ee36a.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={noFilesEmptyFiles}></EmptyState.Image> */}

        <EmptyState.Title>Title goes here</EmptyState.Title>
        <EmptyState.Description>
          Description goes here
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button size="tiny" className="mr-4">
            Secondary action
          </Button>
          <Button size="tiny" appearance="primary">
            Primary action
          </Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import noFilesEmptyFiles from '@innovaccer/mds-images/ui-states/no-files-empty-files.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={"static/media/no-files-empty-files.442ee36a.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={noFilesEmptyFiles}></EmptyState.Image> */}

        <EmptyState.Title>There are no referrals yet</EmptyState.Title>
        <EmptyState.Description>When you create a new referral, you will see it here.</EmptyState.Description>
        <EmptyState.Actions>
          <Button className="mr-4">Secondary action</Button>
          <Button appearance="primary">Primary action</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import noContent from '@innovaccer/mds-images/ui-states/404-nothing-here-3.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={"static/media/404-nothing-here-3.2871b1b3.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={noContent}></EmptyState.Image> */}

        <EmptyState.Title>Failed to load data</EmptyState.Title>
        <EmptyState.Description>
          We are unable to fetch the data. Try again. If the issue persists, contact Innovaccer support.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="refresh">Try again</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import connectionLost from '@innovaccer/mds-images/ui-states/connection-lost.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={"static/media/connection-lost.3faf24fb.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={connectionLost}></EmptyState.Image> */}

        <EmptyState.Title>You are offline</EmptyState.Title>
        <EmptyState.Description>
          Looks like you are not connected to the internet. Check your connection and try again.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="refresh">Try again</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import lockedState from '@innovaccer/mds-images/ui-states/locked.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={"static/media/locked.49062ad1.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={lockedState}></EmptyState.Image> */}

        <EmptyState.Title>Access denied</EmptyState.Title>
        <EmptyState.Description>
          You don’t have the access to this page. Contact your admin for more information.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button>Go back</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import fileNotFound from '@innovaccer/mds-images/ui-states/file-not-found.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={"static/media/file-not-found.c2ac5177.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={fileNotFound}></EmptyState.Image> */}

        <EmptyState.Title>No results match your criteria</EmptyState.Title>
        <EmptyState.Description>Try adjusting your filters to find what you are looking for.</EmptyState.Description>
        <EmptyState.Actions>
          <Button>Clear filters</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import searchState from '@innovaccer/mds-images/ui-states/search-1.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={"static/media/search-1.bd60817f.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={searchState}></EmptyState.Image> */}

        <EmptyState.Title>No results found for your search</EmptyState.Title>
        <EmptyState.Description>Try adjusting your search to find what you are looking for.</EmptyState.Description>
        <EmptyState.Actions>
          <Button>Clear search</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import fileBroken from '@innovaccer/mds-images/ui-states/file-broken-or-not-found.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={"static/media/file-broken-or-not-found.4b77cf60.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={fileBroken}></EmptyState.Image> */}

        <EmptyState.Title>Page does not exist</EmptyState.Title>
        <EmptyState.Description>
          You seem to have followed a dead link. Check the URL or use the go home button given below.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button>Go home</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import previewContent from '@innovaccer/mds-images/ui-states/content-unavailable.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={"static/media/content-unavailable.d6622368.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={previewContent}></EmptyState.Image> */}

        <EmptyState.Title>Preview for this file is not available</EmptyState.Title>
        <EmptyState.Description>
          The file size is too big or not supported. You can download the file to view it on your computer.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="download">Download</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import historyTime from '@innovaccer/mds-images/ui-states/history-time.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={"static/media/history-time.6e4bb1e4.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={historyTime}></EmptyState.Image> */}

        <EmptyState.Title>This is taking unexpectedly long</EmptyState.Title>
        <EmptyState.Description>
          Failed to complete the request due to slow api response, or server overload. You can try again later.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="refresh">Try again</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```


#### EmptyState

```jsx
import { EmptyState, Button } from '@innovaccer/design-system';

() => {
  // import errorState from '@innovaccer/mds-images/ui-states/error.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={"static/media/error.59aaebe8.svg"}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={errorState}></EmptyState.Image> */}

        <EmptyState.Title>Uh-oh, our server is taking a nap!</EmptyState.Title>
        <EmptyState.Description>
          The server is unavailable at the moment due to maintenance downtime or capacity problems. You can try again
          later.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button>Go back</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}
```