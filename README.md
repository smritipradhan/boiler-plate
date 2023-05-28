This is the Project which will be the Boiler Plate for the Rest of my Projects

1.mui installed
2.redux-toolkit
3.pretierc
4.hooks
5.pages

TO use Context

```
<UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
```

```
import React from "react";
import { withUser } from "../contexts/mockConsumer";
import { useContext } from "react";
import { UserContext } from "../contexts/mockContexts";

function ComponentC() {
  const { name, happyBirthday, age } = useContext(UserContext);

  return (
    <div>
      ComponentC and the name is {name}
      Age is {age}
      <button onClick={happyBirthday}>happyBirthday</button>
    </div>
  );
}

export default withUser(ComponentC);
```

To use media Quesries

```
@include maxWidth(1280) {
  .yourClassName {
    margin-right: 16px;
  }
```
