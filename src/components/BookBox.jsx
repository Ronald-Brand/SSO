import { Route, Switch } from "react-router-dom";
import DashboardApps from "./DashboardApps";
import Menu from "./Menu";

const BookBox = () => (
  <>
    <Menu/>
    <Switch>
      <Route exact path="/">
        <DashboardApps/>
      </Route>
    </Switch>
  </>
)

export default BookBox
