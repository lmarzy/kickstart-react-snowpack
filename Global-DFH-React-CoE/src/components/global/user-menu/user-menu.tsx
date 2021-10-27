import React, { FC } from 'react';

import { Icon } from '../../general/icon/icon';
import { VisuallyHidden } from '../../typography/visually-hidden/visually-hidden';

import { StyledUserMenu, StyledLogoutButton } from './user-menu.styled';

interface UserMenuProps {
  displayName: string;
  onLogout: () => void;
}

export const UserMenu: FC<UserMenuProps> = ({ displayName, onLogout }) => (
  <StyledUserMenu>
    <li>{displayName}</li>
    <li>
      <StyledLogoutButton onClick={onLogout}>
        <Icon name="logout" color="blue" size={3} />
        <VisuallyHidden tag="span">Logout</VisuallyHidden>
      </StyledLogoutButton>
    </li>
  </StyledUserMenu>
);
