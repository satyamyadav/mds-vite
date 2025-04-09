# Dropzone



### Code Examples

#### Components File Uploader Dropzone All

```jsx
import { Button, Dropzone, LinkButton, FileList } from '@innovaccer/design-system';

() => {
  const [files, setFiles] = React.useState([]);

  const getSize = (size) => (
    `${(size / (1024 * 1024)).toFixed(2)} MB`
  );

  const onDelete = (fileItem) => {
    const updatedFiles = files.filter((file) => file.id !== fileItem.id);
    setFiles(updatedFiles);
  };

  const onDropHandler = (event, acceptedFiles, rejectedFiles) => {
    const acceptedFileDetailList = acceptedFiles.map((file, id) => (
      {
        file,
        id: files.length + id,
        fileSize: getSize(file.size),
        networkError: false,
      }
    ));

    const rejectedFilesDetailList = rejectedFiles.map((rejectedFile, id) => {
      const { file, errors } = rejectedFile;
      const errorMessageArray = errors.map((error) => error.message);
      return {
        file,
        id: files.length + id,
        fileSize: getSize(file.size),
        status: 'error',
        errorMessage: errorMessageArray.join(' and '),
        networkError: false,
      };
    });
    const updatedFiles = [...files, ...acceptedFileDetailList, ...rejectedFilesDetailList];
    setFiles(updatedFiles);
  };

  const actionRenderer = (fileItem) => {
    return (
      <React.Fragment>
        {fileItem.networkError && (
          <Button
            aria-label={`Remove ${fileItem.file.name}`}
            appearance="transparent"
            icon="refresh"
            size="regular"
            onClick={() => onDelete(fileItem.id)}
            className={'cursor-pointer'}
          />
        )}
        <Button
          aria-label={`Remove ${fileItem.file.name}`}
          appearance="transparent"
          icon="close"
          size="regular"
          onClick={() => onDelete(fileItem)}
          className={'cursor-pointer'}
        />
      </React.Fragment>
    );
  }

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    link.download = 'Test.pdf';
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <React.Fragment>
      <Dropzone
        accept="image/jpeg, image/png"
        formatLabel="Accepted formats: jpeg, png"
        sizeLabel="Maximum size: 25 MB"
        multiple={true}
        onDrop={onDropHandler}
        maxSize={26214400}
        className="mb-5"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />
      <FileList
        fileList={files}
        actionRenderer={actionRenderer}
      />
    </React.Fragment>
  );
}
```


#### Components File Uploader Dropzone Variants Disabled

```jsx
import { Dropzone, Text } from '@innovaccer/design-system';

() => {
  const onDrop = (event, acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, rejectedFiles);
  };

  return (
    <div className="w-50 d-flex flex-column align-items-center">
      <Dropzone
        onDrop={onDrop}
        disabled={true}
        className="mb-3"
      />
      <Text size="large" weight="strong">Standard</Text>
      <Dropzone
        onDrop={onDrop}
        disabled={true}
        type="compressed"
        className="mt-6 mb-3"
      />
      <Text size="large" weight="strong">Compressed</Text>
      <Dropzone
        onDrop={onDrop}
        disabled={true}
        type="tight"
        className="mt-6 mb-3"
      />
      <Text size="large" weight="strong">Tight</Text>
    </div>
  );
}
```


#### Components File Uploader Dropzone Variants Format

```jsx
import { Dropzone, LinkButton } from '@innovaccer/design-system';

() => {
  const onDrop = (event, acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, rejectedFiles);
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    link.download = 'Test.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dropzone
      accept="image/jpeg, image/png"
      formatLabel="Accepted formats: jpeg, png"
      onDrop={onDrop}
      className="mb-3"
      sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
    />
  );
}
```


#### Components File Uploader Dropzone Variants Size

```jsx
import { Dropzone, LinkButton, Text } from '@innovaccer/design-system';

() => {
  const onDrop = (event, acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, rejectedFiles);
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    link.download = 'Test.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-50 d-flex flex-column align-items-center">
      <Dropzone
        onDrop={onDrop}
        className="mb-3"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />
      <Text size="large" weight="strong">Standard</Text>
      <Dropzone
        onDrop={onDrop}
        type="compressed"
        className="mt-6 mb-3"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />
      <Text size="large" weight="strong">Compressed</Text>
      <Dropzone
        onDrop={onDrop}
        type="tight"
        className="mt-6 mb-3"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />
      <Text size="large" weight="strong">Tight</Text>
    </div>
  );
}
```