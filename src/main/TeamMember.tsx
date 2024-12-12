import React, { useState, useRef, useEffect } from "react";
import { Person } from "../classes/Person";

const TeamMember: React.FC<Person, boolean, string> = (props) => {
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  const memberRef = useRef();

  const callback = (entries) => {
    if (entries[0].isIntersecting === true) {
      setVisible(entries[0].isIntersecting);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.6,
    });
    observer.observe(memberRef.current);
  }, [memberRef]);

  function onHoverHandler() {
    if (hover === false) {
      setHover(true);
    } else {
      setHover(false);
    }
  }

  return (
    <>
      <div
        ref={memberRef}
        className={`flex h-[80vh] ${
          props.alignTop === true && "items-end"
        } w-1/4 hover:scale-[0.95] transition duration-500 max-sm:w-[160px] max-xl:h-[40vh] max-sm:items-center max-sm:h-[50vh]`}
        onMouseEnter={onHoverHandler}
        onMouseLeave={onHoverHandler}
      >
        {visible && (
          <div className={`h-[85%] w-full max-xl:h-[80%] animate-fadeIn`}>
            <div className="h-[85%] w-full">
              <img
                className="h-full w-full object-cover rounded-xl"
                src={props.person.image}
                alt={props.person.image}
              />
            </div>
            <div
              className={`grid h-[15%] w-full min-sm:hover:translate-y-[-20px] max-sm:translate-y-0 ${
                hover
                  ? "translate-y-[-20px] transition duration-500 max-sm:translate-y-0"
                  : "translate-y-0 transition duration-500 max-sm:translate-y-0"
              }  max-xl:h-[20%]`}
            >
              <div className="flex items-end">
                <h2 className="font-bold">
                  {" "}
                  {props.person.firstName +
                    " " +
                    props.person.infix +
                    " " +
                    props.person.lastName}
                </h2>
              </div>
              <div className="grid items-start">
                <p className="text-sm text-gray-400">{props.departmentName}</p>
                <a
                  className="text-sm hidden max-sm:block underline text-blue-600"
                  href={`tel:${props.person.phoneNumber}`}
                >
                  Bel {props.person.firstName}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TeamMember;
