import { IHaveId } from "./i-have-id.interface";
import { IHaveName } from "./i-have-name.interface";

export interface IHaveIdAndName extends IHaveId, IHaveName {}
