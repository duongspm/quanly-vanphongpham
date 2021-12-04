import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TopMenu from './component/Menu/TopMenu';
import Nav from './component/Nav/Nav';
import DanhSachPhieuNhap from './component/PhieuNhap/DanhSachPhieuNhap';
import LoadPhieuCap from './component/PhieuCap/DanhSachPhieuCap';
import DanhSachPhongBan from './component/PhongBan/DanhSachPhongBan';

function App() {
  return (
    <Router>
      <TopMenu/>
      <br/>
      <Nav/>
      <br/>
      <Switch>
        <Route exact path="/danh-sach-phong-ban">
          <DanhSachPhongBan/>
        </Route>
        <Route path="/danh-sach-phieu-cap">
          <LoadPhieuCap/>
        </Route>
        <Route path="/danh-sach-phieu-nhap">
          <DanhSachPhieuNhap/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
