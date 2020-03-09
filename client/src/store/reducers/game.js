import { bindActionCreators } from "redux";
import * as Actions from "store/actions";
import BaseReducer from "./baseReducer";


export default class GameReducer extends BaseReducer {
  initialState = {
    "gameId": "7639fcde-49d2-4dd3-a840-c657d07f7a5e",
    "turn": "black",
    "black": "07210f00-ed86-4679-b651-761fbb63d105",
    "white": "e0205bbc-d7ed-4c56-8ea8-42e769442584",
    "members": [],
    "board": [
      [
        {
          "x": 0,
          "y": 0,
          "state": null,
        },
        {
          "x": 1,
          "y": 0,
          "state": null,
        },
        {
          "x": 2,
          "y": 0,
          "state": null,
        },
        {
          "x": 3,
          "y": 0,
          "state": null,
        },
        {
          "x": 4,
          "y": 0,
          "state": null,
        },
        {
          "x": 5,
          "y": 0,
          "state": null,
        },
        {
          "x": 6,
          "y": 0,
          "state": null,
        },
        {
          "x": 7,
          "y": 0,
          "state": null,
        },
        {
          "x": 8,
          "y": 0,
          "state": null,
        },
        {
          "x": 9,
          "y": 0,
          "state": null,
        },
        {
          "x": 10,
          "y": 0,
          "state": null,
        },
        {
          "x": 11,
          "y": 0,
          "state": null,
        },
        {
          "x": 12,
          "y": 0,
          "state": null,
        },
        {
          "x": 13,
          "y": 0,
          "state": null,
        },
        {
          "x": 14,
          "y": 0,
          "state": null,
        },
        {
          "x": 15,
          "y": 0,
          "state": null,
        },
        {
          "x": 16,
          "y": 0,
          "state": null,
        },
        {
          "x": 17,
          "y": 0,
          "state": null,
        },
        {
          "x": 18,
          "y": 0,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 1,
          "state": null,
        },
        {
          "x": 1,
          "y": 1,
          "state": null,
        },
        {
          "x": 2,
          "y": 1,
          "state": null,
        },
        {
          "x": 3,
          "y": 1,
          "state": null,
        },
        {
          "x": 4,
          "y": 1,
          "state": null,
        },
        {
          "x": 5,
          "y": 1,
          "state": null,
        },
        {
          "x": 6,
          "y": 1,
          "state": null,
        },
        {
          "x": 7,
          "y": 1,
          "state": null,
        },
        {
          "x": 8,
          "y": 1,
          "state": null,
        },
        {
          "x": 9,
          "y": 1,
          "state": null,
        },
        {
          "x": 10,
          "y": 1,
          "state": null,
        },
        {
          "x": 11,
          "y": 1,
          "state": null,
        },
        {
          "x": 12,
          "y": 1,
          "state": null,
        },
        {
          "x": 13,
          "y": 1,
          "state": null,
        },
        {
          "x": 14,
          "y": 1,
          "state": null,
        },
        {
          "x": 15,
          "y": 1,
          "state": null,
        },
        {
          "x": 16,
          "y": 1,
          "state": null,
        },
        {
          "x": 17,
          "y": 1,
          "state": null,
        },
        {
          "x": 18,
          "y": 1,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 2,
          "state": null,
        },
        {
          "x": 1,
          "y": 2,
          "state": null,
        },
        {
          "x": 2,
          "y": 2,
          "state": null,
        },
        {
          "x": 3,
          "y": 2,
          "state": null,
        },
        {
          "x": 4,
          "y": 2,
          "state": null,
        },
        {
          "x": 5,
          "y": 2,
          "state": null,
        },
        {
          "x": 6,
          "y": 2,
          "state": null,
        },
        {
          "x": 7,
          "y": 2,
          "state": null,
        },
        {
          "x": 8,
          "y": 2,
          "state": null,
        },
        {
          "x": 9,
          "y": 2,
          "state": null,
        },
        {
          "x": 10,
          "y": 2,
          "state": null,
        },
        {
          "x": 11,
          "y": 2,
          "state": null,
        },
        {
          "x": 12,
          "y": 2,
          "state": null,
        },
        {
          "x": 13,
          "y": 2,
          "state": null,
        },
        {
          "x": 14,
          "y": 2,
          "state": null,
        },
        {
          "x": 15,
          "y": 2,
          "state": null,
        },
        {
          "x": 16,
          "y": 2,
          "state": null,
        },
        {
          "x": 17,
          "y": 2,
          "state": null,
        },
        {
          "x": 18,
          "y": 2,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 3,
          "state": null,
        },
        {
          "x": 1,
          "y": 3,
          "state": null,
        },
        {
          "x": 2,
          "y": 3,
          "state": null,
        },
        {
          "x": 3,
          "y": 3,
          "state": null,
        },
        {
          "x": 4,
          "y": 3,
          "state": null,
        },
        {
          "x": 5,
          "y": 3,
          "state": null,
        },
        {
          "x": 6,
          "y": 3,
          "state": null,
        },
        {
          "x": 7,
          "y": 3,
          "state": null,
        },
        {
          "x": 8,
          "y": 3,
          "state": null,
        },
        {
          "x": 9,
          "y": 3,
          "state": null,
        },
        {
          "x": 10,
          "y": 3,
          "state": null,
        },
        {
          "x": 11,
          "y": 3,
          "state": null,
        },
        {
          "x": 12,
          "y": 3,
          "state": null,
        },
        {
          "x": 13,
          "y": 3,
          "state": null,
        },
        {
          "x": 14,
          "y": 3,
          "state": null,
        },
        {
          "x": 15,
          "y": 3,
          "state": null,
        },
        {
          "x": 16,
          "y": 3,
          "state": null,
        },
        {
          "x": 17,
          "y": 3,
          "state": null,
        },
        {
          "x": 18,
          "y": 3,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 4,
          "state": null,
        },
        {
          "x": 1,
          "y": 4,
          "state": null,
        },
        {
          "x": 2,
          "y": 4,
          "state": null,
        },
        {
          "x": 3,
          "y": 4,
          "state": null,
        },
        {
          "x": 4,
          "y": 4,
          "state": null,
        },
        {
          "x": 5,
          "y": 4,
          "state": null,
        },
        {
          "x": 6,
          "y": 4,
          "state": null,
        },
        {
          "x": 7,
          "y": 4,
          "state": null,
        },
        {
          "x": 8,
          "y": 4,
          "state": null,
        },
        {
          "x": 9,
          "y": 4,
          "state": null,
        },
        {
          "x": 10,
          "y": 4,
          "state": null,
        },
        {
          "x": 11,
          "y": 4,
          "state": null,
        },
        {
          "x": 12,
          "y": 4,
          "state": null,
        },
        {
          "x": 13,
          "y": 4,
          "state": null,
        },
        {
          "x": 14,
          "y": 4,
          "state": null,
        },
        {
          "x": 15,
          "y": 4,
          "state": null,
        },
        {
          "x": 16,
          "y": 4,
          "state": null,
        },
        {
          "x": 17,
          "y": 4,
          "state": null,
        },
        {
          "x": 18,
          "y": 4,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 5,
          "state": null,
        },
        {
          "x": 1,
          "y": 5,
          "state": null,
        },
        {
          "x": 2,
          "y": 5,
          "state": null,
        },
        {
          "x": 3,
          "y": 5,
          "state": null,
        },
        {
          "x": 4,
          "y": 5,
          "state": null,
        },
        {
          "x": 5,
          "y": 5,
          "state": null,
        },
        {
          "x": 6,
          "y": 5,
          "state": null,
        },
        {
          "x": 7,
          "y": 5,
          "state": null,
        },
        {
          "x": 8,
          "y": 5,
          "state": null,
        },
        {
          "x": 9,
          "y": 5,
          "state": null,
        },
        {
          "x": 10,
          "y": 5,
          "state": null,
        },
        {
          "x": 11,
          "y": 5,
          "state": null,
        },
        {
          "x": 12,
          "y": 5,
          "state": null,
        },
        {
          "x": 13,
          "y": 5,
          "state": null,
        },
        {
          "x": 14,
          "y": 5,
          "state": null,
        },
        {
          "x": 15,
          "y": 5,
          "state": null,
        },
        {
          "x": 16,
          "y": 5,
          "state": null,
        },
        {
          "x": 17,
          "y": 5,
          "state": null,
        },
        {
          "x": 18,
          "y": 5,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 6,
          "state": null,
        },
        {
          "x": 1,
          "y": 6,
          "state": null,
        },
        {
          "x": 2,
          "y": 6,
          "state": null,
        },
        {
          "x": 3,
          "y": 6,
          "state": null,
        },
        {
          "x": 4,
          "y": 6,
          "state": null,
        },
        {
          "x": 5,
          "y": 6,
          "state": null,
        },
        {
          "x": 6,
          "y": 6,
          "state": null,
        },
        {
          "x": 7,
          "y": 6,
          "state": null,
        },
        {
          "x": 8,
          "y": 6,
          "state": null,
        },
        {
          "x": 9,
          "y": 6,
          "state": null,
        },
        {
          "x": 10,
          "y": 6,
          "state": null,
        },
        {
          "x": 11,
          "y": 6,
          "state": null,
        },
        {
          "x": 12,
          "y": 6,
          "state": null,
        },
        {
          "x": 13,
          "y": 6,
          "state": null,
        },
        {
          "x": 14,
          "y": 6,
          "state": null,
        },
        {
          "x": 15,
          "y": 6,
          "state": null,
        },
        {
          "x": 16,
          "y": 6,
          "state": null,
        },
        {
          "x": 17,
          "y": 6,
          "state": null,
        },
        {
          "x": 18,
          "y": 6,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 7,
          "state": null,
        },
        {
          "x": 1,
          "y": 7,
          "state": null,
        },
        {
          "x": 2,
          "y": 7,
          "state": null,
        },
        {
          "x": 3,
          "y": 7,
          "state": null,
        },
        {
          "x": 4,
          "y": 7,
          "state": null,
        },
        {
          "x": 5,
          "y": 7,
          "state": null,
        },
        {
          "x": 6,
          "y": 7,
          "state": null,
        },
        {
          "x": 7,
          "y": 7,
          "state": null,
        },
        {
          "x": 8,
          "y": 7,
          "state": null,
        },
        {
          "x": 9,
          "y": 7,
          "state": null,
        },
        {
          "x": 10,
          "y": 7,
          "state": null,
        },
        {
          "x": 11,
          "y": 7,
          "state": null,
        },
        {
          "x": 12,
          "y": 7,
          "state": null,
        },
        {
          "x": 13,
          "y": 7,
          "state": null,
        },
        {
          "x": 14,
          "y": 7,
          "state": null,
        },
        {
          "x": 15,
          "y": 7,
          "state": null,
        },
        {
          "x": 16,
          "y": 7,
          "state": null,
        },
        {
          "x": 17,
          "y": 7,
          "state": null,
        },
        {
          "x": 18,
          "y": 7,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 8,
          "state": null,
        },
        {
          "x": 1,
          "y": 8,
          "state": null,
        },
        {
          "x": 2,
          "y": 8,
          "state": null,
        },
        {
          "x": 3,
          "y": 8,
          "state": null,
        },
        {
          "x": 4,
          "y": 8,
          "state": null,
        },
        {
          "x": 5,
          "y": 8,
          "state": null,
        },
        {
          "x": 6,
          "y": 8,
          "state": null,
        },
        {
          "x": 7,
          "y": 8,
          "state": null,
        },
        {
          "x": 8,
          "y": 8,
          "state": null,
        },
        {
          "x": 9,
          "y": 8,
          "state": null,
        },
        {
          "x": 10,
          "y": 8,
          "state": null,
        },
        {
          "x": 11,
          "y": 8,
          "state": null,
        },
        {
          "x": 12,
          "y": 8,
          "state": null,
        },
        {
          "x": 13,
          "y": 8,
          "state": null,
        },
        {
          "x": 14,
          "y": 8,
          "state": null,
        },
        {
          "x": 15,
          "y": 8,
          "state": null,
        },
        {
          "x": 16,
          "y": 8,
          "state": null,
        },
        {
          "x": 17,
          "y": 8,
          "state": null,
        },
        {
          "x": 18,
          "y": 8,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 9,
          "state": null,
        },
        {
          "x": 1,
          "y": 9,
          "state": null,
        },
        {
          "x": 2,
          "y": 9,
          "state": null,
        },
        {
          "x": 3,
          "y": 9,
          "state": null,
        },
        {
          "x": 4,
          "y": 9,
          "state": null,
        },
        {
          "x": 5,
          "y": 9,
          "state": null,
        },
        {
          "x": 6,
          "y": 9,
          "state": null,
        },
        {
          "x": 7,
          "y": 9,
          "state": null,
        },
        {
          "x": 8,
          "y": 9,
          "state": null,
        },
        {
          "x": 9,
          "y": 9,
          "state": null,
        },
        {
          "x": 10,
          "y": 9,
          "state": null,
        },
        {
          "x": 11,
          "y": 9,
          "state": null,
        },
        {
          "x": 12,
          "y": 9,
          "state": null,
        },
        {
          "x": 13,
          "y": 9,
          "state": null,
        },
        {
          "x": 14,
          "y": 9,
          "state": null,
        },
        {
          "x": 15,
          "y": 9,
          "state": null,
        },
        {
          "x": 16,
          "y": 9,
          "state": null,
        },
        {
          "x": 17,
          "y": 9,
          "state": null,
        },
        {
          "x": 18,
          "y": 9,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 10,
          "state": null,
        },
        {
          "x": 1,
          "y": 10,
          "state": null,
        },
        {
          "x": 2,
          "y": 10,
          "state": null,
        },
        {
          "x": 3,
          "y": 10,
          "state": null,
        },
        {
          "x": 4,
          "y": 10,
          "state": null,
        },
        {
          "x": 5,
          "y": 10,
          "state": null,
        },
        {
          "x": 6,
          "y": 10,
          "state": null,
        },
        {
          "x": 7,
          "y": 10,
          "state": null,
        },
        {
          "x": 8,
          "y": 10,
          "state": null,
        },
        {
          "x": 9,
          "y": 10,
          "state": null,
        },
        {
          "x": 10,
          "y": 10,
          "state": null,
        },
        {
          "x": 11,
          "y": 10,
          "state": null,
        },
        {
          "x": 12,
          "y": 10,
          "state": null,
        },
        {
          "x": 13,
          "y": 10,
          "state": null,
        },
        {
          "x": 14,
          "y": 10,
          "state": null,
        },
        {
          "x": 15,
          "y": 10,
          "state": null,
        },
        {
          "x": 16,
          "y": 10,
          "state": null,
        },
        {
          "x": 17,
          "y": 10,
          "state": null,
        },
        {
          "x": 18,
          "y": 10,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 11,
          "state": null,
        },
        {
          "x": 1,
          "y": 11,
          "state": null,
        },
        {
          "x": 2,
          "y": 11,
          "state": null,
        },
        {
          "x": 3,
          "y": 11,
          "state": null,
        },
        {
          "x": 4,
          "y": 11,
          "state": null,
        },
        {
          "x": 5,
          "y": 11,
          "state": null,
        },
        {
          "x": 6,
          "y": 11,
          "state": null,
        },
        {
          "x": 7,
          "y": 11,
          "state": null,
        },
        {
          "x": 8,
          "y": 11,
          "state": null,
        },
        {
          "x": 9,
          "y": 11,
          "state": null,
        },
        {
          "x": 10,
          "y": 11,
          "state": null,
        },
        {
          "x": 11,
          "y": 11,
          "state": null,
        },
        {
          "x": 12,
          "y": 11,
          "state": null,
        },
        {
          "x": 13,
          "y": 11,
          "state": null,
        },
        {
          "x": 14,
          "y": 11,
          "state": null,
        },
        {
          "x": 15,
          "y": 11,
          "state": null,
        },
        {
          "x": 16,
          "y": 11,
          "state": null,
        },
        {
          "x": 17,
          "y": 11,
          "state": null,
        },
        {
          "x": 18,
          "y": 11,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 12,
          "state": null,
        },
        {
          "x": 1,
          "y": 12,
          "state": null,
        },
        {
          "x": 2,
          "y": 12,
          "state": null,
        },
        {
          "x": 3,
          "y": 12,
          "state": null,
        },
        {
          "x": 4,
          "y": 12,
          "state": null,
        },
        {
          "x": 5,
          "y": 12,
          "state": null,
        },
        {
          "x": 6,
          "y": 12,
          "state": null,
        },
        {
          "x": 7,
          "y": 12,
          "state": null,
        },
        {
          "x": 8,
          "y": 12,
          "state": null,
        },
        {
          "x": 9,
          "y": 12,
          "state": null,
        },
        {
          "x": 10,
          "y": 12,
          "state": null,
        },
        {
          "x": 11,
          "y": 12,
          "state": null,
        },
        {
          "x": 12,
          "y": 12,
          "state": null,
        },
        {
          "x": 13,
          "y": 12,
          "state": null,
        },
        {
          "x": 14,
          "y": 12,
          "state": null,
        },
        {
          "x": 15,
          "y": 12,
          "state": null,
        },
        {
          "x": 16,
          "y": 12,
          "state": null,
        },
        {
          "x": 17,
          "y": 12,
          "state": null,
        },
        {
          "x": 18,
          "y": 12,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 13,
          "state": null,
        },
        {
          "x": 1,
          "y": 13,
          "state": null,
        },
        {
          "x": 2,
          "y": 13,
          "state": null,
        },
        {
          "x": 3,
          "y": 13,
          "state": null,
        },
        {
          "x": 4,
          "y": 13,
          "state": null,
        },
        {
          "x": 5,
          "y": 13,
          "state": null,
        },
        {
          "x": 6,
          "y": 13,
          "state": null,
        },
        {
          "x": 7,
          "y": 13,
          "state": null,
        },
        {
          "x": 8,
          "y": 13,
          "state": null,
        },
        {
          "x": 9,
          "y": 13,
          "state": null,
        },
        {
          "x": 10,
          "y": 13,
          "state": null,
        },
        {
          "x": 11,
          "y": 13,
          "state": null,
        },
        {
          "x": 12,
          "y": 13,
          "state": null,
        },
        {
          "x": 13,
          "y": 13,
          "state": null,
        },
        {
          "x": 14,
          "y": 13,
          "state": null,
        },
        {
          "x": 15,
          "y": 13,
          "state": null,
        },
        {
          "x": 16,
          "y": 13,
          "state": null,
        },
        {
          "x": 17,
          "y": 13,
          "state": null,
        },
        {
          "x": 18,
          "y": 13,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 14,
          "state": null,
        },
        {
          "x": 1,
          "y": 14,
          "state": null,
        },
        {
          "x": 2,
          "y": 14,
          "state": null,
        },
        {
          "x": 3,
          "y": 14,
          "state": null,
        },
        {
          "x": 4,
          "y": 14,
          "state": null,
        },
        {
          "x": 5,
          "y": 14,
          "state": null,
        },
        {
          "x": 6,
          "y": 14,
          "state": null,
        },
        {
          "x": 7,
          "y": 14,
          "state": null,
        },
        {
          "x": 8,
          "y": 14,
          "state": null,
        },
        {
          "x": 9,
          "y": 14,
          "state": null,
        },
        {
          "x": 10,
          "y": 14,
          "state": null,
        },
        {
          "x": 11,
          "y": 14,
          "state": null,
        },
        {
          "x": 12,
          "y": 14,
          "state": null,
        },
        {
          "x": 13,
          "y": 14,
          "state": null,
        },
        {
          "x": 14,
          "y": 14,
          "state": null,
        },
        {
          "x": 15,
          "y": 14,
          "state": null,
        },
        {
          "x": 16,
          "y": 14,
          "state": null,
        },
        {
          "x": 17,
          "y": 14,
          "state": null,
        },
        {
          "x": 18,
          "y": 14,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 15,
          "state": null,
        },
        {
          "x": 1,
          "y": 15,
          "state": null,
        },
        {
          "x": 2,
          "y": 15,
          "state": null,
        },
        {
          "x": 3,
          "y": 15,
          "state": null,
        },
        {
          "x": 4,
          "y": 15,
          "state": null,
        },
        {
          "x": 5,
          "y": 15,
          "state": null,
        },
        {
          "x": 6,
          "y": 15,
          "state": null,
        },
        {
          "x": 7,
          "y": 15,
          "state": null,
        },
        {
          "x": 8,
          "y": 15,
          "state": null,
        },
        {
          "x": 9,
          "y": 15,
          "state": null,
        },
        {
          "x": 10,
          "y": 15,
          "state": null,
        },
        {
          "x": 11,
          "y": 15,
          "state": null,
        },
        {
          "x": 12,
          "y": 15,
          "state": null,
        },
        {
          "x": 13,
          "y": 15,
          "state": null,
        },
        {
          "x": 14,
          "y": 15,
          "state": null,
        },
        {
          "x": 15,
          "y": 15,
          "state": null,
        },
        {
          "x": 16,
          "y": 15,
          "state": null,
        },
        {
          "x": 17,
          "y": 15,
          "state": null,
        },
        {
          "x": 18,
          "y": 15,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 16,
          "state": null,
        },
        {
          "x": 1,
          "y": 16,
          "state": null,
        },
        {
          "x": 2,
          "y": 16,
          "state": null,
        },
        {
          "x": 3,
          "y": 16,
          "state": null,
        },
        {
          "x": 4,
          "y": 16,
          "state": null,
        },
        {
          "x": 5,
          "y": 16,
          "state": null,
        },
        {
          "x": 6,
          "y": 16,
          "state": null,
        },
        {
          "x": 7,
          "y": 16,
          "state": null,
        },
        {
          "x": 8,
          "y": 16,
          "state": null,
        },
        {
          "x": 9,
          "y": 16,
          "state": null,
        },
        {
          "x": 10,
          "y": 16,
          "state": null,
        },
        {
          "x": 11,
          "y": 16,
          "state": null,
        },
        {
          "x": 12,
          "y": 16,
          "state": null,
        },
        {
          "x": 13,
          "y": 16,
          "state": null,
        },
        {
          "x": 14,
          "y": 16,
          "state": null,
        },
        {
          "x": 15,
          "y": 16,
          "state": null,
        },
        {
          "x": 16,
          "y": 16,
          "state": null,
        },
        {
          "x": 17,
          "y": 16,
          "state": null,
        },
        {
          "x": 18,
          "y": 16,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 17,
          "state": null,
        },
        {
          "x": 1,
          "y": 17,
          "state": null,
        },
        {
          "x": 2,
          "y": 17,
          "state": null,
        },
        {
          "x": 3,
          "y": 17,
          "state": null,
        },
        {
          "x": 4,
          "y": 17,
          "state": null,
        },
        {
          "x": 5,
          "y": 17,
          "state": null,
        },
        {
          "x": 6,
          "y": 17,
          "state": null,
        },
        {
          "x": 7,
          "y": 17,
          "state": null,
        },
        {
          "x": 8,
          "y": 17,
          "state": null,
        },
        {
          "x": 9,
          "y": 17,
          "state": null,
        },
        {
          "x": 10,
          "y": 17,
          "state": null,
        },
        {
          "x": 11,
          "y": 17,
          "state": null,
        },
        {
          "x": 12,
          "y": 17,
          "state": null,
        },
        {
          "x": 13,
          "y": 17,
          "state": null,
        },
        {
          "x": 14,
          "y": 17,
          "state": null,
        },
        {
          "x": 15,
          "y": 17,
          "state": null,
        },
        {
          "x": 16,
          "y": 17,
          "state": null,
        },
        {
          "x": 17,
          "y": 17,
          "state": null,
        },
        {
          "x": 18,
          "y": 17,
          "state": null,
        },
      ],
      [
        {
          "x": 0,
          "y": 18,
          "state": null,
        },
        {
          "x": 1,
          "y": 18,
          "state": null,
        },
        {
          "x": 2,
          "y": 18,
          "state": null,
        },
        {
          "x": 3,
          "y": 18,
          "state": null,
        },
        {
          "x": 4,
          "y": 18,
          "state": null,
        },
        {
          "x": 5,
          "y": 18,
          "state": null,
        },
        {
          "x": 6,
          "y": 18,
          "state": null,
        },
        {
          "x": 7,
          "y": 18,
          "state": null,
        },
        {
          "x": 8,
          "y": 18,
          "state": null,
        },
        {
          "x": 9,
          "y": 18,
          "state": null,
        },
        {
          "x": 10,
          "y": 18,
          "state": null,
        },
        {
          "x": 11,
          "y": 18,
          "state": null,
        },
        {
          "x": 12,
          "y": 18,
          "state": null,
        },
        {
          "x": 13,
          "y": 18,
          "state": null,
        },
        {
          "x": 14,
          "y": 18,
          "state": null,
        },
        {
          "x": 15,
          "y": 18,
          "state": null,
        },
        {
          "x": 16,
          "y": 18,
          "state": null,
        },
        {
          "x": 17,
          "y": 18,
          "state": null,
        },
        {
          "x": 18,
          "y": 18,
          "state": null,
        },
      ],
    ],
  };

  [Actions.REQUEST_START_GAME_FINISHED().type](state, action) {
    return {
      ...action.payload.game,
    };
  }

  [Actions.REQUEST_PLACE_STONE_FINISHED().type](state, action) {
    return {
      ...action.payload.game,
    };
  }

  [Actions.REQUEST_PASS_FINISHED().type](state, action) {
    return {
      ...action.payload.game,
    };
  }

  [Actions.REQUEST_GAME_OVER().type](state, action) {
    return {
      ...action.payload.game,
      scores: action.payload.scores,
    };
  }
}


