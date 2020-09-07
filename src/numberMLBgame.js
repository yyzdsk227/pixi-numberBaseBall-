import React, { useRef, useState } from "react";
import Try from "./try";
import { useSelector, useDispatch } from "react-redux";
import {
  mlbTries,
  mlbResult,
  mlbValue,
  mlbAnswer,
  mlbInit,
  btnCtrl,
  mlbHitted,
  mlbBalled,
  mlbStriked,
  bunStop,
} from "./action";

const NumberMLBgame = () => {
  //   const [answer, setAnswer] = useState(getNumbers());
  //   const [value, setValue] = useState("");
  //   const [result, setResult] = useState("");
  //   const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const MLBgame = useSelector((state) => state.bunReducer);
  console.log(MLBgame);
  const dispatch = useDispatch();

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(inputEl.current.value, MLBgame.answer.join(""));
    dispatch(btnCtrl());
    if (inputEl.current.value === MLBgame.answer.join("")) {
      //   setTries((t) => [
      //     ...t,
      //     {
      //       try: MLBgame.value,
      //       result: "홈런!",
      //     },
      //   ]);
      //dispatch(mlbTries(inputEl.current.value, "홈런!"));
      //  setResult("홈런!");
      //dispatch(mlbResult("홈런!"));
      // alert("게임을 다시 실행합니다.");

      // //  setValue("");
      // dispatch(mlbValue(""));
      // //   setAnswer(getNumbers());
      // dispatch(mlbAnswer());
      // //  setTries([]);
      // dispatch(mlbInit());

      async function HomeRun() {
        await dispatch(mlbTries(inputEl.current.value, `홈런!`));
        await sleep(1500);
        dispatch(mlbResult());
        await sleep(30);
        dispatch(btnCtrl());
      }

      HomeRun();
      //hit 여부 관련 상태값 추가, 액션함수, texture변경
      //hit 여부 관련 상태값 추가, 액션함수, texture변경
      // inputEl.current.focus();
    } else {
      const answerArray = inputEl.current.value
        .split("")
        .map((v) => parseInt(v));
      let hit = 0;
      let ball = 0;
      console.log(answerArray);
      if (MLBgame.tries.length >= 9) {
        //setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")}였습니다!`); // state set은 비동기
        dispatch(mlbResult("홈런!"));
        alert("게임을 다시 시작합니다.");
        // setValue("");
        dispatch(mlbValue(""));
        //  setAnswer(getNumbers());
        dispatch(mlbAnswer());
        //  setTries([]);
        dispatch(mlbInit());
        inputEl.current.focus();
        setTimeout(() => {
          dispatch(btnCtrl());
        }, 2000); //애니 종료
      } else {
        console.log("답은", MLBgame.answer.join(""));
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === MLBgame.answer[i]) {
            console.log("hit: ", hit, "   ", answerArray[i], MLBgame.answer[i]);
            hit += 1;
            dispatch(mlbHitted());
            //hit 여부 관련 상태값 추가, 액션함수, texture변경
            //hit 여부 관련 상태값 추가, 액션함수, texture변경
            setTimeout(() => {
              dispatch(mlbHitted());
            }, 1000); //애니 종료
          } else if (MLBgame.answer.includes(answerArray[i])) {
            console.log(
              "ball",
              ball,
              "   ",
              answerArray[i],
              MLBgame.answer.indexOf(answerArray[i])
            );
            ball += 1;
            dispatch(mlbBalled());
            //Ball 여부 관련 상태값 추가, 액션함수, texture변경할 필요 없음
            //Ball 여부 관련 상태값 추가, 액션함수, texture변경할 필요 없음
            setTimeout(() => {
              dispatch(mlbBalled());
            }, 1000); //애니 종료
          } else {
            dispatch(mlbStriked());

            setTimeout(() => {
              dispatch(mlbBalled());
            }, 1000); //애니 종료
          }
        }
        // setTries((t) => [
        //   ...t,
        //   {
        //     try: MLBgame.value,
        //     result: `${hit} 스트라이크, ${ball} 볼입니다.`,
        //   },
        // ]);

        // setTimeout(() => {
        //   dispatch(
        //     mlbTries(
        //       inputEl.current.value,
        //       `${hit} 스트라이크, ${ball} 볼입니다.`
        //     )
        //   );
        // }, 1000); //애니 종료

        // setValue("");
        dispatch(mlbValue(""));

        async function resulting() {
          await dispatch(
            mlbTries(inputEl.current.value, `${hit} 적중, ${ball} 볼입니다.`)
          );

          await sleep(1500);
          dispatch(btnCtrl());
          await sleep(30);
          dispatch(bunStop());
        }

        resulting();
        // inputEl.current.focus();
      }
    }
  };

  return (
    <>
      <h1>{MLBgame.result === 2 && "HOMERUN"}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          maxLength={4}
          //  value={e.target.value}
          onChange={(e) => dispatch(mlbValue(e.target.value))}
        />
        <button>입력!</button>
      </form>
      <div>시도: {MLBgame.tries.length}</div>
      <ul>
        {MLBgame.tries.map((v, i) => (
          <Try key={`${i}차 시도 : ${v.try}`} tryInfo={v} />
        ))}
      </ul>
    </>
  );

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
};
export default NumberMLBgame;
