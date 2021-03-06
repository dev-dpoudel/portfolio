import React, { FunctionComponent, useState } from 'react'
import { Menu, Checkbox } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

interface NavaigationProps {
  theme: boolean
  toggleTheme: (mode: boolean) => any
}

const Navigate: FunctionComponent<NavaigationProps> = (props) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const history = useHistory();

  const handleItemClick = (e: any) => {
    history.push(e.target.text);
    setActiveMenu(e.target.text);
  }

  return (
    <div>
      <Menu icon vertical >
        <Menu.Item
          name='home'
          active={activeMenu === 'home'}
          onClick={handleItemClick}
          icon="home"
        />
        <Menu.Item
          name='projects'
          active={activeMenu === 'projects'}
          onClick={handleItemClick}
          icon="file archive"
        />
        <Menu.Item
          name='contact'
          active={activeMenu === 'contact'}
          onClick={handleItemClick}
          icon="envelope"
        />
        <Menu.Item>
          <Checkbox slider
            checked={props.theme}
            onClick={() => props.toggleTheme(!props.theme)}
            label={"Dark"} />
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navigate;
