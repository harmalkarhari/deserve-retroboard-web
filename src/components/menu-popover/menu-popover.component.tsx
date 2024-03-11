import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { ListItemText, Menu, MenuItem } from '@mui/material';

interface MenuItemProps {
  label: React.ReactNode;
  id: string;
}

interface MenuPopoverProps {
  style: any;
  items: MenuItemProps[];
  onSelection: (id: string) => void;
}

const MenuPopover: React.FC<MenuPopoverProps> = ({ style, items, onSelection }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        data-testid="more-option-menu-testid"
        style={style}
        sx={{
          minWidth: '5px',
          padding: 0,
          background: 'transparent !important',
          boxShadow: 'unset !important',
        }}
        variant="contained"
        onClick={handleClick}
      >
        <MoreVertOutlinedIcon sx={{ width: '16px', height: '16px' }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items.map(item => {
          return (
            <MenuItem
              key={item.id}
              onClick={() => {
                onSelection(item.id);
                handleClose();
              }}
              sx={{ pt: 0, pb: 0 }}
            >
              <ListItemText>
                <Typography variant="caption">{item.label}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default MenuPopover;
