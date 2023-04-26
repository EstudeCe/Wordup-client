import { Container } from './styles';
import SettingsIcon from '../icons/SettingsIcon';
import LogoutIcon from '../icons/LogoutIcon';
import DashboardIcon from '../icons/DashboardIcon';

export default function Sidebar() {
  return (
    <Container>
      <div className="container-navbar">
        <strong className="logo">
          W<span>p</span>
        </strong>
        <div>
          <DashboardIcon />
        </div>
      </div>

      <div className="container-footer">
        <SettingsIcon />
        <LogoutIcon />
      </div>
    </Container>
  );
}
