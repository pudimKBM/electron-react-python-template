// components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {['Form', 'Markdown'].map((text, index) => (
          <ListItem button key={text} component={Link} to={text === 'Form' ? '/form' : text === 'Markdown' ? '/markdown' : '#'}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
