import React, {useState} from 'react';
import {Dialog, DialogContent, ListItem, ListItemText} from '@material-ui/core'

export interface Props{
  title: string;
  bodyHTML: any;
};

const Issue = ({title, bodyHTML}: Props) => {
  const [dialogOpened, setDialogOpened] = useState(false);
  return (
    <>
      <ListItem button onClick={() => setDialogOpened(true)}>
        <ListItemText>{title}</ListItemText>
      </ListItem>
      <Dialog maxWidth={'xl'} open={dialogOpened} onClose={() => setDialogOpened(false)}>
        <DialogContent>
          <div dangerouslySetInnerHTML={{__html: bodyHTML}}/>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Issue;
