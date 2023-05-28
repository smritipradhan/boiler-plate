import { UserContext } from "./mockContexts";

const withUser = (Child) => (props) =>
  (
    <UserContext.Consumer>
      {(context) => <Child {...props} {...context} />}
      {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </UserContext.Consumer>
  );

export { withUser };
