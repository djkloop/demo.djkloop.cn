import Vue from 'vue'
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import {
  Button,
  Container,
  Header,
  Footer,
  Main,
  Aside,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Row,
  Col
} from 'element-ui'
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
export default() => {
  Vue
}
