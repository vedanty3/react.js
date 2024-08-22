import axios from "axios";
import React, {
  useEffect,
  useReducer,
  useState,
  useRef,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  createContext,
  useContext,
} from "react";
import { Button } from "react-bootstrap";

const HookComponent = () => {
  return <div></div>;
};

export const UsernameContext = createContext(null);

const Login = () => {
  const { setUsername } = useContext(UsernameContext);

  return (
    <div>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
};

const Username = () => {
  const { username } = useContext(UsernameContext);
  return <div>{username}</div>;
};

const ContextAPI = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <UsernameContext.Provider value={{ username, setUsername }}>
        <Username username={username} />
        <Login setUsername={setUsername} />
      </UsernameContext.Provider>
    </div>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  function toggleState() {
    setToggle(!toggle);
  }

  useImperativeHandle(ref, () => {
    return { toggleState };
  });

  return (
    <div>
      <div style={{ height: "50px" }}>{toggle && <h5>Vedant Yetekar</h5>}</div>
      <button
        style={{ width: "150px", marginBottom: "10px" }}
        onClick={toggleState}
      >
        Child
      </button>
    </div>
  );
});

const ParentComponent = () => {
  const parentRef = useRef(null);

  return (
    <div>
      <ChildComponent ref={parentRef} />
      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={() => parentRef.current.toggleState()}
          style={{ width: "150px" }}
        >
          Parent
        </button>
      </div>
    </div>
  );
};

const UseLayoutEffect = () => {
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    console.log(headingRef.current.innerText);
  }, []);

  useEffect(() => {
    headingRef.current.innerText = "Vedant Ganesh Yetekar";
  }, []);

  return (
    <div>
      <h3 ref={headingRef}>Vedant Yetekar</h3>
    </div>
  );
};

const UseRef = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <Button
        onClick={() => {
          //   inputRef.current.focus();
          inputRef.current.value = "";
        }}
      >
        focus
      </Button>
    </div>
  );
};

const Comments_API = "https://jsonplaceholder.typicode.com/comments";

const UseEffect = () => {
  const [comments, setComments] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios
      .get(Comments_API)
      .then(({ data }) => {
        console.log("fetching...");
        setComments(data);
      })
      .catch((error) => {
        console.log("reload the page");
      });
  }, [counter]);

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div>
      {comments && comments.length > 0 ? (
        <>
          {comments.map((comment) => (
            <h4 key={comment.id}>
              <span>{comment.id}.</span> {comment.name}
            </h4>
          ))}
        </>
      ) : null}
      <div>
        <h3>Counter: {counter}</h3>
        <Button onClick={increment}>add</Button>
      </div>
    </div>
  );
};

const INCREMENT = "INCREMENT";
const TOGGLE = "TOGGLE";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(action.payload);
      return { ...state, count: state.count + 1 };
    case TOGGLE:
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: false,
  });

  return (
    <div>
      <h1>{state.showText && "This is a text"}</h1>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT, payload: 121 });
          dispatch({ type: TOGGLE });
        }}
      >
        click
      </button>
    </div>
  );
};

const UseState = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <Button onClick={increment}>add</Button>
    </div>
  );
};

export default HookComponent;
