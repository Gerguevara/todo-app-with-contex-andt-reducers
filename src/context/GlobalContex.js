import {createContext} from 'react';
//shortcut rcontext
export const GlobalContext = createContext({
    tasks: [ {
        id: "1",
        title: "some title",
        description: "some description",
        done: false,
      },
      {
        id: "2",
        title: "some title",
        description: "some description",
        done: false,
      },]
});
