import {
  BUNSTART,
  BUNSTOP,
  BtnCtrl,
  MLBTRIES,
  MLBVALUE,
  MLBANSWER,
  MLBINIT,
  MLBRESULT,
  MLBHITTED,
  MLBBALLED,
  MLBSTRIKED,
} from "../action";
import { getNumbers } from "../createMLBnum";

const initialState = {
  rotation: 0,
  locat: 810,
  striked: false,
  balled: false,
  hitted: false,
  control: false,
  answer: getNumbers(),
  value: "",
  result: "",
  tries: [
    {
      try: 0,
      result: "",
    },
  ],
};

export default function bunReducer(state = initialState, action) {
  switch (action.type) {
    case BUNSTART:
      console.log(action.xlocat);
      console.log(action.name);

      return {
        ...state,
        rotation: (action.rotation += action.step * action.delta),
        locat: action.xlocat,
      };

    case BUNSTOP:
      return {
        ...state,
        locat: 810,
      };

    case BtnCtrl:
      return {
        ...state,
        // locat: 1642,
        control: state.control === false ? true : false,
      };

    case MLBTRIES:
      console.log(action);
      return {
        ...state,
        //
        tries: [
          ...state.tries,
          {
            try: action.tried,
            result: action.result,
          },
        ],
      };

    case MLBVALUE:
      return {
        ...state,
        value: String(action.value),
      };

    case MLBANSWER:
      return {
        ...state,
        answer: getNumbers(),
      };

    case MLBINIT:
      return {
        ...state,
        try: initialState.try,
      };

    case MLBRESULT:
      return {
        ...state,
        locat: action.xlocat,
        result: action.result,
      };

    case MLBHITTED:
      return {
        ...state,
        hitted: state.hitted === false ? true : false,
      };

    case MLBBALLED:
      return {
        ...state,
        balled: state.balled === false ? true : false,
      };

    case MLBSTRIKED:
      return {
        ...state,
        striked: state.striked === false ? true : false,
      };

    default:
      return state;
  }
}
